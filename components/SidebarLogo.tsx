'use client'
import {useRouter} from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";
interface SidebarLogoProps {
    onClick?: () => void;
} 

const SidebarLogo: React.FC<SidebarLogoProps> = ({ onClick }) => {
    return (
      <div
        onClick={() => {} }
        className="
          rounded-full
          h-14 
          w-14
          flex
          items-center
          justify-center
          hover:bg-blue-300
          hover:bg-opacity-10
          cursor-pointer
          transition
        "
      >
        <FaXTwitter size={20} color="white" />
      </div>
    );
  }
  
  export default SidebarLogo;