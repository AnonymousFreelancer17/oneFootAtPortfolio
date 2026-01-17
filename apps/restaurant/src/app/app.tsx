import Home from "./Home";
import NxWelcome from "./nx-welcome";

//  navbar
// import {Navbar} from "@ui" 


import { Route, Routes, Link, BrowserRouter, Router } from "react-router-dom";

export function App() {
  return (
    <Routes>
      {/* <Navbar /> */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
