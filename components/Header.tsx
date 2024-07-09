'use client'
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface headerProps {
    label: string,
    showBackArrow?: boolean
}
const Header: React.FC<headerProps> =({label, showBackArrow}) => {
    const router = useRouter()
    const handleBackEvent = useCallback(() => {
        router.back()
    },[router])
    return ( 
        <div className="
            border-b-[1px]
            border-neutral-800
            p-5
        ">
            <div className="
                flex
                flex-row
                items-center
                gap-2
            ">
                {
                    showBackArrow && (
                        <BiArrowBack
                            onClick={handleBackEvent}
                            color="white"
                            size={20}
                            className="
                                cursor-pointer
                                hover:opacity-80
                                transition
                            "
                        />
                    )
                }
                <h1 className="text-white text-xl font-semibold">{label}</h1>
            </div>

        </div>
     );
}
 
export default Header;