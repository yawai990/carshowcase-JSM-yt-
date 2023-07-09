"use client";
import { useState} from 'react'
import {SearchManufacture} from './';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SearchBarProps } from '@/types';

const SearchButton = ({otherClass}:{otherClass:string}) =>(
  <button type='submit' className={`-ml-3 z-10 ${otherClass}`}>
    <Image
    src='/magnifying-glass.svg'
    alt='magnifying glass'
    width={20}
    height={20}
    className='object-contain'
     />
  </button>
)

const SearchBar = ({setManufacturer,setModel}:SearchBarProps) => {
    const [searchManufacture,setSearchManufacture] = useState('');
    const [searchModel,setSearchModel] = useState('');
    const router = useRouter();

    const handleSearch = (e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();

      if(searchManufacture==='' || searchModel===''){
        return alert('Please fill all fields')
      }
  
      setModel(searchModel.toLowerCase())
      setManufacturer(searchManufacture.toLowerCase())
    };

  return (
   <form onSubmit={handleSearch} className="searchbar">
    <div className="searchbar__item">
         <SearchManufacture
         selected={searchManufacture}
         setSelected={setSearchManufacture}
         />

         <SearchButton otherClass='sm:hidden' />
    </div>

    <div className="searchbar__item">
      <Image
      src='/model-icon.png'
      width={25}
      height={25}
      className='absolute w-[20px] h-[20px] ml-4'
      alt='car model'
      />

      <input type="text" name='model' value={searchModel}
        onChange={e => setSearchModel(e.target.value)}
        className='searchbar__input'
        placeholder='2023'
            />
             <SearchButton otherClass='sm:hidden' />
    </div>
    <SearchButton otherClass='max-sm:hidden' />
   </form>
  )
}

export default SearchBar 