import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/pageNotFound';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/contact';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
