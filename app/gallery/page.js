"use client"
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
export default function page() {
  let images  = ["https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg","https://kostasmurkudis.org/wp-content/uploads/KM_PE18_Lookbook_final_0912173.jpg"]
  return (
    <AnimatePresence>
        <div className='w-screen fixed top-0 p-5 bg-white'>
            <Link href={"/"} className="text-xl font-bold">BACK</Link>
        </div>
        <div className='w-screen flex flex-wrap p-1 justify-center pt-20'>
        {images.map((n,i)=>{
            return(
            <motion.div
            key={i}  
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: Math.random() *2}}
            exit={{ opacity: 0 }}

            // transition={SPRwING_OPTIONS}
            className=" w-20  m-1 flex flex-col p-1 "
          >
            {/* <div
                style={{
                    backgroundImage: `url(${n})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                 className="w-20 h-15"
              /> */}
              <Link href={"/project/1"}>
              <img src={n}  className='w-20 h-15'/>
              <p>Project Title</p>
              </Link>

          </motion.div>
            )
        })}
        </div>
    </AnimatePresence>

  )
}
