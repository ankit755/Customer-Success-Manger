import React from 'react'

import'./CSM.css';

import Search from './csmComponents/search'
import Display from './csmComponents/DisplayCSM'
// import DC from './csmComponents/displayCards'



const CSM = () => {
  return (
    <>
      <div className = 'CSM_top'><div className="CSM_text"> <h3> Customer Success Managers </h3></div>
        <div className="CSM_CHILD"> <Search /> </div>
        <div className="CSM_CHILD, display" ><Display /></div>
        
        </div>
    </>
  )
}

export default CSM