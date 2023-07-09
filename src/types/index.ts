import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title :string,
    btnType:"button" | "submit",
    containerStyle?:string,
    handleClick?:MouseEventHandler<HTMLButtonElement>,
    textStyle?:string,
    rightIcon?:string
}

export interface SearchManufactureProps{
    selected:string,
    setSelected:(manufacture:string) => void;
}

export interface CarProps{
    city_mpg:number,
    class:string,
    combination_mpg:number,
    cylinders:number,
    displacement:number,
    drive:string,
    fuel_type:string,
    highway_mpg:number,
    make:string,
    model:string,
    transmission:string,
    year:number
}

export interface FilterProps{
    manufacturer:string,
    year:number,
    fuel:string,
    limit:number,
    model:string,
}
export interface OptionProps{
    title :string,
    value:string
}
export interface CustomFilterProps{
    title :string,
    options : OptionProps[],
    setFilter:(filter:any)=>void;
}

export interface ShoreMoreProps{
    pageNumber:number,
    isNext:boolean,
    setLimit:(limit:number)=>void;
}

export interface SearchBarProps{
    setManufacturer:(manufacturer:string)=>void,
    setModel:(mode:string)=>void;
}