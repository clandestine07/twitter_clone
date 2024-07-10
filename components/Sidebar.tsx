import { BsHouse, BsBellFill } from "react-icons/bs"
import { CiLogout } from "react-icons/ci"
import { FaUser } from "react-icons/fa6"
import SidebarLogo from "./SidebarLogo"
import SidebarItem from "./SidebarItem"
import SidebarTweetBtn from './SidebarTweetBtn'
import useCurrentUser from "@/hooks/useCurrentUser"
import { signOut } from "next-auth/react"
const Sidebar = () => {
    const {data: currentUser} = useCurrentUser()
    const icons = [
        {
            label:'Home',
            href: '/',
            icon: BsHouse
        },
        {
            label:'Notification',
            href: '/notification',
            icon: BsBellFill
        },
        {
            label:'Profile',
            href: '/profile',
            icon: FaUser
        }
    ]

    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col  items-start">
                <div className="space-y-2 lg:w-[230px]"></div>
                    <SidebarLogo/>
                    {icons.map((item) => (
                        <SidebarItem
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        icon={item.icon}
                        />
                    ))}
                    {currentUser && (
                        <SidebarItem onclick={() => signOut()} icon={CiLogout} label='Logout' />
                    )}
                    
                    <SidebarTweetBtn />
            </div>
        </div>
    )
}
export default Sidebar