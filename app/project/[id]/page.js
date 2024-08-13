import Link from 'next/link'
import React from 'react'

export default function Page({params}) {
  return (
    <div>
        <div className='w-screen fixed top-0 p-5 bg-white flex justify-start items-center'>
            <Link className="text-xl font-bold" href={"/"}>HOME </Link>
            <h1 className="text-xl font-bold " > &nbsp; / &nbsp;</h1>
            <Link className="text-xl font-bold" href={"/gallery"}>GALLERY</Link>
        </div>
    </div>
  )
}
