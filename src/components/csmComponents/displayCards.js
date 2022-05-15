import React from 'react'

import './cards.css'


const displayCards = (prop) => {
 // console.log(prop);
  const { firstName, lastName, email } = prop
  console.log(prop.firstName)
  return (
    <> 
      <div className='card'>
        <div className = 'nameLogo' >
            
        </div>

        <div className = 'Name' >
            <h4>{firstName}</h4>
            <p><i className="fa-solid fa-user"></i>{lastName} <i className="fas-duotone fas-period"></i>{email}</p>
        </div>

      </div>
    
    </>
  )
}

export default displayCards