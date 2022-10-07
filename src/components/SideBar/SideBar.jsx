import React from 'react'
import "./SideBar.css"
export default function SideBar() {
    return (
        <div className='menu-content'>
            <div className='menu-item'>
                <span className='item-text'>Home</span>
            </div>
            <div className='menu-item'>
                <span className='item-text'>Service</span>
            </div>
            <div className='menu-item active'>
                <span className='item-text'>News</span>
            </div>
            <div className='menu-item'>
                <span className='item-text'>Blog</span>
            </div>
            <div className='menu-item'>
                <span className='item-text'>Contact</span>
            </div>
        </div>
    )
}
