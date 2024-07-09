'use client'
import LoginModal from "@/hooks/LoginModal";
import { useCallback } from "react";
import { MdOutlineFileUpload } from "react-icons/md"

const SidebarTweetBtn = () => {
    const useLoginModal = LoginModal()
    const onClick = useCallback(() => {
        useLoginModal.onOpen()
    }, [useLoginModal])

    return ( 
        <div onClick={onClick}>
            <div className="
                mt-4
                lg:hidden
                h-14 
                w-14
                p-3
                flex
                items-center
                justify-center
                hover:bg-opacity-80
                cursor-pointer
                transition
            ">
                <MdOutlineFileUpload  size={24} color="white"/>
            </div>
            <div className="
                mt-6
                ml-2
                w-full
                hidden
                lg:flex
                items-start
                px-10
                py-2
                rounded-full
              bg-sky-500
                hover:bg-opacity-90
                cursor-pointer
            ">
                <p className="hidden lg:block font-semibold text-center text-white text-[20px]">
                    Tweet
                </p>
            </div>
            
        </div>
     );
}
 
export default SidebarTweetBtn;