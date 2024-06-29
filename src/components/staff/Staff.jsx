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
        <div className="py-[100px]">
          <div className="">
            <div className="flex items-center gap-6">
              {/* image  */}
              <div className="">
                <Image src="/images/breadchicken.jpg" width={200} height={500} alt='people' className='rounded-full' />
              </div>
              <div className="">
                <p className="">Jean DOSSOU</p>
                <p className="">Chef de employés</p>
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
