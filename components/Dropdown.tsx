"use client"
import React, { useState } from 'react';
type Props ={
    triggerText:string;
    children: any;
}

const Dropdown = ({triggerText, children}: Props)=>{
const [isOpen, setIsOpen] = useState(false);

const toggeleDropdown = ()=> setIsOpen(!isOpen);

return(
    <div className="dropdown relative w-[100px]">
        <button
        className="dropdown-trigger focus:outline-none px-3 w-full py-2 rounded-md bg-green-300 hover:bg-green-200"
        onClick={toggeleDropdown}>
            {triggerText}
        </button>

        {isOpen && (
            <div className= "dropdown-content absolute top-full left-0 bg-white shadow-md rounded-md w-full overflow-hidden z-50">
                {children}
            </div>
        )}
    </div>
)
}

export default Dropdown