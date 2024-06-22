"use client"
import Carousel from '@/components/Carousel'
import React, {useState} from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { FiPlus } from "react-icons/fi";
import { MdOutlineHorizontalRule } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';
import {fadeIn} from '../../variants'
import { motion } from 'framer-motion' 
import CardCommande from '@/components/cardcommande/CardCommande';



const foodData =[
  // first
  {
    image:"/images/chicken.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Spagetti",
    prix:"1 700 F CFA",
    // commande:"0",
    means:"Savourez l'authenticité de nos spaghettis al dente, nappés d'une sauce tomate maison riche et parfumée, parsemés de basilic frais et accompagnés de généreuses portions de parmesan râpé.",
    // title:"",
  },
  // second
  {
    image:"/images/burger.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Burger",
    prix:"1 500 F CFA",
    // commande:"0",
    means:"Savourez notre burger artisanal, préparé avec du bœuf de première qualité, des tranches de bacon croustillantes, du cheddar mature et une variété de garnitures fraîches, le tout rehaussé par une sauce secrète irrésistible.",
    // title:"",
  },
  // third
  {
    image:"/images/fish.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Spagetti avec poisson",
    prix:"1 200 F CFA",
    // commande:"0",
    means:"Découvrez l'explosion de saveurs de nos spaghettis, préparés avec des ingrédients de première qualité et servis avec une sauce bolognaise mijotée lentement pour une expérience culinaire inoubliable.",
    // title:"",
  },
  // four
  {
    image:"/images/chicken.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Viande braisée",
    prix:"2 000 F CFA",
    commande:"0",
    means:"Dégustez notre viande braisée tendre et juteuse, cuite lentement pendant des heures pour une saveur profonde et riche, servie avec une sauce maison irrésistible et des légumes fondants.",
    // title:"",
  },
  // five
  {
    image:"/images/pasta.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Spagetti Pasta",
    prix:"1 700 F CFA",
    commande:"0",
    means:"Savourez l'authenticité de nos spaghettis al dente, nappés d'une sauce tomate maison riche et parfumée, parsemés de basilic frais et accompagnés de généreuses portions de parmesan râpé.",
    // title:"",
  },
  // six
  {
    image:"/images/salad.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Riz avec de jus de viande",
    prix:"1 700 F CFA",
    // commande:"0",
    means:"Dégustez notre riz parfumé, nappé d'un jus de viande riche et savoureux, pour une harmonie parfaite de saveurs et de textures qui ravira vos papilles.",
    // title:"",
  },
  // seven
  {
    image:"/images/breadchicken.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Chawarma",
    prix:"1 700 F CFA",
    // commande:"0",
    means:"Savourez notre chawarma, un mélange exquis de viande épicée, de légumes croquants et de sauce tahini, le tout roulé dans un pain pita moelleux pour un délice oriental.",
    // title:"",
  },
  // eight
  {
    image:"/images/lemon.jpg",    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Spagetti",
    prix:"1 700 F CFA",
    // commande:"0",
    means:"Laissez-vous séduire par notre viande braisée à la perfection, infusée d'aromates et d'épices, accompagnée de purée de pommes de terre crémeuse et de légumes rôtis.",
    // title:"",
  },
  
]
const drinkData =[
  // first
  {
    image:"/images/coco.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Jus de Coco",
    prix:"1 300 F CFA",
    // commande:"0",
    means:"Plongez dans l'exotisme avec notre cocktail au coco, un mélange onctueux de lait de coco crémeux et de saveurs tropicales, idéal pour une évasion gustative.",
    // title:"",
  },
  // second
  {
    image:"/images/citron.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Jus de Citron",
    prix:"1 200 F CFA",
    // commande:"0",
    means:"Rafraîchissez-vous avec notre cocktail au citron, un mélange vivifiant de jus de citron frais et de notes sucrées, pour une explosion de saveurs acidulées.",
    // title:"",
  },
  // third
  {
    image:"/images/orange.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Jus d'orange",
    prix:"1 200 F CFA",
    // commande:"0",
    means:"Laissez-vous séduire par notre cocktail à l'orange, un mélange vibrant de jus d'orange pressé et de zestes d'agrumes, pour une boisson ensoleillée et rafraîchissante.",
    // title:"",
  },
  // four
  {
    image:"/images/pasteque.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Jus de pastèque",
    prix:"1 200 F CFA",
    commande:"0",
    means:"Dégustez notre viande braisée tendre et juteuse, cuite lentement pendant des heures pour une saveur profonde et riche, servie avec une sauce maison irrésistible et des légumes fondants.",
    // title:"",
  },
  // five
  {
    image:"/images/ananas (1).jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Jus d'ananas",
    prix:"1 300 F CFA",
    commande:"0",
    means:"Découvrez la fraîcheur unique de notre thé à l'ananas, un mélange raffiné de thé infusé et de saveurs fruitées, idéal pour une pause revigorante et parfumée.",
    // title:"",
  },
  // six
  {
    image:"/images/caffe.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Cappuccino",
    prix:"1 000 F CFA",
    // commande:"0",
    means:"Savourez l'élégance de notre cappuccino, un espresso corsé couronné d'une mousse de lait onctueuse et légère, pour une expérience caféinée raffinée.",
    // title:"",
  },
  // seven
  {
    image:"/images/latte.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Latte",
    prix:"1 300 F CFA",
    // commande:"0",
    means:"Détendez-vous avec notre thé latte, un mélange délicat de thé infusé et de lait crémeux, légèrement sucré pour une pause gourmande et apaisante.",
    // title:"",
  },
  // eight
  {
    image:"/images/mokachino.jpg",    
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:" Crème glacée au chocolat",
    prix:"1 500 F CFA",
    // commande:"0",
    means:"Régalez-vous avec notre crème glacée au chocolat, une délicieuse onctuosité chocolatée qui fond en bouche, parfaite pour satisfaire toutes vos envies sucrées.",
    // title:"",
  },
  
]
const cakeData =[
  // first
  {
    image:"/images/coco.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Jus de Coco",
    prix:"1 300 F CFA",
    // commande:"0",
    means:"Plongez dans l'exotisme avec notre cocktail au coco, un mélange onctueux de lait de coco crémeux et de saveurs tropicales, idéal pour une évasion gustative.",
    // title:"",
  },
  // second
  {
    image:"/images/citron.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Jus de Citron",
    prix:"1 200 F CFA",
    // commande:"0",
    means:"Rafraîchissez-vous avec notre cocktail au citron, un mélange vivifiant de jus de citron frais et de notes sucrées, pour une explosion de saveurs acidulées.",
    // title:"",
  },
  // third
  {
    image:"/images/orange.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Jus d'orange",
    prix:"1 200 F CFA",
    // commande:"0",
    means:"Laissez-vous séduire par notre cocktail à l'orange, un mélange vibrant de jus d'orange pressé et de zestes d'agrumes, pour une boisson ensoleillée et rafraîchissante.",
    // title:"",
  },
  // four
  {
    image:"/images/pasteque.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Jus de pastèque",
    prix:"1 200 F CFA",
    commande:"0",
    means:"Dégustez notre viande braisée tendre et juteuse, cuite lentement pendant des heures pour une saveur profonde et riche, servie avec une sauce maison irrésistible et des légumes fondants.",
    // title:"",
  },
  // five
  {
    image:"/images/ananas (1).jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Jus d'ananas",
    prix:"1 300 F CFA",
    commande:"0",
    means:"Découvrez la fraîcheur unique de notre thé à l'ananas, un mélange raffiné de thé infusé et de saveurs fruitées, idéal pour une pause revigorante et parfumée.",
    // title:"",
  },
  // six
  {
    image:"/images/caffe.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Cappuccino",
    prix:"1 000 F CFA",
    // commande:"0",
    means:"Savourez l'élégance de notre cappuccino, un espresso corsé couronné d'une mousse de lait onctueuse et légère, pour une expérience caféinée raffinée.",
    // title:"",
  },
  // seven
  {
    image:"/images/latte.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Latte",
    prix:"1 300 F CFA",
    // commande:"0",
    means:"Détendez-vous avec notre thé latte, un mélange délicat de thé infusé et de lait crémeux, légèrement sucré pour une pause gourmande et apaisante.",
    // title:"",
  },
  // eight
  {
    image:"/images/mokachino.jpg",    
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:" Crème glacée au chocolat",
    prix:"1 500 F CFA",
    // commande:"0",
    means:"Régalez-vous avec notre crème glacée au chocolat, une délicieuse onctuosité chocolatée qui fond en bouche, parfaite pour satisfaire toutes vos envies sucrées.",
    // title:"",
  },
  
]
const pizzaData =[
  // first
  {
    image:"/images/coco.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Jus de Coco",
    prix:"1 300 F CFA",
    // commande:"0",
    means:"Plongez dans l'exotisme avec notre cocktail au coco, un mélange onctueux de lait de coco crémeux et de saveurs tropicales, idéal pour une évasion gustative.",
    // title:"",
  },
  // second
  {
    image:"/images/citron.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Jus de Citron",
    prix:"1 200 F CFA",
    // commande:"0",
    means:"Rafraîchissez-vous avec notre cocktail au citron, un mélange vivifiant de jus de citron frais et de notes sucrées, pour une explosion de saveurs acidulées.",
    // title:"",
  },
  // third
  {
    image:"/images/orange.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Jus d'orange",
    prix:"1 200 F CFA",
    // commande:"0",
    means:"Laissez-vous séduire par notre cocktail à l'orange, un mélange vibrant de jus d'orange pressé et de zestes d'agrumes, pour une boisson ensoleillée et rafraîchissante.",
    // title:"",
  },
  // four
  {
    image:"/images/pasteque.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Jus de pastèque",
    prix:"1 200 F CFA",
    commande:"0",
    means:"Dégustez notre viande braisée tendre et juteuse, cuite lentement pendant des heures pour une saveur profonde et riche, servie avec une sauce maison irrésistible et des légumes fondants.",
    // title:"",
  },
  // five
  {
    image:"/images/ananas (1).jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Jus d'ananas",
    prix:"1 300 F CFA",
    commande:"0",
    means:"Découvrez la fraîcheur unique de notre thé à l'ananas, un mélange raffiné de thé infusé et de saveurs fruitées, idéal pour une pause revigorante et parfumée.",
    // title:"",
  },
  // six
  {
    image:"/images/caffe.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Cappuccino",
    prix:"1 000 F CFA",
    // commande:"0",
    means:"Savourez l'élégance de notre cappuccino, un espresso corsé couronné d'une mousse de lait onctueuse et légère, pour une expérience caféinée raffinée.",
    // title:"",
  },
  // seven
  {
    image:"/images/latte.jpg",
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:"Latte",
    prix:"1 300 F CFA",
    // commande:"0",
    means:"Détendez-vous avec notre thé latte, un mélange délicat de thé infusé et de lait crémeux, légèrement sucré pour une pause gourmande et apaisante.",
    // title:"",
  },
  // eight
  {
    image:"/images/mokachino.jpg",    
    panier:<SlBasket />,
    plus:<FiPlus />,
    moins:<MdOutlineHorizontalRule />,
    title:" Crème glacée au chocolat",
    prix:"1 500 F CFA",
    // commande:"0",
    means:"Régalez-vous avec notre crème glacée au chocolat, une délicieuse onctuosité chocolatée qui fond en bouche, parfaite pour satisfaire toutes vos envies sucrées.",
    // title:"",
  },
  
]


