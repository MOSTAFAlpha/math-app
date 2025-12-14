import React from 'react';
import 'katex/dist/katex.min.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Lessons from './pages/Lessons';
import Workflow from './pages/Workflow';
import Physics from './pages/Physics';
import Chemistry from './pages/Chemistry';
import English from './pages/English';
import French from './pages/French';
import SVT from './pages/SVT';

function App() {
  return (
    <Router basename="/math-app">
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Modules */}
        <Route path="/physics" element={<Physics />} />
        <Route path="/chemistry" element={<Chemistry />} />
        <Route path="/svt" element={<SVT />} />
        <Route path="/english" element={<English />} />
        <Route path="/french" element={<French />} />

        {/* Math Module */}
        <Route path="/math" element={<Layout><Outlet /></Layout>}>
          <Route index element={<Home />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="workflow" element={<Workflow />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
