import React from 'react'
import './Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import logo from './assets/logo.png';
import IconButton from "@material-ui/core/IconButton";





function Header() {
  return (
    <div className='header'>
      
      <IconButton>
      <AccountCircleIcon className='header__icon' fontSize="large"/>
      </IconButton>

      <img className='header__logo' src={logo} alt="Lips Logo" /> 




      <IconButton>
      <ChatIcon className='header__icon' 
      fontSize="large"/>
      </IconButton>


    </div>
  )
}

export default Header