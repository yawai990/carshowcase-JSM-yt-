import { DetailedHTMLProps, MouseEventHandler } from "react"

export interface CustomButtonProps {
    title :string,
    btnType:"button" | "submit",
    containerStyle?:string,
    handleClick?:MouseEventHandler<HTMLButtonElement>
}