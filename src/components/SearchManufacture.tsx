"use client";
import { useState,Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { SearchManufactureProps } from '@/types';
import Image from 'next/image';
import { carManufacturers } from '../constants';

const SearchManufacture = ({ manufacture, setManufacture }:SearchManufactureProps) => {
    const [ query, setQuery ] = useState("");

    const filterManufactures = query === "" ? carManufacturers:
    carManufacturers.filter(item => (
        item.toLowerCase()
        .replace(/\s+/g,"")
        .includes(query.toLowerCase().replace(/\s+/g,""))
        )
    )
  return (
    <div className='search-manufacturer'>
        <Combobox value={manufacture} onChange={setManufacture}>
            <div className="w-full relative">
                <Combobox.Button className='absolute top-[14px]'>
                        <Image 
                        src="/car-logo.svg"
                        width={20}
                        height={20}
                        className='ml-4'
                        alt='car-logo'
                        />
                </Combobox.Button>
                <Combobox.Input className="search-manufacturer__input"
                placeholder='Volkswagen'
                displayValue={(manufacture:string) =>manufacture}
                onChange={e => setQuery(e.target.value)}
                />

                <Transition as={Fragment}
                leave='transition ease-9in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={() => setQuery('')}
                > 
                <Combobox.Options>
                    
                    {
                        filterManufactures.length === 0 && query === "" ? (
                    <Combobox.Option value={query} className='search-manufacturer__ooption'>
                            create { query}
                    </Combobox.Option>
                        ):(
                            filterManufactures.map(item =>(
                                <Combobox.Option key={item} 
                                value={item}
                                className={({active}) => `relative search-manufacturer__option 
                                ${active ? 'bg-primary-blue text-white':'text-gray-900'}`}
                                >
                                 {({selected,active}) =>(
                                    <>
                                        <span 
                                        className={`block truncate ${selected ? 'font-medium':'font-normal'}`}
                                        >
                                            {item}
                                        </span>
                                        {
                                            selected ? (
                                                <span
                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 
                                                ${active ? 'text-white':'text-teal-600'}`}
                                                />
                                            ):(null)
                                        }
                                    </>
                                 )}
                                </Combobox.Option>
                            ))
                        )
                    }
                </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacture