
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Monochromatic from './pages/Monochromatic';
import Animals from './pages/Animals';
import ArchitectureInterior from './pages/ArchitectureInterior';
import Film from './pages/Film';
import Experimental from './pages/Experimental';
import StreetPhotography from './pages/StreetPhotography';
import TexturesPatterns from './pages/TexturesPatterns';
import Nature from './pages/Nature';
import Renders from './pages/Renders';
import Wall from './pages/Wall';
import Search from './pages/Search';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home namepage='home' />} default />
        <Route path="/t/monochromatic" element={<Monochromatic />} />
        <Route path="/t/wallpapers" element={<Wall />} />
        <Route path="/t/3d-renders" element={<Renders/>} />
        <Route path="/t/nature" element={<Nature />} />
        <Route path="/t/textures-patterns" element={<TexturesPatterns />} />
        <Route path="/t/architecture-interior" element={<ArchitectureInterior />} />
        <Route path="/t/film" element={<Film />} />
        <Route path="/t/street-photography" element={<StreetPhotography />} />
        <Route path="/t/experimental" element={<Experimental />} />
        <Route path="/t/animals" element={<Animals />} />

        <Route path="/s/:name" element={<Search />} />
        <Route path="/s/" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
