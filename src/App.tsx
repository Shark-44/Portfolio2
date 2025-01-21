import { Route, Routes } from "react-router-dom";
import './App.css'

import Home from "./pages/Home";
import One from "./pages/One";
import Two from "./pages/Two";

import Contact from "./pages/Contact";


function App() {


  return (
    <>

      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/One" element={<One />} />
         <Route path="/Two" element={<Two />} />
         <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App