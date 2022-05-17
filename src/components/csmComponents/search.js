import React, { useState } from 'react'
import Select from 'react-select'

import Card from './displayCards'
import Show from './DisplayCSM'

import './search.css'

const temp = [
  { firstName: 'Jeffry', lastName: 'Osmund', position: "Client Manager", email: 'josmund0@ask.com' },
  { firstName: 'Julian', lastName: 'Conkey', position: "Assistent Recruiter", email: 'jconkey1@mayoclinic.com' },
  { firstName: 'Goldi', lastName: 'Hayers', position: "Talent Aquisition", email: 'ghayers2@elegantthemes.com' },
  { firstName: 'Lurline', lastName: 'Petraitis', position: "Senior Manager", email: 'lpetraitis3@last.fm' },
  { firstName: 'Daisy', lastName: 'Ruddock', position: "Associate Principal leadership", email: 'druddock4@sina.com.cn' },
  { firstName: 'Corinna', lastName: 'Cumbers', position: "Senior Recuiter", email: 'ccumbers5@nymag.com' },

]



const Search = () => {


  const [pass, setPass] = useState(false)
  const [displayArr, setDisplayArray] = useState([]);
  const [newArray, setNewArray] = useState([]);

  const PassValue = () => {
    setPass(true)
    setNewArray((old)=>
      [...old,...displayArr.slice()]
    )
    setDisplayArray([])


  };
  const options = temp.map((e) => {
    // console.log(e.firstName);
    return {
      value: Object.values(e).join(','), label: <Card firstName={e.firstName} lastName={e.lastName} position={e.position} email={e.email} />
    };
  })

  const handler = e => {
    setDisplayArray([]) // to remove the previous values
    
    e.map((ele) => {
      setDisplayArray(prevarray => {
        return [...prevarray, ele]
      })
    })
  }

  return (
    <>

      <div className='parent'>
        <div className='search'>
          <Select options={options}
            value={displayArr}
            isMulti
            placeholder={'Add by Name or email'}
            onChange={handler}
            components={{ DropdownIndicator: () => null, ClearIndicator: () => null, IndicatorSeparator: () => null }}

          />
        </div>

        <div className="btn">
          <button onClick={PassValue}>ADD CSM</button>
        </div>
      </div>


      {pass === true && <Show displayArr={newArray} />}

    </>
  )
}

export default Search