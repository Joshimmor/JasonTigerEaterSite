"use client"


import React, { useState, useEffect } from 'react';
export default function Landing() {
  const [index, setIndex] = useState(0);
  const dataArray = ['JASON', 'TIGER', 'EATER'];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % dataArray.length);
    }, 1000); // Change the value to control the speed of the loop

    return () => clearInterval(interval); // Cleanup on unmount
  }, [dataArray.length]);
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
        <h1>{dataArray[index]}</h1>
        <h1>{dataArray[index]}</h1>
        <h1>{dataArray[index]}</h1>
    </div>
  )
}
