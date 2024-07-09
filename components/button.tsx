import * as React from "react"

interface ButtonProps {
    label: string
    onClick: () => void
    secondary?: boolean
    disabled?: boolean
    fullWidth: boolean
    outline?: boolean
    large?: boolean
}
const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    secondary,
    disabled,
    fullWidth,
    outline,
    large
}) => {
    return ( 
       <button 
       disabled={disabled}
       onClick={onClick}
        className={`
            disabled: opacity-65
            rounded-full
            font-semibold
            disabled:cursor-not-allowed
            hover:opacity-85
            transition
            border-2
            ${fullWidth ? 'w-full' : 'w-fit'}
            ${large ? 'py-3 px-5 text-xl' : 'py-2 px-4 text-md'}
            ${secondary ? 'bg-white text-black border-black' : 'bg-sky-500 text-white border-sky-500'}
            ${outline ? 'bg-transparent border-white text-black' : ''}
       `}>
            {label}
       </button>
     );
}
 
export default Button;