import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collab from './pages/Collab';
import AllProjects from './pages/AllProjects';
import Background3D from './components/Background3D';
import ChatbotWidget from './components/ChatbotWidget';
import './App.css';

function App() {
  return (
    <Router>
      <Background3D />
      <div className="app">
        <Navbar />
        <main>
          <h1 className="visually-hidden">Shaswat Kureel - Freelance Software Engineer Portfolio</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collab" element={<Collab />} />
            <Route path="/all-projects" element={<AllProjects />} />
          </Routes>
        </main>
        <Footer />
        <ChatbotWidget />
      </div>
    </Router>
  );
}

export default App;
