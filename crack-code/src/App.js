import React from 'react'; 
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
// import Widgets from  './Components/Widgets';
import Login from './Components/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }] = useStateValue();
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
            {/* <Widgets /> */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;



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
