"use client"
import React, {useState} from 'react'
import DetailsInformation from './DetailsInformation';
// import DetailsCommande from './DetailsCommande';
import DetailsMenu from './DetailsMenu';
import DetailsPersonnel from './DetailsPersonnel';
import Link from 'next/link';


const Settings = () => {

  const [isDetailsPersonnel, setDetailsPersonnel] = useState(false);
  const [isDetailsInformations, setIsDetailsInformations] = useState(false);
  // const [isDetailsCommande, setIsDetailsCommande] = useState(false);
  const [isDetailsMenu, setIsDetailsMenu] = useState(false);

  const handlePersonnelClick= () => {
    setDetailsPersonnel(!isDetailsPersonnel);
  };

  const handleMenuClick = () => {
    setIsDetailsMenu(!isDetailsMenu);
  };

  const handleInformationClick = () => {
    setIsDetailsInformations(!isDetailsInformations);
  };

  return (
    <div>
      <div className="">
        {/* title */}
        <div className="flex flex-col">
          <p className="titre">Paramètres</p>
          <span className="bg-third w-[128px] h-1 rounded-[20px]"></span>
        </div>
        <div className="flex flex-col gap-y-5 py-[70px]">
          {/* information personnelles */}
          <div className="py-3 border-slate-300 border-b px-3 cursor-pointer" onClick={handleInformationClick}>
            <button type="button" className='setting'>Informations personnelles</button>
          </div>
          {isDetailsInformations && (
            <div className="w-full h-full transition-all ease-in-out duration-500">

              <DetailsInformation onClose={setIsDetailsInformations} className="transition-all ease-in-out duration-800" />
              
            </div>
          )}
          {/* liste des commandes */}
          <Link href="/dashboard/commande">     
            <div className="py-3 border-slate-300 border-b px-3 cursor-pointer">
              <button type="button" className='setting'>Listes des commandes</button>
            </div>
          </Link>
          {/* {isDetailsCommande && (
            <div className="w-full h-full ">

              <DetailsCommande onClose={setIsDetailsCommande} />
              
            </div>
          )} */}
          {/* Ajouter un nouveau menu*/}
          <div className="py-3 border-slate-300 border-b px-3 cursor-pointer" onClick={handleMenuClick}>
            <button type="button" className='setting'>Ajouter un nouveau menu</button>
          </div>
          {isDetailsMenu && (
            <div className="w-full h-full ">

              <DetailsMenu onClose={setIsDetailsMenu} />
              
            </div>
          )}
          {/* Ajouter un nouveau personnel */}
          <div className="py-3 border-slate-300 border-b px-3" onClick={handlePersonnelClick}>
            <button type="button" className='setting'>Ajouer un nouveau personnel</button>
          </div>
          {isDetailsPersonnel && (
            <div className="w-full h-full ">

              <DetailsPersonnel onClose={setDetailsPersonnel} />
              
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings
