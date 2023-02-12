import React, { useState } from "react";

import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Records from "./components/Records.jsx";
import Sidenav from "./components/Sidenav.jsx";

function App() {
  let [activePage, setActivePage] = useState('home')
  let [metadata, setMetadata] = useState({})

  let pages = {
    'home': true,
    'records': true,
    'about': true,
  }

  function navigate(page, metadata) {
    if (pages[page]) {
      setActivePage(page)
      setMetadata(metadata)
    }else{
      console.log(page, pages, 'invalid page suplied...');
    }
  }

  let utils = { navigate, metadata }

  return (
    <div className="row g-2">
      <div className="col-3"><Sidenav utils={utils} /></div>
      <div className="col-9">
        {activePage == 'home' && <Home utils={utils} />}
        {activePage == 'records' && <Records utils={utils} />}
        {activePage == 'about' && <About utils={utils} />}
      </div>
    </div>
  );
}

export default App;