import React from 'react'
import '../styles/Single.css'
import SlideBar from './SlideBar'
import Navbar from './Navbar'
import Charts from './Charts'
import Tab from './Table'

const Single = () => {
  return (
    <div className='single'>
      <SlideBar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className="too">
        <div className="lef">
            <div className="editButton">Edit</div>
            <h3 className='tile'>Information</h3>
            <div className="ite">
            <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="iteti"> Jane Doe</h1>
                <div className="detailitem">
                    <span className='itemkey'>Email:</span>
                    <span className='itemValue'>Janedoe@gmail.com</span>
                </div>
                <div className="detailitem">
                    <span className='itemkey'>Phone no:</span>
                    <span className='itemValue'>+12 234 4535 666</span>
                </div>
                <div className="detailitem">
                    <span className='itemkey'>Address:</span>
                    <span className='itemValue'>Elton St. 234 Garden New York</span>
                </div>
                <div className="detailitem">
                    <span className='itemkey'>Country:</span>
                    <span className='itemValue'>USA</span>
                </div>
              </div>
            </div>
        </div>
        <div className="rigt">
            <Charts aspect={3/1}/>
        </div>
        </div>
        <div className="bot">
        <h3 className='tile'>Last Transaction</h3>
            <Tab/>
        </div>
      </div>
    </div>
  )
}

export default Single
