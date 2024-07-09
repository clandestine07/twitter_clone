import * as React from "react"

interface InputProps{
    placeholder?: string
    value?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
    disabled?: boolean
}
const Input: React.FC<InputProps> = ({
placeholder,
value,
onChange,
type,
disabled
})  => {
    return ( 
        <input
            disabled={disabled}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            type={type}
            className="
                w-full
                p-4
                text-lg
                bg-black
                border-neutral-500
                rounded-md
                outline-none
                text-white
                focus:border-2
                focus:border-sky-500
                transition
                disabled:opacity-75
                disabled:cursor-not-allowed
            "
        />
     );
}
 
export default Input;