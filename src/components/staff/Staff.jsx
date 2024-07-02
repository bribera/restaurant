"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import { MdCall } from 'react-icons/md'


const online =[
  // first
  {
    nom:"Sandrine",
    prenom: "AKPO",
    role: "Serveuse",
    call: "+223 55457678",
    lieu: "Chef employés en ligne"
  },
  // second
  {
    nom:"Sabin",
    prenom: "CODJO",
    role: "Cuisiner",
    call: "+223 55457678",
    lieu: "En ligne"
  },
  // third
  {
    nom:"Esmé",
    prenom: "ZOGBO",
    role: "Réceptionneuse",
    call: "+223 55457678",
    lieu: "En ligne"
  },
  // four
  {
    nom:"Sky",
    prenom: "ASSOGBA",
    role: "Réceptionneur",
    call: "+223 55457678",
    lieu: "En ligne"
  },
  // five   
  {
    nom:"Sky",
    prenom: "ASSOGBA",
    role: "Delivreur",
    call: "+223 55457678",
    lieu: "En ligne"
  },
  // six  
  {
    nom:"Rain",
    prenom: "ASSOGBA",
    role: "Delivreur",
    call: "+223 55457678",
    lieu: "En ligne"
  },
]
const place =[
  // first
  {
    nom:"Sandrine",
    prenom: "AKPO",
    role: "Serveuse",
    call: "+223 55457678",
    lieu: "Chef employés en ligne"
  },
  // second
  {
    nom:"Sabin",
    prenom: "CODJO",
    role: "Cuisiner",
    call: "+223 55457678",
    lieu: "En ligne"
  },
  // third
  {
    nom:"Esmé",
    prenom: "ZOGBO",
    role: "Réceptionneuse",
    call: "+223 55457678",
    lieu: "En ligne"
  },
  // four
  {
    nom:"Sky",
    prenom: "ASSOGBA",
    role: "Réceptionneur",
    call: "+223 55457678",
    lieu: "En ligne"
  },
  // five   
  {
    nom:"Sky",
    prenom: "ASSOGBA",
    role: "Delivreur",
    call: "+223 55457678",
    lieu: "En ligne"
  },
  // six  
  {
    nom:"Rain",
    prenom: "ASSOGBA",
    role: "Delivreur",
    call: "+223 55457678",
    lieu: "En ligne"
  },
]

const Staff = () => {



  const [activeType, setActiveType] = useState('email'); // Initial active type

  const handleToggle = (type) => {
    setActiveType(type);
  };


  return (
    <div>
      <div className="">
        {/* title */}
        <div className="flex flex-col">
          <p className="titre">Listes des personnels</p>
          <span className="bg-third w-[230px] h-1 rounded-[20px]"></span>
        </div>

        {/* select button */}
        <div className="py-[100px] flex flex-col md:flex-row items-center gap-20">
          {/* first */}
          <div className="shadow-lg w-[350px] h-[150px] py-6 px-6 flex flex-col gap-y-6 border border-third rounded-[20px]">
            <div className="flex relative items-center gap-x-6">
              {/* image  */}
              <div className="absolute -top-[55px] -left-5 flex-1 ">
                <Image src="/images/managerChef.png" width={120} height={100} alt='people' className='rounded-[50%] object-fill shadow-md  border-third border' />
              </div>
              <div className="flex flex-1 flex-col items-end ">
                <p className="leading-wide text-[22px] font-semibold ">Jean DOSSOU</p>
                <p className="leading-wide text-[18px] font-medium text-first/80">Chef de employés</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              {/* lieu */}
              <div className="">
                <p className="text-[17px] font-medium  ">Tous</p>
              </div>
              {/* tel */}
              <div className="flex items-center gap-1">
                <span className="text-first text-[17px]"><MdCall /></span>
                <p className="text-[17px]">+224 555 774 888</p>
              </div>
            </div>
          </div>
          {/* second */}
          <div className="shadow-md w-fit h-fit">
            <div className="flex items-center gap-6">
              {/* image  */}
              <div className="">
                <Image src="/images/managerChef.png" width={200} height={500} alt='people' className='rounded-[50%]' />
              </div>
              <div className="">
                <p className="leading-wide text-[22px] font-semibold">Jean DOSSOU</p>
                <p className="leading-wide text-[18px] font-medium">Chef de employés</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              {/* lieu */}
              <div className="">
                <p className="">Tous</p>
              </div>
              {/* tel */}
              <div className="flex items-center">
                <span className=""><MdCall /></span>
                <p className="">+224 555 774 888</p>
              </div>
            </div>
          </div>
          {/* third */}
          <div className="shadow-md w-fit h-fit">
            <div className="flex items-center gap-6">
              {/* image  */}
              <div className="">
                <Image src="/images/managerChef.png" width={200} height={500} alt='people' className='rounded-[50%]' />
              </div>
              <div className="">
                <p className="leading-wide text-[22px] font-semibold">Jean DOSSOU</p>
                <p className="leading-wide text-[18px] font-medium">Chef de employés</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              {/* lieu */}
              <div className="">
                <p className="">Tous</p>
              </div>
              {/* tel */}
              <div className="flex items-center">
                <span className=""><MdCall /></span>
                <p className="">+224 555 774 888</p>
              </div>
            </div>
          </div>
        </div>
        {/* employés */}

        <div className="w-full">
          <div className="flex flex-wrap">
              {/* online */}
              <div className="">
                <button type="button">En ligne</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Staff