const Page = () => {

  const [foodOrders, setFoodOrders] = useState(foodData.map(() => 0));
  const [pizzaOrders, setPizzaOrders] = useState(pizzaData.map(() => 0));
  const [drinkOrders, setDrinkOrders] = useState(pizzaData.map(() => 0));
  const [cakeOrders, setCakeOrders] = useState(pizzaData.map(() => 0));

  
  const hasOrders = (orders) => orders.some(order => order > 0);

  // const [orders, setOrders] = useState(foodData.map(() => 0));

  const incrementOrder = (index) => {
    setOrders((prevOrders) =>
      prevOrders.map((order, i) => (i === index ? order + 1 : order))
    );
  };

  const decrementOrder = (index) => {
    setOrders((prevOrders) =>
      prevOrders.map((order, i) => (i === index && order > 0 ? order - 1 : order))
    );
  };

  const addFoodToOrder = (index) => {
    incrementOrder(index, setFoodOrders);
  };

  const addPizzaToOrder = (index) => {
    incrementOrder(index, setPizzaOrders);
  };
  const addCakeToOrder = (index) => {
    incrementOrder(index, setPizzaOrders);
  };
  const addDrinkToOrder = (index) => {
    incrementOrder(index, setPizzaOrders);
  };

  return (
    <div className='flex gap-10 h-full'>
      <div className="flex flex-col gap-10 basis-10/12 ">
        <div className=" py-[50px] ">
          <Carousel />
        </div>
        <div className="">
          {/* foods */}
          <div className="flex flex-col gap-y-10">
            {/* title and link */}
            <div className="flex justify-between items-center">
              {/* title */}
              <div className="">
                <p className="font-bold text-[28px] leading-relaxed tracking-wide text-second">Nourritures</p>
              </div>
              {/*lien  */}
              <div className="">
                <Link href="/dashboard/menu/food" className="underline font-semibold text-[16px] leading-normal tracking-[340p] flex items-center text-first gap-1">Voir plus <FaArrowRight /></Link>
              </div>
            </div>
            {/* nourritures */}
            <motion.div 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.4}} 
            className="grid lg:grid-cols-2 gap-4 md:grid-cols-1 ">
              {
                foodData.map((item, id) => (
                <motion.div 
                variants={fadeIn('up', 0.2)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{once: false, amount:0.8}} 
                className="bg-slate-100 rounded-[20px] p-4 group relative" key={id}>
                  {/* image et details */}
                  <div className="flex gap-4">
                    {/* image */}
                    <div className="flex-1">
                      <Image alt="food" src={item.image} width={400} height={400} className='rounded-[20px] w-full h-full object-fill'/>
                    </div>
                    {/* text */}
                    <div className="flex flex-col flex-1 gap-2">
                      {/* title and price */}
                      <div className="flex justify-between items-center">
                        {/* title */}
                        <div className="">
                          <p className="title">{item.title}</p>
                        </div>
                        {/* price */}
                        <div className="">
                          <p className="price">{item.prix}</p>
                        </div>
                      </div>
                      {/* caractéristique */}
                      <div className="">
                        <p className="">{item.means}</p>
                      </div>
                      {/* ajouter à la liste */}
                      <div className="">
                        <p className="button">Ajoutez à la liste</p>
                      </div>
                    </div>
                  </div>
                   {/* group hover */}
                  <div className="hidden absolute top-0 left-0 bg-black/50 group-hover:text-white 
                          group-hover:w-full group-hover:h-full group-hover:flex group-hover:transition-all group-hover:duration-500
                          group-hover:justify-center group-hover:items-center group-hover:px-4">
                        <div className="flex flex-col justify-center items-center gap-8 h-full">
                          {/* title and price */}
                          <div className=" flex justify-between gap-12">
                            {/* title */}
                            <div className="">                  
                              <p className="title text-[25px]">{item.title}</p>
                            </div>
                            {/* prix */}
                            <div className="">
                              <p className="price text-[25px]">{item.prix}</p>
                            </div>
                          </div>
                          {/* nombre de commandes */}
                          <div className="flex bg-slate-400 w-[200px] py-3 px-2 justify-between gap-6 rounded-xl items-center">
                            <span onClick={() => decrementOrder(id, setFoodOrders)} className="text-[25px]">{item.moins}</span>
                            <span className="text-[20px]">{foodOrders[id]}</span>
                            <span onClick={() => incrementOrder(id, setFoodOrders)} className="text-[25px] font-medium">{item.plus}</span>
                          </div>
                          <div className="">
                            <button className='button bg-first ' onClick={() => addFoodToOrder(index)}>Ajoutez</button>
                          </div>
                        </div>
                  </div>
                </motion.div>
                ))
              }
            </motion.div>
          </div>
          {/* drinks */}
          <div className="flex flex-col gap-y-10 py-[70px]">
            {/* title and link */}
            <div className="flex justify-between items-center">
              {/* title */}
              <div className="">
                <p className="font-bold text-[28px] leading-relaxed tracking-wide text-second">Boissons</p>
              </div>
              {/*lien  */}
              <div className="">
                <Link href="/dashboard/menu/drink" className="underline font-semibold text-[16px] leading-normal tracking-[340p] flex items-center text-first gap-1">Voir plus <FaArrowRight /></Link>
              </div>
            </div>
            {/* boissons */}
            <motion.div 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.4}} 
            className="grid lg:grid-cols-2 gap-4 md:grid-cols-1 ">
              {
                drinkData.map((item, id) => (
                <motion.div 
                variants={fadeIn('up', 0.2)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{once: false, amount:0.8}} 
                className="bg-slate-100 rounded-[20px] p-4 group relative" key={id}>
                  {/* image et details */}
                  <div className="flex gap-4">
                    {/* image */}
                    <div className="flex-1">
                      <Image alt="food" src={item.image} width={400} height={400} className='rounded-[20px] w-full h-full object-fill'/>
                    </div>
                    {/* text */}
                    <div className="flex flex-col flex-1 gap-2">
                      {/* title and price */}
                      <div className="flex justify-between items-center">
                        {/* title */}
                        <div className="">
                          <p className="title">{item.title}</p>
                        </div>
                        {/* price */}
                        <div className="">
                          <p className="price">{item.prix}</p>
                        </div>
                      </div>
                      {/* caractéristique */}
                      <div className="">
                        <p className="">{item.means}</p>
                      </div>
                      {/* ajouter à la liste */}
                      <div className="">
                        <p className="button">Ajoutez à la liste</p>
                      </div>
                    </div>
                  </div>
                   {/* group hover */}
                    <div className="hidden absolute top-0 left-0 bg-black/50 group-hover:text-white 
                          group-hover:w-full group-hover:h-full group-hover:flex group-hover:transition-all group-hover:duration-500
                          group-hover:justify-center group-hover:items-center group-hover:px-4">
                        <div className="flex flex-col justify-center items-center gap-8 h-full">
                          {/* title and price */}
                          <div className=" flex justify-between gap-12">
                            {/* title */}
                            <div className="">                  
                              <p className="title text-[25px]">{item.title}</p>
                            </div>
                            {/* prix */}
                            <div className="">
                              <p className="price text-[25px]">{item.prix}</p>
                            </div>
                          </div>
                          {/* nombre de commandes */}
                          <div className="flex bg-slate-400 w-[200px] py-3 px-2 justify-between gap-6 rounded-xl items-center">
                            <span onClick={() => decrementOrder(id, setDrinkOrders)} className="text-[25px]">{item.moins}</span>
                            <span className="text-[20px]">{drinkOrders[id]}</span>
                            <span onClick={() => incrementOrder(id, setDrinkOrders)} className="text-[25px] font-medium">{item.plus}</span>
                          </div>
                          <div className="cursor-pointer">
                            <button className='button bg-first ' onClick={() => addDrinkToOrder(index)}>Ajoutez</button>
                          </div>
                        </div>
                    </div>
                </motion.div>
                ))
              }
            </motion.div>
          </div>
          {/* cakes */}
          <div className="flex flex-col gap-y-10 py-[70px]">
            {/* title and link */}
            <div className="flex justify-between items-center">
              {/* title */}
              <div className="">
                <p className="font-bold text-[28px] leading-relaxed tracking-wide text-second">Gateaux & Croissants</p>
              </div>
              {/*lien  */}
              <div className="">
                <Link href="/dashboard/menu/drink" className="underline font-semibold text-[16px] leading-normal tracking-[340p] flex items-center text-first gap-1">Voir plus <FaArrowRight /></Link>
              </div>
            </div>
            {/* gateaux */}
            <motion.div 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.4}} 
            className="grid lg:grid-cols-2 gap-4 md:grid-cols-1 ">
              {
                drinkData.map((item, id) => (
                <motion.div 
                variants={fadeIn('up', 0.2)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{once: false, amount:0.8}} 
                className="bg-slate-100 rounded-[20px] p-4 group relative" key={id}>
                  {/* image et details */}
                  <div className="flex gap-4">
                    {/* image */}
                    <div className="flex-1">
                      <Image alt="food" src={item.image} width={400} height={400} className='rounded-[20px] w-full h-full object-fill'/>
                    </div>
                    {/* text */}
                    <div className="flex flex-col flex-1 gap-2">
                      {/* title and price */}
                      <div className="flex justify-between items-center">
                        {/* title */}
                        <div className="">
                          <p className="title">{item.title}</p>
                        </div>
                        {/* price */}
                        <div className="">
                          <p className="price">{item.prix}</p>
                        </div>
                      </div>
                      {/* caractéristique */}
                      <div className="">
                        <p className="">{item.means}</p>
                      </div>
                      {/* ajouter à la liste */}
                      <div className="">
                        <p className="button">Ajoutez à la liste</p>
                      </div>
                    </div>
                  </div>
                   {/* group hover */}
                   <div className="hidden absolute top-0 left-0 bg-black/50 group-hover:text-white 
                          group-hover:w-full group-hover:h-full group-hover:flex group-hover:transition-all group-hover:duration-500
                          group-hover:justify-center group-hover:items-center group-hover:px-4">
                        <div className="flex flex-col justify-center items-center gap-8 h-full">
                          {/* title and price */}
                          <div className=" flex justify-between gap-12">
                            {/* title */}
                            <div className="">                  
                              <p className="title text-[25px]">{item.title}</p>
                            </div>
                            {/* prix */}
                            <div className="">
                              <p className="price text-[25px]">{item.prix}</p>
                            </div>
                          </div>
                          {/* nombre de commandes */}
                          <div className="flex bg-slate-400 w-[200px] py-3 px-2 justify-between gap-6 rounded-xl items-center">
                            <span onClick={() => decrementOrder(id, setCakeOrders)} className="text-[25px]">{item.moins}</span>
                            <span className="text-[20px]">{cakeOrders[id]}</span>
                            <span onClick={() => incrementOrder(id, setCakeOrders)} className="text-[25px] font-medium">{item.plus}</span>
                          </div>
                          <div className="cursor-pointer">
                            <button className='button bg-first ' onClick={() => addCakeToOrder(index)}>Ajoutez</button>
                          </div>
                        </div>
                    </div>
                </motion.div>
                ))
              }
            </motion.div>
          </div>
          {/* pizza */}
          <div className="flex flex-col gap-y-10 py-[70px]">
            {/* title and link */}
            <div className="flex justify-between items-center">
              {/* title */}
              <div className="">
                <p className="font-bold text-[28px] leading-relaxed tracking-wide text-second">Pizzas</p>
              </div>
              {/*lien  */}
              <div className="">
                <Link href="/dashboard/menu/drink" className="underline font-semibold text-[16px] leading-normal tracking-[340p] flex items-center text-first gap-1">Voir plus <FaArrowRight /></Link>
              </div>
            </div>
            {/* pizza */}
            <motion.div 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.4}} 
            className="grid lg:grid-cols-2 gap-4 md:grid-cols-1 ">
              {
                drinkData.map((item, id) => (
                <motion.div 
                variants={fadeIn('up', 0.2)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{once: false, amount:0.8}} 
                className="bg-slate-100 rounded-[20px] p-4 group relative" key={id}>
                  {/* image et details */}
                  <div className="flex gap-4">
                    {/* image */}
                    <div className="flex-1">
                      <Image alt="food" src={item.image} width={400} height={400} className='rounded-[20px] w-full h-full object-fill'/>
                    </div>
                    {/* text */}
                    <div className="flex flex-col flex-1 gap-2">
                      {/* title and price */}
                      <div className="flex justify-between">
                        {/* title */}
                        <div className="">
                          <p className="title">{item.title}</p>
                        </div>
                        {/* price */}
                        <div className="">
                          <p className="price">{item.prix}</p>
                        </div>
                      </div>
                      {/* caractéristique */}
                      <div className="">
                        <p className="">{item.means}</p>
                      </div>
                      {/* ajouter à la liste */}
                      <div className="">
                        <p className="button">Ajoutez à la liste</p>
                      </div>
                    </div>
                  </div>
                   {/* group hover */}
                   <div className="hidden absolute top-0 left-0 bg-black/50 group-hover:text-white 
                          group-hover:w-full group-hover:h-full group-hover:flex group-hover:transition-all group-hover:duration-500
                          group-hover:justify-center group-hover:items-center group-hover:px-4">
                        <div className="flex flex-col justify-center items-center gap-8 h-full">
                          {/* title and price */}
                          <div className=" flex justify-between gap-12">
                            {/* title */}
                            <div className="">                  
                              <p className="title text-[25px]">{item.title}</p>
                            </div>
                            {/* prix */}
                            <div className="">
                              <p className="price text-[25px]">{item.prix}</p>
                            </div>
                          </div>
                          {/* nombre de commandes */}
                          <div className="flex bg-slate-400 w-[200px] py-3 px-2 justify-between gap-6 rounded-xl items-center">
                            <span onClick={() => decrementOrder(id, setPizzaOrders)} className="text-[25px]">{item.moins}</span>
                            <span className="text-[20px]">{pizzaOrders[id]}</span>
                            <span onClick={() => incrementOrder(id, setPizzaOrders)} className="text-[25px] font-medium">{item.plus}</span>
                          </div>
                          <div className="cursor-pointer">
                            <button className='button bg-first ' onClick={() => addPizzaToOrder(index)}>Ajoutez</button>
                          </div>
                        </div>
                    </div>
                </motion.div>
                ))
              }
            </motion.div>
          </div>
        </div>
      </div>
      <div className="basis-3/12 w-full h-[100%]  z-50  top-[110px]">
        <CardCommande 

          foodOrders={foodOrders}
          drinkOrders={drinkOrders}
          cakeOrders={cakeOrders}
          pizzaOrders={pizzaOrders}
          foodData={foodData}
          cakeData={cakeData}
          drinkData={drinkData}
          pizzaData={pizzaData}
        
        />
      </div>
    </div>
  )
}

export default Page
