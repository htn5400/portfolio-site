// import logo from './logo.svg';
// import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar"


function App() {
  return (
    <div>
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
      
     
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" /> 
//         <p>
//           HUONG NGUYEN
//         </p>
//         <a
//           className="Linkedin-link"
//           href="https://linkedin.com/in/htn5400"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           MY LINKEDIN HAHAH
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
