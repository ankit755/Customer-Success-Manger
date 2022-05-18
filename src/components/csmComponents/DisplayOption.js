import React from 'react'

import '../CSS/DisplayOption.css'

// Template to display data in Label Field of Options Attribute
const displayCards = (prop) => {

  const { firstName, lastName, position, email } = prop

  return (
    <>
      <div className='card'>
        <div className='nameLogo' >
          <h5>{firstName[0]} {lastName[0]}</h5>
        </div>

        <div className='Name' >
          <h4>{firstName} {lastName}</h4>
          <p><i className="fa-solid fa-user"></i>{position}
            <span>  <i className="fa-solid fa-circle"></i> </span>
            {email}</p>
        </div>

      </div>

    </>
  )
}

export default displayCards