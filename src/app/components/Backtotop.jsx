"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setIsVisible(!isTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && <div>
        <a href="#inicio" className='animate-bounce fixed bottom-2 right-5 text-azul-claro transition ease-in-out duration-300 rounded-full md:z-10'>
          <FontAwesomeIcon icon={faArrowAltCircleUp} className=' h-10 hover:text-white rounded-full transition ease-in-out duration-300' />
        </a>
      </div>}

    </div>
  );
};