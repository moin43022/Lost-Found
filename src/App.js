import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkillsSlider from './components/SkillsSlider'
import Area from './components/Area';
import Category from './components/Category';
import How from './components/How';
import Slider from "./components/Slider"
import Lost from './components/Lost';
import Found from "./components/Found"
import Lostform from './components/Lostform';
import Foundform from './components/Foundform';
import About from './components/About';
function App() {
  return (

       <BrowserRouter>
       <Routes>
         <Route
            path="/"
            element={
              <>
            <Navbar />
            <Home />
            <SkillsSlider />
            <How />
            <Area />
            <Category />
            <Slider />
            <Footer />
              </>
            }
          />

           <Route
            path="/lost"
            element={
              <>
            <Navbar />
            <Lost />
            <Footer />
              </>
            }/>

             <Route
            path="/found"
            element={
              <>
            <Navbar />
            <Found />
            <Footer />
              </>
            } />


           <Route path="/lostform" element={
              <>
            <Navbar />
            <Lostform />
            <Footer />
              </>
            } />


             <Route path="/foundform" element={
              <>
            <Navbar />
            <Foundform />
            <Footer />
              </>
            } />

               <Route path="/about" element={
              <>
            <Navbar />
            <About />
            <Footer />
              </>
            } />
      </Routes>
      
      
    </BrowserRouter>

  );
}

export default App;
