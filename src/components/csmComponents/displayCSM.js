import React from 'react'
import './DisplayCSM.css'
const displayCSM = (prop) => {
  let list = [];
  if (prop.displayArr)
    // empty array here to prevent from duplicates
    // list = []
    prop.displayArr.map((ele) => {
      list.push(ele.value)
    })

  return (

    <div>
      <p>For test</p>
      {
        list.map((e, i) => {
          const [firstName,lastName, email, position] = e.split(',');
          return (<div key={i}>
             
        <div className = 'Name' >
            <h4>{firstName} { lastName}</h4>
            <p> {position} <i class="fa-solid fa-trash"></i></p>
        </div>
          </div>)

        })
      }
    </div>


  )
}


// CHILD COMPONENT




export default displayCSM