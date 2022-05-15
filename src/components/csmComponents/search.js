import React, {useState} from 'react'
import Select from 'react-select'

import Card from './displayCards'


const temp = [
  {firstName: 'Jeffry', lastName: 'Osmund', email: 'josmund0@ask.com', position:'manager'},
  {firstName: 'Julian', lastName: 'Conkey', email: 'jconkey1@mayoclinic.com'},
  {firstName: 'Goldi', lastName: 'Hayers', email: 'ghayers2@elegantthemes.com'},
  {firstName: 'Lurline', lastName: 'Petraitis', email: 'lpetraitis3@last.fm'},
  {firstName: 'Daisy', lastName: 'Ruddock', email: 'druddock4@sina.com.cn'},
  {firstName: 'Corinna', lastName: 'Cumbers', email: 'ccumbers5@nymag.com'},
  {firstName: 'Tallulah', lastName: 'Kuddyhy', email: 'tokuddyhy6@ehow.com'},
  {firstName: 'Gui', lastName: 'Fardy', email: 'gfardy7@oracle.com'},
  {firstName: 'Richard', lastName: 'Welton', email: 'rwelton8@wordpress.com'},
  {firstName: 'Quintus', lastName: 'Swalough', email: 'qswalough9@csmonitor.com'},
  ]

  var displayArr = [];


const Search = () => {
      
    //  temp.forEach((e) => console.log(e))
      
      const options = temp.map((e)=> {
       // console.log(e.firstName);
        return {
       
          value: Object.values(e).join(','), label: <Card firstName={e.firstName} lastName={e.lastName} email={e.email} />
        };
      })
      

     
      
      const handler = e =>{
         displayArr = [];
        //setDisp(e);
        console.log('e value')
        e.map((ele)=> {
          
          displayArr.push(ele.value)
          console.log(displayArr);
        })
       } 
      
       

        
  return (
  <>
   <div>
       <Select 
            options={options}
            isMulti
            placeholder = {'Add by Name or email'}
            onChange= {handler}
        /> 
    </div>
  </>
  )
}

export default Search