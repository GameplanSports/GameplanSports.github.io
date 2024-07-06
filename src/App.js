import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Teams from './pages/Teams';

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Home />
      <Dashboard />
      <Teams />
    </div>
  );
}

export default App;
