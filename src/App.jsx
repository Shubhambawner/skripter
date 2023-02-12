import React, { useState } from "react";

import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Records from "./components/Records.jsx";
import Sidenav from "./components/Sidenav.jsx";
import Slides from "./components/Slides.jsx";

function App() {
  let [activePage, setActivePage] = useState('home')
  let [metadata, setMetadata] = useState({})

  // let pages = {
  //   'home': true,
  //   'recordings': true,
  //   'about': true,
  // }

  function navigate(page, metadata) {
    console.log(page,metadata);
    // if (pages[page]) {
      setActivePage(page)
      setMetadata(metadata)
    // }else{
    // }
  }

  let utils = { navigate, metadata }

  console.log(activePage);

  return (
    <div className="row g-2">
      <div className="col-3"><Sidenav navigate={navigate} /></div>
      <div className="col-9">
        {activePage == 'home' && <Home utils={utils} />}
        {activePage == 'recordings' && <Records navigate={navigate} />}
        {activePage == 'about' && <About utils={utils} />}
        <Slides navigate={navigate} metadata={1}/>
      </div>
    </div>
  );
}

export default App;