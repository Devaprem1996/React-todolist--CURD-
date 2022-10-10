import React from 'react'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <h1> Todolist </h1>
        <div className="menuList">
          <ul>
            <li><a href='/work'>work</a></li>
            <li><a href='/home'>home</a></li>
            <li><a href='/learning'>learning</a></li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Header