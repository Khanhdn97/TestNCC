import React from 'react'
import "./MainLayout.css"
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import SideBar from '../components/SideBar/SideBar'
export default function MainLayout() {
  return (
    <div className="container">
      <div className='main-layout'>
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
          <Content />
          <Footer />
        </div>
      </div>
    </div>

  )
}
