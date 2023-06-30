"use client";
import { useState} from 'react'
import {SearchManufacture} from './';

const SearchBar = () => {
    const [manufacture,setManufacture] = useState('');
    const handleSearch = () =>{};
  return (
   <form onSubmit={handleSearch} className="searchbar">
    <div className="searchbar__item">
         <SearchManufacture
         manufacture={manufacture}
         setManufacture={setManufacture}
         />
    </div>
   </form>
  )
}

export default SearchBar