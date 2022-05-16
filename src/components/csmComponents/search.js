import React, { useState } from 'react'
import Select from 'react-select'

import Card from './displayCards'
import Show from './DisplayCSM'

const temp = [
  { firstName: 'Jeffry', lastName: 'Osmund', email: 'josmund0@ask.com', position: 'manager' },
  { firstName: 'Julian', lastName: 'Conkey', email: 'jconkey1@mayoclinic.com', position: 'manager' },
  { firstName: 'Goldi', lastName: 'Hayers', email: 'ghayers2@elegantthemes.com', position: 'manager' },
  { firstName: 'Lurline', lastName: 'Petraitis', email: 'lpetraitis3@last.fm', position: 'manager' },
  { firstName: 'Daisy', lastName: 'Ruddock', email: 'druddock4@sina.com.cn', position: 'manager' },
  { firstName: 'Corinna', lastName: 'Cumbers', email: 'ccumbers5@nymag.com', position: 'manager' },
  { firstName: 'Tallulah', lastName: 'Kuddyhy', email: 'tokuddyhy6@ehow.com', position: 'manager' },
  { firstName: 'Gui', lastName: 'Fardy', email: 'gfardy7@oracle.com', position: 'manager' },
  { firstName: 'Richard', lastName: 'Welton', email: 'rwelton8@wordpress.com', position: 'manager' },
  { firstName: 'Quintus', lastName: 'Swalough', email: 'qswalough9@csmonitor.com', position: 'manager' },
]



const Search = () => {


  const [pass, setPass] = useState(false)

  const clearValue = () => {
    setPass(true)


  };
  const options = temp.map((e) => {
    // console.log(e.firstName);
    return {
      value: Object.values(e).join(','), label: <Card firstName={e.firstName} lastName={e.lastName} email={e.email} />
    };
  })

  const [displayArr, setDisplayArray] = useState([]);

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

      <div>
        <Select


          options={options}
          isMulti
          placeholder={'Add by Name or email'}
          onChange={handler}
        />
        <button onClick={clearValue}>clear</button>
      </div>

      {pass === true && <Show displayArr={displayArr} />}

    </>
  )
}

export default Search