import React, {useState} from 'react'
import Select from 'react-select'

import Card from './displayCards'





const Search = () => {

  const options = [
    {value:"Jeffry,Osmund,josmund0@ask.com", label:<Card />},
    {value:"Julian,Conkey,jconkey1@mayoclinic.com", label:<Card />},
    {value:"Goldi,Hayers,ghayers2@elegantthemes.com", label:<Card />},
    {value:"Lurline,Petraitis,lpetraitis3@last.fm", label:<Card />},
    {value:"Daisy,Ruddock,druddock4@sina.com.cn", label:<Card />},
    {value:"Corinna,Cumbers,ccumbers5@nymag.com", label:<Card />},
    {value:"Tallulah,O'Kuddyhy,tokuddyhy6@ehow.com", label:<Card />},
    {value:"Gui,Fardy,gfardy7@oracle.com", label:<Card />},
    {value:"Richard,Welton,rwelton8@wordpress.com", label:<Card />},
    {value:"Quintus,Swalough,qswalough9@csmonitor.com", label:<Card />}
    ]

      const [disp, setDisp] = useState(options.value)

      const handler = e =>{
        setDisp(e.value);
        }

        
  return (
  <>
   <div>
       <Select 
            options={options}
            isMulti
            placeholder = {'Add by Name or email'}
            onChange = {handler}
        /> 
    </div>
    <h1> {disp} </h1>
  </>
  )
}

export default Search