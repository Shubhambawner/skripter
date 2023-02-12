import React from "react";

import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Records from "./components/Records.jsx";
import Sidenav from "./components/Sidenav.jsx";

function App() {

  
  return (
    <div className="row g-2">
     <Sidenav/>
      <div className="col-9">
     <Home/>
      <Records/>
     <About/> 
     </div>
    </div>
  );
}

export default App;