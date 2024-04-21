import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "../source/homepage/homepage";
import Mehpop from "../source/mehpop/mehpop";

const Routering = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/play" element={<Mehpop/>}/>
      </Routes>
    </Router>
  )

}

export default Routering