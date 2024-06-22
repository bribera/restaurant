import Image from 'next/image';
import React, {useState} from 'react'
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import DragAndDropFile from './DrapAndDropFile';


const DetailsInformation = ({onClose}) => {

    const [open, setOpen] = useState(false)
    

  return (
    <div className='w-full absolute  flex h-full bg-[#1a3621] bg-opacity-[12%] top-0 left-0  bottom-0 z-[999] transition-all ease-in-out duration-500'>
    <div className="basis-3/5 bg-transparent"></div>
    <div className=" basis-2/5 ">
      <div className="min-h-screen gap-5 flex-col p-[20px] bg-white">
          {/* image logo */}
          <div className="flex justify-between items-center">
              <div className="text-[22px] lg:text-[28px] transition ease-in-out duration-300 cursor-pointer" onClick={() => {onClose()}}>
                  <IoClose />
              </div>
              <Image alt='logo' src="/images/black.png" width={80} height={80} />
          </div>
          {/* information personnelles */}
          <div className="flex flex-col gap-[40px]">
              {/* title */}
              <div className="flex flex-col gap-2 ">
                  <p className="text-[#0fa921] text-[22px] lg:text-[42px] leading-[52.71px] tracking-[2%] font-bold">Info. Personnelles</p>
                  <div className="w-[159px] h-[10px] bg-four"></div>
              </div>
              <form className="flex justify-between flex-col gap-[10px] lg:gap-[18px]">
                  <div className="">
                      <div className="flex flex-col gap-[19px] justify-between">
                          {/* informations */}
                          <div className="flex flex-col justify-start gap-[9px] lg:gap-[19px]">
                              <div className="">
                                  <p className="lg:text-[20px] text-[16px] leading-[25.1px] font-bold">Informations Personnelles</p>
                              </div>
                              {/* photo image */}
                              <div className="flex flex-col gap-[16px]">
                                <div className="flex gap-2">
                                    <label htmlFor="photo" className='text-[#646464] lg:text-[20px] text-[16px] leading-[25.1px] font-semibold'>Photo</label>
                                </div>
                                
                                <DragAndDropFile />
                                {/* <div className="">
                                    <input type="fichier" name="" id="name" className='w-[80%] bg-[#F1F1F1] p-2 placeholder:px-4'/>
                                    <input type="file" name="" id="photo"  className='w-[30%] h-[50px]'/>                                
                                </div> */}
                              </div>
                              {/* nom */}
                              <div className="flex flex-col gap-[16px]">
                                  <div className="flex gap-2">
                                      <label htmlFor="name" className='text-[#646464] lg:text-[20px] text-[16px] leading-[25.1px] font-semibold'>Nom</label>
                                  </div>
                                  <div className="">
                                     <input type="text" name="" id="name" className='w-full bg-[#F1F1F1] p-2 placeholder:px-4'/>
                                  </div>
                              </div>
                              {/* prénom */}
                              <div className="flex flex-col gap-[16px]">
                                  <div className="flex gap-2">
                                      <label htmlFor="surname" className='text-[#646464] lg:text-[20px] text-[16px] leading-[25.1px] font-semibold'>Prénom</label>
                                  </div>
                                  <div className="">
                                     <input type="text" name="" id="surname" className='w-full bg-[#F1F1F1] p-2 placeholder:px-4'/>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="flex justify-end">
                      <button className='bg-four py-[8px] px-[29px] text-white lg:text-[20px] text-[16px] font-bold leading-[25.1px]'>Enregistrer</button>
                  </div>
              </form>
          </div>
      </div>
    </div>
    </div>
  )
}

export default DetailsInformation
