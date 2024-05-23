import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-green-900">

<div className="grid grid-cols-4 p-2 mx-12">

    <div className="space-y-2 p-2">
        <h1 className='text-white font-bold text-2xl'>OAW <p className='text-sm text-green-100'>Automobile Training</p></h1>

        <p className="text-green-100 text-sm">33 Imam Dauda Road</p>
        <p className="text-green-100 text-sm">Surulere, Lagos, Nigeria</p>
    </div>
    <div className='space-y-2 text-sm text-green-100 flex flex-col p-2'>
    <Link href="/"> Home</Link>
    <Link href="#"> About Us</Link>
    <Link href="#"> Programs</Link>
    <Link href="#"> Facilitators</Link>
    </div>
    <div></div>
    <div>
        
    </div>

</div>
    </footer>
  )
}