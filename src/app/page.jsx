"use client"
import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

   const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };  


  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData); // Pass form data to parent component
  }

  return (
    <main className="">
      <div className="h-screen w-full flex justify-center items-center ">
        {/* image */}
        <div className=" relative connexion h-full w-full rounded-[2px] justify-end">
          <div className="h-full flex flex-col p-[38px] items-start gap-10  justify-center ">
            {/* logo */}
            <div className="">
              <Image alt="logo" src="/images/blanc.png" width={120} height={50} className="w-auto h-auto object-fill"/>
            </div>
            {/* text */}
            <div className="text-white">
              <p className="text-[26px] leading-[31.69px] font-light tracking-wider">Optimisez la gestion de vos ventes et de votre chiffre d&apos;affaires pour votre restaurant.</p>
            </div>
          </div>
        </div>
        {/* text */}
        <div className="w-full h-full">
          <div className="p-[56px] h-full ">
            {/* text connexion */}
            <div className="flex flex-col items-start">
              <p className="text-[50px] tracking-[0.5%] leading-[60.95px] text-[#5A5A5A]">Connexion</p>
              <div className='w-32 h-1 bg-third rounded-[5px]'></div>
            </div>
            {/* type connexion */}
            <div className="py-[35px] h-full">
              {/* connexion */}
              <div className="py-[15px] w-full h-full ">
                <form onSubmit={handleSubmit} className='flex flex-col gap-7 justify-between items-start form'>
                  <div className='flex flex-col gap-7 w-full'>
                    <div className="tel">
                      <label htmlFor="email" className='text-[25px] leading-[31.69px] font-medium'>Email :</label>
                    </div>
                    <div className="tel">
                      <input type="email" id="email" name="email" className='input' placeholder='Entez votre email' value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="tel">
                      <label htmlFor="password" className='text-[25px] leading-[31.69px] font-medium'>Password :</label>
                    </div>
                    <div className="tel">
                      <input type="password" id="password" className='input' placeholder='Votre mot de passe' name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                  </div>     
                  <Link href="/dashboard">
                    <div className="button">
                      <button type="submit" className='text-[26px] submit'>Suivant</button>
                    </div>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
