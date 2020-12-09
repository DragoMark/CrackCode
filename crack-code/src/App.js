import React from 'react'; 
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widgets from  './Components/Widgets';
import Login from './Components/Login';


function App() {
  const user = ""
  return (
    <div className="app">
      { !user ? (
        <Login />
      ):(
        <>
          <Header />
        
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;


// import React from 'react';
// import './App.css';
// import Feed from './Components/Feed';
// import Header from './Components/Header';
// import Login from './Components/Login';
// import Sidebar from './Components/Sidebar';
// import Widgets from './Components/Widgets';
// import { useStateValue } from './StateProvider';

// function App() {
//   const [{ user }, dispatch] = useStateValue()
  
//   return (
//     <div className="App">
//       {
//         user ? (
//           <>
//             <Header />

//             <div className="app__body">
//               <Sidebar />
//               <Feed />
//               <Widgets />
//             </div>
//           </>
//         ) : (
//             <Login />
//           )
//       }

//     </div>
//   );
// }

// export default App;
