import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "../source/homepage/homepage";
import Mehpop from "../source/mehpop/mehpop";
import Admin from "../source/admin/admin";
import React from "react";

const Routering = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/play" element={<Mehpop/>}/>
        <Route path="/sw4m-sc-gmj/admin" element={<Admin/>}/>
      </Routes>
    </Router>
  )

}

export default Routering