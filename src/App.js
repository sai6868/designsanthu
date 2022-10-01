import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Designs from './components/Designs'
import Weddings from './components/Weddings'
import Photography from './components/Photography'
import About from './components/About'

import logo from './images/logo.png'
function App() {
  return (
    <div className="">
      <div className='color-ribbon'></div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-0">
        <div className='container'>
          <img className='navbar-brand nav-logo m-auto d-sm-inline d-md-inline d-lg-none' src={logo} alt='LOGO' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/designs'>Designs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/weddings'>Weddings</NavLink>
              </li>
            </ul>
          </div>
          <img className='navbar-brand nav-logo m-auto d-none d-sm-none d-md-none d-lg-inline' src={logo} alt='LOGO' />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to='/weddings'>Weddings</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/photography'>Photography</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about'>About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='container routes'>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
