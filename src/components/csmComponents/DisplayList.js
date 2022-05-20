import React, { useState, useEffect } from 'react'
import '../CSS/DisplayList.css'
const DisplayList = (prop) => {
  const [data, setData] = useState(new Set())

  useEffect(() => {
    if (prop.displayArr) {
      prop.displayArr.map((e) => setData((oldValue) => new Set([...oldValue, e.value])))
    }
  }, [prop])

  const deleteItem = (id) => setData(new Set(Array.from(data).filter((_, i) => i !== id)))

  return (

    <div>

      {
        data.size > 0 && Array.from(data).map((e, i) => {
          const [firstName, lastName, position] = e.split(',');
          return (<div key={i}>

            <div className='list' >
              <div className='list_logo'> <h5>{firstName[0]} {lastName[0]}</h5> </div>
              <div className='list_text'>
                <h4>{firstName} {lastName}</h4>
                <p> {position} </p>

              </div>
              <div className='trash'>
                <i className="fa-solid fa-trash fa-lg" onClick={() => deleteItem(i)} ></i>
              </div>
            </div>
          </div>)

        })
      }
    </div>


  )
}

export default DisplayList