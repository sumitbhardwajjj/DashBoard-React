import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Navbar.css'
import {useDispatch} from 'react-redux'
import {toggleDarkMode} from './Slice'


const Navbar = ({darkMode}) => {

  const dispatch = useDispatch();

  const toogle = ()=>{
    dispatch(toggleDarkMode())
  }


 

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder='search' />
          <SearchIcon/>
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageIcon className='icon'/> English
          </div>
          <div className='item'>
            <DarkModeIcon  className='icon' onClick={()=>{toogle(darkMode)}} />
          </div>
          <div className='item'>
            <FullscreenIcon className='icon'/>
          </div>
          <div className='item'>
            <NotificationsIcon className='icon'/>
          </div>
          <div className='item'>
            <ChatBubbleOutlineIcon className='icon'/>
          </div>
          <div className='item'>
            <ListIcon className='icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
