import React, { useState } from 'react'
import Select from 'react-select'

import Card from './displayCards'
import Show from './DisplayCSM'

import './search.css'

const temp = [
  { firstName: 'Jeffry', lastName: 'Osmund', position: "client manager", email: 'josmund0@ask.com' },
  { firstName: 'Julian', lastName: 'Conkey', position: "assistent recruiter", email: 'jconkey1@mayoclinic.com' },
  { firstName: 'Goldi', lastName: 'Hayers', position: "talent aquisition", email: 'ghayers2@elegantthemes.com' },
  { firstName: 'Lurline', lastName: 'Petraitis', position: "senior manager", email: 'lpetraitis3@last.fm' },
  { firstName: 'Daisy', lastName: 'Ruddock', position: "Associate principal leadership", email: 'druddock4@sina.com.cn' },
  { firstName: 'Corinna', lastName: 'Cumbers', position: "senior recuiter", email: 'ccumbers5@nymag.com' },

]

var Array = [];

const Search = () => {


  const [pass, setPass] = useState(false)
  const [displayArr, setDisplayArray] = useState([]);
  const [newArray, setNewArray] = useState([]);

  const PassValue = () => {
    setPass(true)
    Array = displayArr.slice()
    setNewArray(Array)
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
    setPass(false)
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