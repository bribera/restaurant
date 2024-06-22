import Navbar from '@/components/navbar/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div className='flex h-screen relative overflow-x-auto'>
      <div className="basis-2/12 fixed h-full lg:w-[290px] z-30">
        <Sidebar />
      </div> 
      <div className="basis-12/12 w-full  relative pl-[220px] lg:pl-[290px] ">
        <Navbar className="" />
        <div className=" pt-[50px]  px-[50px]">

         {children}
        </div>
      </div> 
    </div>
  )
}

export default DashboardLayout