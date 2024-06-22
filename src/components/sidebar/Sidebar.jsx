"use client"
import React, {useState, useEffect} from 'react'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { IoPeople } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { usePathname, } from 'next/navigation'
import { RiSettings5Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import {  HiStatusOnline } from "react-icons/hi";
import { GiPowerButton } from "react-icons/gi"
import { LiaChairSolid } from "react-icons/lia";
import { TbPaperBag } from "react-icons/tb";
import { FaPizzaSlice } from "react-icons/fa";
import { GiCakeSlice } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";
import { FaBowlFood } from "react-icons/fa6";
import Loader from '../Loading'



const menu =[
  {
    name: "Tableau de bord",
    icon: <MdDashboard />,
    path: "/dashboard",
  },
  {
    name: "Commandes",
    icon: <IoFastFood />,
    path: "#",
    submenu: [
      {
        name: "En ligne",
        icon: <HiStatusOnline />,
        path: "/dashboard/menu/online",
      },
      {
        name: "Sur Place",
        icon:<LiaChairSolid />,
        path: "/dashboard/menu/place",
      },
      {
        name: "Emporté",
        icon:<TbPaperBag /> ,
        path: "/dashboard/menu/emporté",
      },
    ],
  },
  {
    name: "Menu",
    icon: <BiSolidFoodMenu />,
    path: "#",
    submenu: [
      {
        name: "Nourritures",
        icon: <FaBowlFood /> ,
        path: "/dashboard/menu/food",
      },
      {
        name: "Boissons",
        icon:<RiDrinks2Fill />,
        path: "/dashboard/menu/drink",
      },
      {
        name: "Gateaux",
        icon:<GiCakeSlice /> ,
        path: "/dashboard/menu/cake",
      },
      {
        name: "Pizza",
        icon:<FaPizzaSlice />,
        path: "/dashbord/menu/pizza",
      },
    ],
  },
  {
    name: "Staff",
    icon: <IoPeople />,
    path: "/dashboard/staff",
  },
  {
    name: "Paramètre",
    icon: <RiSettings5Fill />,
    path: "/dashboard/settings",
  },
  {
    name: "Deconnexion",
    icon: <GiPowerButton />,
    path: "/",
  },
]


const Sidebar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const pathname = usePathname()
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openSubmenuMobile, setOpenSubmenuMobile] = useState(null);

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };
  const handleSubmenuToggleMobile = (index) => {
    setOpenSubmenuMobile(openSubmenuMobile === index ? null : index);
  };


  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    if (router.events) {
      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);

      return () => {
        router.events.off('routeChangeStart', handleStart);
        router.events.off('routeChangeComplete', handleComplete);
        router.events.off('routeChangeError', handleComplete);
      };
    }
  }, [router]);

  if (loading) {
    return <Loader />;
  }
 
  return (
    <div className='h-full w-full'>
      <div className="shadow-lg h-full">
        {/* logo */}
        <div className="bg-white flex justify-center items-center  py-2">
            <Link href="/dashborad">
                <Image alt='logo' src="/images/black.png" width={200} height={200} className=' w-auto h-[100px]'/>
            </Link>
        </div>
        {/* menu */}
        <div className=" py-[15px] xl:py-[23px] w-full flex h-[86vh]">
          <div className="flex">
            <div className="flex flex-col justify-between items-center bg-first rounded-e-[30px] pr-3 py-3">
              {menu.map((item, id) => (
                <div key={id} className="w-full">
                  <div 
                    className={`${item.path === pathname && 'bg-second'} relative flex justify-center flex-col xl:justify-start items-center group cursor-pointer transition-all duration-300`} 
                    onClick={() => item.submenu ? handleSubmenuToggleMobile(id) : null}
                  >
                    <div className="flex flex-col justify-between items-center">
                      <Link href={item.path} className="p-2 w-[40px] h-[40px] flex justify-center items-center rounded-full text-[24px] xl:bg-transparent">
                        <span className='pl-[15px]'>
                          {item.icon}
                        </span>
                        
                        {item.submenu && (
                          <span className="">
                            <IoIosArrowDown
                              className={` transition-transform duration-300 ${openSubmenu === id ? 'rotate-180' : ''}`}
                            />
                          </span>
                        )}
                      </Link>
                      <span className="mt-2 md:hidden">{item.name}</span>
                    </div>
                  </div>
                  {item.submenu && openSubmenuMobile === id && (
                    <div className="flex flex-col items-start px-4 text-center md:hidden bg-slate-500">
                      {item.submenu.map((subItem, subId) => (
                        <Link href={subItem.path} key={subId} className="flex items-center m-2 hover:bg-white">
                          <div className="flex items-center px-2">
                            <div className="p-2">{subItem.icon}</div>
                            <span className="ml-2">{subItem.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-between py-4 ">
              {menu.map((item, id) => (
                <div key={id} className="w-full">
                  <Link href={item.path}  
                    className={`${item.path === pathname && 'bg-second'} flex justify-between items-center group cursor-pointer transition-all duration-300`} 
                    onClick={() => item.submenu ? handleSubmenuToggle(id) : null}
                  >
                    <div className=" lg:pl-5 md:pl-5 hidden md:flex">
                      <div className=" flex md:bg-transparent p-[6px] items-center rounded-sm">
                        {/* triangle */}
                        {/* <div className="md:hidden border-solid border-r-slate-400 font-semibold border-r-8 border-y-transparent border-y-[6px] border-l-0 absolute -left-2"></div> */}
                        {/* text */}
                        <div className="md:flex text-[18px] lg:text-[22px] leading-[21.94px] font-bold">{item.name}</div>
                        {item.submenu && (
                            <IoIosArrowDown
                              className={`ml-2 transition-transform duration-300 text-[25px] ${openSubmenu === id ? 'rotate-180' : ''}`}
                            />
                        )}
                      </div>
                    </div>
                  </Link>
                  {item.submenu && openSubmenu === id && (
                    <div className="md:flex flex-col items-start pl-8 hidden bg-slate-300">
                      {item.submenu.map((subItem, subId) => (
                        <Link href={subItem.path} key={subId} className="flex items-center my-2">
                          <div className="flex items-center">
                            <div className="p-2">{subItem.icon}</div>
                            <span className="ml-2">{subItem.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Sidebar
