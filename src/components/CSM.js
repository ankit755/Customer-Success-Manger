import React from 'react'


import Search from './csmComponents/search'
import Display from './csmComponents/displayCSM'
import DC from './csmComponents/displayCards'



const CSM = () => {
  return (
   <>
    <div> <h3> Customer success Managers </h3></div>
    <div> <Search /></div>
    <div> <Display /></div>
    <div><DC /></div>
    
   </>
  )
}

export default CSM