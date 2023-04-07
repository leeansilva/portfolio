import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Espher from './components/Espher/Espher';
import NavBar from './components/NavBar/NavBar';
import Burger from './components/Burger/Burger';
import MouseTrail from './components/MouseTrail/MouseTrail';

//npm run dev -- --host

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Espher/>
      <MouseTrail/>
    </div>
  )
}

export default App
