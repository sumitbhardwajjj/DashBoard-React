import React from 'react'
import '../styles/Lists.css'
import SlideBar from './SlideBar'
import Navbar from './Navbar'
import DataBase from './Database'

const Lists = () => {
  return (
    <div className='list'>
      <SlideBar/>
      <div className='listcontainer'>
       <Navbar/> 
      <div className='datatable'>
      <DataBase/>
      </div>
      </div>
    </div>
  )
}

export default Lists
