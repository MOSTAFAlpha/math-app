import React from 'react';
import 'katex/dist/katex.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import DarkModeToggle from './components/DarkModeToggle';
import Landing from './pages/Landing';
import MathModule from './pages/MathModule';
import PhysiqueModule from './pages/PhysiqueModule';
import SVTModule from './pages/SVTModule';
import EnglishModule from './pages/EnglishModule';
import FrenchModule from './pages/FrenchModule';

function App() {
  return (
    <ThemeProvider>
      <Router basename="/math-app">
        {/* Global floating dark mode toggle - accessible on all pages */}
        <DarkModeToggle />
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Landing />} />

          {/* Subject Modules */}
          <Route path="/math/*" element={<MathModule />} />
          <Route path="/physique-chimie/*" element={<PhysiqueModule />} />
          <Route path="/svt/*" element={<SVTModule />} />
          <Route path="/english/*" element={<EnglishModule />} />
          <Route path="/francais/*" element={<FrenchModule />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

