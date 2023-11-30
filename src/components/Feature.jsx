import React from 'react'
import '../styles/Feature.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Feature = () => {
  return (
      <div className='feature'>
      <div className="top">
        <div className="title">Total Revenue</div>
        <MoreVertIcon/>
      </div>
      
      <div className="bottom">
        <div className='featureCharts'>
            <CircularProgressbar value={70} text='70%' strokeWidth={4}/>
        </div>
        <p className='tit'>Total sales made today</p>
        <p className='amount'>$500</p>
        <p className='desc'>Pervious transaction processing</p>
        <div className="summary">
        <div className="ites">
            <div className="itemstitle">Target</div>
            <div className="itemsresult negative">
              <KeyboardArrowDownIcon/>
              <div className="resultamount">$12.5k</div>
            </div>
          </div>
          <div className="ites">
            <div className="itemstitle">Last Week</div>
            <div className="itemsresult positive">
              <KeyboardControlKeyIcon/>
              <div className="resultamount">$12.5k</div>
            </div>
          </div>
          <div className="ites">
            <div className="itemstitle">Last Month</div>
            <div className="itemsresult positive">
              <KeyboardControlKeyIcon/>
              <div className="resultamount">$12.5k</div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Feature
