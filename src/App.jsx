import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import Blog from './pages/Blog';
import DockerBlog from './pages/blog/Docker.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/Docker" element={<DockerBlog/>} />
      </Routes>
    </Router>
  );
}

export default App;
