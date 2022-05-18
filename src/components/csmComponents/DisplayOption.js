import React from 'react'

import '../CSS/DisplayOption.css'

// Template to display data in Label Field of Options Attribute
const displayCards = (prop) => {
  const [firstName, lastName, position, email] = prop.value.split(',')

  return (
    <>
      {!prop.detailed && <div className='card'>
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
      }

      {/* Only return First name and last name here
      since user has selected the value
       */}
      {prop.detailed && <div className='card'>
        <h4 className='selected_option'>{firstName} {lastName}</h4>

      </div>
      }

    </>
  )
}

export default displayCards