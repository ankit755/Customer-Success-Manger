import React, { useState } from 'react'

import './DisplayCSM.css'

const DisplayCSM = (prop) => {
  const [list, setList] = useState([])
  if (prop.displayArr)
    // empty array here to prevent from duplicates
    // list = []
    prop.displayArr.map((ele) => {
      list.push(ele.value)
    })

  if (prop.displayArr) {
    prop.diplayArr.map((e) => setList((oldValue) => [...oldValue, e.value]))
  }

  const deleteItem = (id) => {
    setList(list.splice(id, 1))
  }


  return (

    <div>

      {
        list.length > 0 && list.map((e, i) => {
          const [key, firstName, lastName, position] = e.split(',');
          return (<div key={i}>

            <div className='list' >
              <div className='list_text'>
                <h4>{firstName} {lastName}</h4>
                <p> {position} </p>

              </div>

              <div className='trash'>
                <i className="fa-solid fa-trash fa-lg" onClick={deleteItem(i)}></i>
              </div>
            </div>
          </div>)

        })
      }
    </div>


  )
}


export default DisplayCSM