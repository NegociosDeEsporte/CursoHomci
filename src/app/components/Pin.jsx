"use client"
import Image from "next/image";
import pin from '../../../public/pin.png'
import React, { useState, useEffect } from 'react';
export default function Pin() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      if (scrollTop + clientHeight === scrollHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed-component transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
     <div className="fixed inset-0 flex items-end justify-center z-10 transition-all duration-300 ease-out">
      <Image src={pin}className="h-7 w-10 animate-bounce"/>
    </div> 
    </div>
  );
};
