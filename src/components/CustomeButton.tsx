"use client";
import React from 'react'
import { CustomButtonProps } from '@/types';

const CustomeButton = ({ title,btnType,containerStyle, handleClick } : CustomButtonProps ) => {
  return (
    <button 
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyle}`}
    onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomeButton