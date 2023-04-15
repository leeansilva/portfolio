import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Container from './containers/Home/Container'
import MouseTrail from './components/MouseTrail/MouseTrail'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MouseTrail/>
    <Container />
  </React.StrictMode>,
)
