import { useCallback } from "react"
import { AiOutlineClose } from "react-icons/ai"
import Button from "./button"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: () => void
    title?: string
    body?: React.ReactElement
    footer?: React.ReactElement
    action: string
    disabled?: boolean
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    action,
    disabled
}) => {
    const handleClose = useCallback(() => {
        if (disabled) return;
        onClose();
    }, [disabled, onClose])

    const handleSubmit = useCallback(() => {
        if (disabled) return;
        onSubmit();
    }, [disabled, onSubmit])

    if (!isOpen) return null;

    return (
        <>
            <div className="
                fixed
                inset-0
                flex
                justify-center
                items-center
                overflow-x-hidden
                overflow-y-auto
                z-50
                outline-none
                focus:outline-none
                bg-neutral-800
                bg-opacity-70
            ">
                <div className="
                    relative
                    w-full
                    lg:w-3/6
                    lg:max-w-3xl
                    mx-auto
                    my-6
                    h-auto
                ">
                    {/* Content */}
                    <div className="
                        border-0
                        rounded-lg
                        shadow-lg
                        relative
                        flex
                        flex-col
                        w-full
                        bg-black
                        outline-none
                        focus:outline-none
                    ">
                        {/* Header */}
                        <div className="
                            flex
                            items-center
                            justify-between
                            p-10
                            rounded-t
                        ">
                            <h3 className="text-3xl font-semibold text-white">{title}</h3>
                            <button 
                                onClick={handleClose}
                                className="
                                p-1
                                ml-auto
                                border-2
                                text-white
                                hover:opacity-75
                                transition
                            ">
                                <AiOutlineClose size={20}/>
                            </button>
                        </div>
                        {/* body */}
                        <div className="
                                relative
                                p-10
                                flex-auto
                        ">
                            {body}
                        </div>
                        {/* footer */}
                        <div className="
                                flex
                                flex-col
                                gap-2
                                p-10
                        ">
                            <Button disabled={disabled}
                                    label={action} 
                                    secondary 
                                    fullWidth 
                                    large 
                                    onClick={handleSubmit}
                            />
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;