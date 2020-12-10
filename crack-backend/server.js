import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage';
import Grid from 'gridfs-stream'
import bodyParser from 'body-parser';
import path from 'path';
import Pusher from 'pusher';
import mongoPosts from './mongoPosts.js';

//initialising gridfs object
Grid.mongo = mongoose.mongo;

//app config
const app = express()
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1120986",
    key: "6216f3caed65d6ca8dea",
    secret: "bbfb8bae29f4b6a7b6a6",
    cluster: "ap2",
    useTLS: true
});

//middleware
app.use(bodyParser.json());
app.use(cors());

//db config
const mongoURI = 'mongodb+srv://crack-client:Cy9YLiU0MTBeHhqF@cluster0.5rqpz.mongodb.net/crack-code-db?retryWrites=true&w=majority'
const conn = mongoose.createConnection(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log("DB connectad");

    const changeStream = mongoose.connection.collection('posts').watch();

    changeStream.on('change',(change) => {
        console.log(change);
        if(change.operationType === 'insert'){
            console.log("Trigger pusher")

            pusher.trigger('posts','inserted', {
                change: change
            })
        } else {
            console.log('Error triggering pusher')
        }
    })
})

let gfs;

conn.once('open', () => { 
    console.log('DB Connected');

    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('images');
})

const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            {
                const filename = `image-${Date.now()}${path.extname(file.originalname)}`

                const fileInfo = {
                    filename: filename,
                    bucketName: 'images'
                }

                resolve(fileInfo);
            }
        });
    }
});

const upload = multer({ storage });

mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//api routes
app.get('/',(req, res) => { res.status(200).send('hello no more')});

app.post('/upload/image', upload.single('file'), (req, res) => { 
    res.status(201).send(req.file);
});

app.post('/upload/post', (req, res) => {
    const dbPost = req.body;

    mongoPosts.create(dbPost, (err, data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

app.get('/retrieve/image/single', (req, res) => {
    gfs.files.findOne({filename: req.query.name}, (err, file) => {
        if(err){
            res.status(500).send(err);
        } else {
            if(!file || file.length === 0){
                res.status(404).json({err:'file not found'})
            } else {
                const readstream = gfs.createReadStream(file.filename);
                readstream.pipe(res);
            }
        }
    })
})

app.get('/retrieve/posts',(req, res) => {
    mongoPosts.find((err, data ) => {
        if(err) {
            res.status(500).send(err);
        } else {
            data.sort((b,a) => {
                return a.timestamp - b.timestamp;
            });

            res.status(200).send(data);
        }
    })
})
console.log(port);
//listen
app.listen(port, () => console.log((`listening on localhost:${port}`)));