"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef,useState,useEffect } from "react";
import "./Home.css"
import Landing from "./Landing";
import Gallery from "./Gallery";

export default function Slider({images}) {
  return (
    <motion.div className="carousel">
          <motion.div className="inner-carousel">
                <Landing/>
                {images.map((n,i) => {
                    return (
                      <motion.div key={i} className="item">
                          <img src={n}/>
                      </motion.div>
                    )
                })}
          </motion.div>
    </motion.div>
  )
}
