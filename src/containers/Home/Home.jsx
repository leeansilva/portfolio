import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './style.css';
import Espher from '../../components/Espher/Espher';
import Name from '../../components/Name/Name';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MouseTrail from '../../components/MouseTrail/MouseTrail';

const Home = () => {

  return (
    <div className='home_container'>
        <MouseTrail/>
        <NavBar/>
        <div className='home_about_container'>
            <div className='home__Name_container'>
                <Name text="Leandro Silva"/>
                <h2 className='home_h2'>Web developer</h2>
            </div>

            <div className='home__redes_container'>
               <GitHubIcon  className='redes_icon' fontSize='medium'/>
               <InstagramIcon className='redes_icon' fontSize='medium'/>
               <LinkedInIcon className='redes_icon' fontSize='medium'/>
               <WhatsAppIcon className='redes_icon' fontSize='medium'/>
            </div>

            {/* <div>
                <img className='home_me' src="https://images4.imagebam.com/64/1e/41/MEK0M1K_o.png"></img>
            </div> */}
        </div>


    </div>
  )
}

export default Home