import React from 'react'

import Search from './csmComponents/search'
import Display from './csmComponents/DisplayList'


import './CSS/CSM.css' 

// component containg components od Search Bar & DisplayList
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