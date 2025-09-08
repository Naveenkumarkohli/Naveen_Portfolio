import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Nav from './nav.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import SkillsProjects from './skills_projects.jsx';
import ErrorBoundary from './ErrorBoundary';
import Education from './education.jsx';
import Experience from './experience.jsx';
import Accounts from './Accounts.jsx';
import Contact from './contact.jsx';
import TestComponent from './TestComponent';
import './index.css';

function AppContent() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Nav />
      <div className='w-full mainBody overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar' id="scroll-element">
        <Home />
        <About />
        <ErrorBoundary>
          <SkillsProjects />
        </ErrorBoundary>
        <Experience />
        <Education />
        <Accounts />
        <Contact />
        <TestComponent />

        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
        
        <ToastContainer 
          position="bottom-right" 
          autoClose={3000} 
          hideProgressBar={false} 
          newestOnTop 
          closeOnClick 
          rtl={false} 
          pauseOnFocusLoss 
          draggable 
          pauseOnHover 
        />
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/*" element={<AppContent />} />
    </Routes>
  );
}

export default App
