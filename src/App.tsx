import "./index.css";

import { useState } from "react";
import { Nav } from "./components/header";
import { FooterComp } from "./components/footer";
import {Login} from "./components/loginModal";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about.pages";
import Home from "./pages/home.pages";
import UserTable from "./pages/adminControl.pages";
import Error404 from "./pages/error.pages";

function App() {
  
  const [loginOpen, setLoginOpen] = useState(false);
  
  return (
    <BrowserRouter basename="/reactFinalProject">

      <div className="flex flex-col min-h-screen bg-slate-200 dark:bg-black">
        <nav className="sticky top-0 z-50">
          <Nav onLoginClick={() => setLoginOpen(true)} />
          <Login show={loginOpen} onClose={() => setLoginOpen(false)} />
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/adminControl' element={<UserTable />} />

          <Route path="/*" element={<Error404 />} />
        </Routes>
        
        <footer>
          <FooterComp />
        </footer>

        <ToastContainer aria-label={undefined} />
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
