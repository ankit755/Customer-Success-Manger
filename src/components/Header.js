import React from 'react'

import './CSS/Header.css'

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='header_logo'><img src='https://media-exp1.licdn.com/dms/image/C560BAQHKJ7bgUY5kjA/company-logo_200_200/0/1615143047817?e=2159024400&v=beta&t=2WetytS1tL0aPoeGxqMmp-wZqWKG3GkGrGhfGj3OQ7M' /></div>

        <div className='header_text'>
          <div><h4>YOUR SPOTTABL TEAM</h4></div>
          <div className='P'><p>Spottabl supports you all throughout</p></div>
        </div>
      </div>
    </>
  )
}

export default Header;//Header
