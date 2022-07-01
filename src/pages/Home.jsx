import React from 'react'
import Announcement from '../components/Annoucement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

function Home() {
  return (
    <div>       
        <Announcement/>
        <Navbar/>
        <Slider/>
    </div>
  )
}

export default Home