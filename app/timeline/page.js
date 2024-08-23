"use client"
import React, {useEffect, useRef,useState} from 'react';
import { OrbitControls,DeviceOrientationControls } from '@react-three/drei';
import { Canvas, useFrame, useThree} from '@react-three/fiber';
import { Suspense } from 'react';
import { Forest } from '../components/3d/Forest';
import "./timeline.css"
import { Monstera } from '../components/3d/Monstera';
import { AmbientLight } from 'three';
const Controls = () => { 
  const orbitRef = useRef();
  const {camera, gl} = useThree();
  return (
      <OrbitControls
          args={[camera, gl.domElement]}
          ref={orbitRef}
          minDistance={30}
          maxDistance={30}
          maxPolarAngle={1}
          minPolarAngle={1}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={1}
          />
  )
}
function devicePermission() {
  if (typeof DeviceMotionEvent.requestPermission === 'function' && !localStorage.getItem('Motion')) {
    // Handle iOS 13+ devices.
    DeviceMotionEvent.requestPermission();
    localStorage.setItem("Motion",true)
    window.location.reload(false);
  } 
}
export default function Home() {
  let [selected,setSelected] = useState(null)

  return (
      <div className={'scene'}>
          <Suspense>
            <Canvas
            className={'canvas'}>
              {/* <Controls /> */}
              <DeviceOrientationControls/>
               <pointLight position={[0, 0, 30]} intensity={1} />
                <ambientLight />
               <pointLight color="#FFCEFF"  rotation={[0,Math.PI/2,0]} position={[-20,-20,0]} intensity={1} />
              <group>

              {/* <Album

                     /> */}
              <Monstera position={[0,-2.5,3]} scale={20} rotation={[0,-Math.PI/4,0]} />
              <Monstera position={[0,2.5,3]} scale={20} rotation={[0,Math.PI/4,Math.PI]} />
              {/* <NeonSign setSelected={setSelected} selected={selected}/> */}
              {/* <Mask
          
                position={[0,0,0]}
                rotation={[0,0,0]}
              /> */}
              {/* <Diorama position={[0,0,0]} scale={3}/> */}
              {/* <JapaneseForest position={[0,-4,0]}/> */}
              {/* <Mountain position={[10,-10,0]}/> */}
              {/* <Forest position={[0,-4,0]} scale={[1.5,1.5,1.5]}/> */}
              {/* <Fire
                              position={[22.5,2,6.15]}
                              rotation={[0,0,0]}
                              scale={[.5,.5,.5]}
              />
              <Fire
                              position={[-22.5,2,6.15]}
                              rotation={[0,0,0]}
                              scale={[.5,.5,.5]}
              />
              <Fire
                              position={[-22,8,-27.5]}
                              rotation={[0,0,0]}
                              scale={[.5,.5,.5]}
              />
              <Fire
                              position={[22,8,-27.5]}
                              rotation={[0,0,0]}
                              scale={[.5,.5,.5]}
              /> */}
              </group>

            </Canvas>
          </Suspense>

      </div>
  )
}
