"use client";
import { useState} from 'react'
import {SearchManufacture} from './';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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

const SearchBar = () => {
    const [manufacture,setManufacture] = useState('');
    const [model,setModel] = useState('');
    const router = useRouter();

    const handleSearch = (e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();

      if(manufacture==='' || model===''){
        return alert('Please fill all fields')
      }
      updateSearchParmas(
        model.toLowerCase(),
      manufacture.toLowerCase()
      );
    };

    const updateSearchParmas= (model:string,manufacture:string)=>{
      const searchParmas = new URLSearchParams(window.location.search);

      if(model){
        searchParmas.set('model',model)
      }else{
        searchParmas.delete('model')
      };

      if(manufacture){
            searchParmas.set('manufacture',manufacture)
      }else{
        searchParmas.delete('manufacture')
      };

      const newPathname = `${window.location.pathname}?${searchParmas.toString()}`

      router.push(newPathname);
    }

  return (
   <form onSubmit={handleSearch} className="searchbar">
    <div className="searchbar__item">
         <SearchManufacture
         manufacture={manufacture}
         setManufacture={setManufacture}
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

      <input type="text" name='model' value={model}
        onChange={e => setModel(e.target.value)}
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