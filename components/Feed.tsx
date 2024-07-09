// components/Layout.tsx
import * as React from "react"
import Sidebar from "./Sidebar"
import FollowBar from "./FollowBar"
import BackHeader from "./BackHeader"
const Feed : React.FC = ( ) => {
    return (
        <div className=" h-screen bg-black">
            <div className="container h-full mx-auto xl:px-32 max-w-6xl">
                <div className="grid grid-cols-4 h-full">
                    <Sidebar />
                    <div className="
                    col-span-3
                    lg:col-span-2
                    border-x-[1px]
                    border-neutral-800
                    ">
                        
                    {/* middle part */}
                    <BackHeader/>

                    </div>
                    <FollowBar/>
                </div>
            </div>
           
        </div>
    )
}

export default Feed