import Link from 'next/link';
import React from 'react';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

export default function Header() {
  return (
    <header className="py-5 px-10">
    <div className=" flex items-center justify-between">
        <Link href="/">
            <h1 className="text-2xl text-green-600 font-bold">OAW 
            <p className="text-sm">Automobile Training</p></h1>
        </Link>

        <div className=" py-8 md:hidden">
            <Dropdown triggerText='Menu'>
                <DropdownItem text="About" href="#"/>
                <DropdownItem text="Program" href="#"/>
                <DropdownItem text="Facilities" href="#"/>
            </Dropdown>
        </div>

        <div className="md:space-x-5 text-green-800 md:inline-block hidden">
            <Link href="#">About</Link>
            <Link href="#">Program</Link>
            <Link href="#">Facilities</Link>
        </div>
    </div>
    </header>
  );
}
