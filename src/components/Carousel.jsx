"use client"
import React from 'react'
import { useState, useEffect } from 'react';

const images = [
  "/images/cake.jpg",
  "/images/cake3.jpg",
  "/images/food.jpg",
  "/images/cake 2.jpg",
  "/images/drink1.jpg",
  "/images/food.jpg",
  "/images/drink.jpg",
  "/images/pizza.jpg",
  // Ajoutez autant d'images que vous voulez
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };

  return (
    <div>
      <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden relative h-64 sm:h-80 md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'} ${index < currentIndex ? '-translate-x-full' : ''}`}
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white p-2 rounded-full shadow-lg">
        &#10094;
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow-lg">
        &#10095;
      </button>
    </div>
    </div>
  )
}

export default Carousel
