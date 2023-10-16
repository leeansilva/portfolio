import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Container from './containers/Home/Container'
import MouseTrail from './components/MouseTrail/MouseTrail'
import '@fontsource-variable/quicksand';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MouseTrail/>
    <Container />
  </React.StrictMode>,
)
