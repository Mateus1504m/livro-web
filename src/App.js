import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './livrolista';
import LivroDados from './livrodados';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Catálogo</Link>
            <Link className="nav-link" to="/novo">Novo</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/novo" element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;