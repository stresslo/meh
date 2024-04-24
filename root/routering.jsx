import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "../source/homepage/homepage";
import Mehpop from "../source/mehpop/mehpop";
import Admin from "../source/admin/admin";
import React, { useEffect } from "react";

const Routering = () => {

  const [currentPoints, setCurrentPoints] = React.useState(parseInt(localStorage.getItem('clvcrnPnt')) || 0)
  useEffect(() => { localStorage.setItem('clvcrnPnt', currentPoints);}, [currentPoints])

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/play" element={<Mehpop setCurrentPoints={setCurrentPoints} currentPoints={currentPoints}/>}/>
          <Route path="/sw4m-sc-gmj/admin" element={<Admin setCurrentPoints={setCurrentPoints}/>}/>
        </Routes>
      </Router>
  )

}

export default Routering