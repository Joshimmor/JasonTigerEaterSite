import Link from 'next/link'
import React from 'react'


export default function Menu() {
  return (
    <div className='fixed top-0 w-screen h-screen flex flex-col justify-between'>
        <div className='w-screen flex justify-between p-5'>
            <Link href={'/gallery'}>SHOP</Link>
            <Link href={'/'}>MUSIC</Link>
        </div>
        <div className='w-screen flex justify-between p-5'>
            <Link href={'/'}>CONTACT</Link>
            <Link href={'/'}>ARCHIVE</Link>
        </div>
    </div>
  )
}
