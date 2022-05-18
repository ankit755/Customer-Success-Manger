import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch } from "react-redux"  
import '../CSS/DisplayList.css'

// Template to display the data getting 
//from onchange & then with button click

const DisplayList = (prop) => {
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
        list.length > 0 && list.map((e, i) => {
          const [firstName, lastName, position] = e.split(',');
          return (<div key={i}>

            <div className='list' >
              <div className = 'list_logo'> <h5>{firstName[0]} {lastName[0]}</h5> </div>
              <div className='list_text'>
                <h4>{firstName} {lastName}</h4>
                <p> {position} </p>

              </div>
              <div className='trash'>
                <i className="fa-solid fa-trash fa-lg" onClick={() => dispatch(deleteTodo(elem.id))}></i>
              </div>
            </div>
          </div>)

        })
      }
    </div>


  )
}


// CHILD COMPONENT
export default DisplayList