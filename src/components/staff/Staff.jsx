"use client"
import React, {useState} from 'react'

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
        <div className="py-[50pxx]">

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
