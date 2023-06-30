import { DetailedHTMLProps, MouseEventHandler } from "react"

export interface CustomButtonProps {
    title :string,
    btnType:"button" | "submit",
    containerStyle?:string,
    handleClick?:MouseEventHandler<HTMLButtonElement>
}

export interface SearchManufactureProps{
    manufacture:string,
    setManufacture:(manufacture:string) => void;
}