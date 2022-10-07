import React from 'react'
import "./Content.css"
import IMG1 from "../../assets/img/af6932e0d359fce7f35402c40d54bc99.png"
import IMG2 from "../../assets/img/66ceb1e8d5d276758ee00c3663bae8e9.png"
import IMG3 from "../../assets/img/112f1704f67d2cb7c852b396cde6858e.png"
export default function Content() {
  return (
  <div className="container">
    <div className="content">
      <div className="logo"></div>
      <div className="group-text-1">
        <div className="group-text-content">
          <span className="title">Lorem ipsum dolor sit asmet?</span>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
          </p>
        </div>

      </div>
      <div className="group-text-2">
        <div className="group-text-content">
          <div className="item">
            <span className="title">Lorem ipsum dolor sit asmet</span>
            <div className="img-text">
              <div className="img" style={{ backgroundImage: `url(${IMG1})` }}></div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
              </div>
            </div>
            <div className="text">
              ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
            </div>
          </div>
          <div className="item">
            <span className="title">Lorem ipsum dolor sit asmet</span>
            <div className="img-text">
              <div className="img" style={{ backgroundImage: `url(${IMG2})` }}></div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
              </div>
            </div>
            <div className="text">
              ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
            </div>
          </div>
          <div className="item">
            <span className="title">Lorem ipsum dolor sit asmet</span>
            <div className="img-text">
              <div className="img" style={{ backgroundImage: `url(${IMG3})` }}></div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
              </div>
            </div>
            <div className="text">
              ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  )
}
