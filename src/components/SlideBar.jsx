import React from 'react'
import '../styles/SlideBar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Link} from 'react-router-dom'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';


const SlideBar = () => {
  return (
    <div className='slidebar'>
      <div className='top'>
        <Link to='/' style={{textDecoration:'none'}}>DashBoard</Link>
      </div>
      <hr />
      <div className='slide'>
        <ul>
            <p className='title'>MAIN</p>
           <Link to='/' style={{textDecoration:'none'}} ><li><DashboardIcon className='icon'/><span>Dashboard</span></li></Link>
        </ul>
        <ul>
            <p className='title'>LISTS</p>
            <Link to='/users' style={{textDecoration:'none'}}>
            <li><PersonOutlineIcon className='icon'/>
            <span>Users</span>
            </li>
            </Link>
        </ul>
        <ul>
            <Link to='/products' style={{textDecoration:'none'}}>
            <li><StoreIcon className='icon'/>
            <span>Products</span>
            </li>
            </Link>
        </ul>
        <ul>
            <Link style={{textDecoration:'none'}}>
            <li><CreditCardIcon className='icon'/>
            <span>Orders</span>
            </li>
            </Link>
        </ul>
        <ul>
            <Link style={{textDecoration:'none'}}>
            <li><LocalShippingIcon className='icon'/>
            <span>Delivery</span>
            </li>
            </Link>
        </ul> 
        <ul>
        <p className='title'>Usefull</p>
            <Link style={{textDecoration:'none'}}>
            <li><InsertChartIcon className='icon'/>
            <span>Stats</span>
            </li>
            </Link>
        </ul>
        <ul>
            <Link style={{textDecoration:'none'}}>
            <li><NotificationsIcon className='icon'/>
            <span>Notifications</span>
            </li>
            </Link>
        </ul>
        <ul>
        <p className='title'>Services</p>
            <Link style={{textDecoration:'none'}}>
            <li><SettingsSystemDaydreamIcon className='icon'/>
            <span>System Health</span>
            </li>
            </Link>
        </ul> 
        <ul>
            <Link style={{textDecoration:'none'}}>
            <li><PsychologyIcon className='icon'/>
            <span>Logs</span>
            </li>
            </Link>
        </ul>
        <ul>
            <Link style={{textDecoration:'none'}}>
            <li><SettingsIcon className='icon'/>
            <span>Setting</span>
            </li>
            </Link>
        </ul>
        <ul>
        <p className='title'>User</p>
            <Link style={{textDecoration:'none'}}>
            <li><AccountCircleIcon className='icon'/>
            <span>Profile</span>
            </li>
            </Link>
        </ul>
        <ul>
            <Link style={{textDecoration:'none'}}>
            <li><ExitToAppIcon className='icon'/>
            <span>Logout</span>
            </li>
            </Link>
        </ul>    
      </div>
    </div>
  )
}

export default SlideBar
