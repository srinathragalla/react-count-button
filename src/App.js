// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React,{userState, useState} from "react";
import "./App.css";
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2 style={{color:"green"}}>Count Likes { count }</h2>
      <button onClick={()=>setCount(count+1)}>Like</button>
    </div>
  );
    
}