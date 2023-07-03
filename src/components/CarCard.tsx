"use client";

import { useState} from 'react'
import Image from 'next/image'
import { CarProps } from '@/types';
import CustomeButton from './CustomeButton';
import { calculateCarRent } from '@/utils';
interface CarCardProps{
    car:CarProps
};


const CarCard = ({car}:CarCardProps) => {
    const {city_mpg,combination_mpg, cylinders, displacement,drive,fuel_type,highway_mpg, make, model, transmission,year} =car;
    const [ isOpen, setIsOpen ] = useState(false);

    const carRent = calculateCarRent(city_mpg,year)
  return (
    <div className="car-card group">
            <div className="car-card-content">
                <h2 className='car-card__content-title'>{make} {model}</h2>
            </div>

            <p className="flex mt-6 font-extrabold text-[32px]">
            <span className="self-start font-medium text-[14px]">$</span>
            {carRent}
                <span className="self-start font-medium text-[14px]">/ day</span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                <Image src="/hero.png" alt='car model' fill priority className='object-contain' />
            </div>

            <div className="w-full relative mt-2 flex">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/steering-wheel.svg" alt='steering wheel' width={20} height={20} />

                        <p className='text-[14px]'>{transmission === 'a' ? 'Automatic':'Manual'}</p>
                    </div>
                </div>

                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/tire.svg" alt='steering wheel' width={20} height={20} />

                        <p className='text-[14px]'>{drive.toUpperCase()}</p>
                    </div>
                </div>

                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/gas.svg" alt='steering wheel' width={20} height={20} />

                        <p className='text-[14px]'>{city_mpg} MPG</p>
                    </div>
                </div>

                <div className="car-card__btn-container">
                    <CustomeButton title='View More' containerStyle='w-full py-[16px] rounded-full bg-primary-blue' btnType='button' 
                    textStyle='text-white text-[14px] leading-[17px] font-bold'
                    rightIcon='/right-arrow.svg'
                    handleClick={() => setIsOpen(true)} />
                </div>
            </div>
    </div>
  )
}

export default CarCard