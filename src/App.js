import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkillsSlider from './components/SkillsSlider'
import Area from './components/Area';
import Category from './components/Category';
import How from './components/How';
import Slider from "./components/Slider"
function App() {
  return (
<div>
  <Navbar />
<Home />
<SkillsSlider />
<How />
<Area />
<Category />
<Slider />
<Footer />
</div>
  );
}

export default App;
