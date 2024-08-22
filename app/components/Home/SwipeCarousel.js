"use client"
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Landing from "./Landing";
import Link from "next/link";
import "./Home.css"
// const imgs = [
//   "/imgs/nature/1.jpg",
//   "/imgs/nature/2.jpg",
//   "/imgs/nature/3.jpg",
//   "/imgs/nature/4.jpg",
//   "/imgs/nature/5.jpg",
//   "/imgs/nature/6.jpg",
//   "/imgs/nature/7.jpg",
// ];

 
// Font files can be colocated inside of `pages`

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 5;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 2,
  stiffness: 400,
  damping: 80,
};

export const SwipeCarousel = ({imgs}) => {
  const [imgIndex, setImgIndex] = useState(imgs.length+1);

  const dragX = useMotionValue(0);

  // useEffect(() => {
  //   const intervalRef = setInterval(() => {
  //     const x = dragX.get();

  //     if (x === 0) {
  //       setImgIndex((pv) => {
  //         if (pv === imgs.length +1 ) {
  //           return 0;
  //         }
  //         return pv + 1;
  //       });
  //     }
  //   }, AUTO_DELAY);

  //   return () => clearInterval(intervalRef);
  // }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length+1 ) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden  ">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
          backgroundImage: `radial-gradient(circle, rgba(4,9,5,0.13577586206896552) 5%, rgba(0,0,0,1) 110%) ,url(jungle.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          width: `${(imgs.length +3 ) * 100}vw`
        }}

        animate={{
          translateX: `-${imgIndex * 100}vw`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing "
        
      >
      
        <Images imgIndex={imgIndex} imgs={imgs}/>
      </motion.div>

      {/* <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} imgs={imgs}/> */}
      {/* <GradientEdges /> */}
    </div>
  );
};

const Images = ({ imgIndex,imgs }) => {
    const [index, setIndex] = useState(0);
    const dataArray = ['JASON', 'TIGER', 'EATER'];
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % dataArray.length);
      }, 1000); // Change the value to control the speed of the loop
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, [dataArray.length]);
  return (
    <>
        <motion.div  className='w-screen h-screen shrink-0  flex flex-col  justify-center items-center'
                style={{

                }}>
            <Link href={"/gallery"} className="text-xl font-bold text-white">ARCHIVE</Link>
        </motion.div>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
            }}
            animate={{
              // scale: imgIndex === idx+2 ? .95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className=" w-screen  h-screen shrink-0   flex flex-col  justify-center items-center"
          >
            <div>
                <img src={imgSrc} className="w-screen"/>
            </div>
          </motion.div>       
        );
      })}

        <motion.div  className='w-screen  h-screen shrink-0  flex flex-col  justify-center items-center'
        >
          <h1 className="graphy">{dataArray[index]}</h1>
          <h1  className="graphy">{dataArray[index]}</h1>
          <h1  className="graphy">{dataArray[index]}</h1>
         
      </motion.div>
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex,imgs }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-350/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-350/50 to-neutral-950/0" />
    </>
  );
};