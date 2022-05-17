import React from 'react'
import './DisplayCSM.css'
const DisplayCSM = (prop) => {
  let list = [];
  if (prop.displayArr)
    // empty array here to prevent from duplicates
    // list = []
    prop.displayArr.map((ele) => {
      list.push(ele.value)
    })

  return (

    <div>

      {
        list.length > 0 && list.map((e,i) => {
          const [firstName, lastName, position] = e.split(',');
          return (<div key={i}>

            <div className='list' >
              <div className='list_text'>
                <h4>{firstName} {lastName}</h4>
                <p> {position} </p>

              </div>

              <div className='trash'>
                <i className="fa-solid fa-trash fa-lg" ></i>
              </div>
            </div>
          </div>)

        })
      }
    </div>


  )
}


// CHILD COMPONENT




export default DisplayCSM