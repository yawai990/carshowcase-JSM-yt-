"use client";

import CustomeButton from './CustomeButton';
import { useRouter } from 'next/navigation';
import { ShoreMoreProps } from '@/types';
import { UpdateSearchParmas } from '@/utils';

const ShowMore = ({ pageNumber, isNext, setLimit }:ShoreMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newlimit = (pageNumber + 1 ) * 10;
    setLimit(newlimit);
  };

  return (
    <div className='w-full flex-center gap-5 mt-10'>

      {
        !isNext &&
      <CustomeButton
      title='Show More'
      btnType='button'
      containerStyle='bg-primary-blue text-white rounded-full'
      handleClick={handleNavigation}
      />
    }
    </div>
  )
}

export default ShowMore