import React, { FC } from "react";
import "./App.css";
import "./index.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Header from './components/Header';



const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
        {/* header is the only constant */}
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home/>} /> 
        </Routes>
      </Router>
      
    </div>
  );
};

export default App;
