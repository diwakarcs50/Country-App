import React, { useState } from 'react'

export default function Header(props) {

  const [isDark,setIsDark] = props.theme
  // const [isDark,setIsDark] = useState(JSON.parse(localStorage.getItem('mode')))


  return (

    <header className={`header-container ${isDark?'dark':'light'}`}>
      <div className="header-content">
        <h2 className="title"><a href="/">Where in the world?</a></h2>
        <p className="theme-changer" 
        onClick={() => {
          setIsDark(!isDark)
          localStorage.setItem('mode',!isDark)
        }
          }><i className={isDark?'fa-solid fa-moon':'fa-solid fa-sun'}></i>&nbsp;&nbsp;{isDark?'Dark':'light'} Mode</p>
      </div>
    </header>
  )
}
