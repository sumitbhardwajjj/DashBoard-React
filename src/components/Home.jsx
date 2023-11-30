import React from 'react'
import SlideBar from './SlideBar'
import '../styles/Home.css'
import Navbar from './Navbar'
import Widgets from './Widgets'
import Feature from './Feature'
import Charts from './Charts'
import Table from './Table'

const Home = () => {
  return (
    <div className='home'>
      <SlideBar/>
      <div className='container'>
        <Navbar/>
        <div className='widgets'>
          <Widgets type='user'/>
          <Widgets type='order'/>
          <Widgets type='earning'/>
          <Widgets type='balance'/>
        </div>
        <div className='charts'>
          <Feature/>
          <Charts aspect={2/1}/>
        </div>
        <div className='listscontainer'>
          <div className='liststitle'>Lastest Tansaction
          <Table/>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Home
