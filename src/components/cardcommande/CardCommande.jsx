import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const CardCommande = ({foodOrders, pizzaOrders,cakeOrders, drinkOrders, foodData, pizzaData, cakeData, drinkData}) => {
  return (
    <div className='h-full w-full'>
      <div className="shadow-lg h-full border-t-4 border-first border-spacing-y-7 border-s-8">
        {/* menu */}
        <div className=" p-[15px] xl:py-[23px] w-full flex h-[100%]">
          <div className="flex">
            <p className="font-semibold text-[24px] underline decoration-first">Liste des commandes choisis</p>
          </div>
          <div className="commande-list">
            {/* Afficher les commandes de nourriture */}
            {foodData.map((foodItem, index) => {
              if (foodOrders[index] > 0) {
                return (
                  <div key={index} className="commande-item">
                    <p>{foodItem.title}</p>
                    <p>Quantité : {foodOrders[index]}</p>
                  </div>
                );
              }
              return null;
            })}

            {/* Afficher les commandes de gateaux */}
            {cakeData.map((cakeItem, index) => {
              if (cakeOrders[index] > 0) {
                return (
                  <div key={index} className="commande-item">
                    <p>{cakeItem.title}</p>
                    <p>Quantité : {cakeOrders[index]}</p>
                  </div>
                );
              }
              return null;
            })}
            
            {/* Afficher les commandes de boissons*/}
            {drinkData.map((drinkItem, index) => {
              if (drinkOrders[index] > 0) {
                return (
                  <div key={index} className="commande-item">
                    <p>{drinkItem.title}</p>
                    <p>Quantité : {drinkOrders[index]}</p>
                  </div>
                );
              }
              return null;
            })}
            
            {/* Afficher les commandes de pizza */}
            {pizzaData.map((pizzaItem, index) => {
              if (pizzaOrders[index] > 0) {
                return (
                  <div key={index} className="commande-item">
                    <p>{pizzaItem.title}</p>
                    <p>Quantité : {pizzaOrders[index]}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCommande
