import { useState } from 'react';
import { data } from './data';
import Buttons from './Buttons';
import React from 'react';
import Catalog from '../Catalog';



function YurtaHome(){ 

const [catalog, setCatalog] = useState (data);

  const chosenCatalog = (searchTerm)=>{
    const newCatalog = data.filter (element =>element.searchTerm === searchTerm);
    setCatalog( newCatalog);
  }


  return (
    <div className='container'>
    <div className='room'>
<h2 className='home-head'>Форум</h2>
    </div>
    <div className='razdel'> 
    <Buttons filteredCatalog={chosenCatalog}/>
    </div>
    <div className='razdel-two'> 
<Catalog elegante = {catalog}/>

    </div>
    </div>
  )

}




  export default YurtaHome;