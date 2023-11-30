import React from 'react'
import '../styles/Widgets.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Widgets = ({type}) => {

  let data = {};
  switch(type){
    case 'user':
      data = {
        title:'USERS',
        isMoney:false,
        link:'See all users',
        icon:<PersonIcon className='icon' style={{color:'red'}}/>
      };
      break;
      case 'order':
        data = {
          title:'ORDERS',
          isMoney:false,
          link:'See all orders',
          icon:<ShoppingCartIcon className='icon' style={{color:'yellow'}}/>
        };
        break;
      case 'earning':
        data = {
          title:'EARNINGS',
          isMoney:true,
          link:'view net earning',
          icon:<MonetizationOnIcon className='icon' style={{color:'green'}}/>
        };
        break;
        case 'balance':
          data = {
            title:'BALANCE',
            isMoney:true,
            link:'See details',
            icon:<AccountBalanceIcon className='icon' style={{color:'purple'}}/>
          };
          break;
      default:
      break;

  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && "$"}112</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon/>
          20%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widgets
