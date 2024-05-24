import React from 'react';

type Props={
    text: string;
    color: string;
    intensity:number;
}
export default function ModuleItem({text, color, intensity}:Props) {
    const bgColorClass= color && intensity ? `bg-${color}-${intensity}` : "";
  return (
    <div className={ `${bgColorClass} p-5 col-span-1 md:h-[200px] md:w-[200px] flex items-center justify-center hover:scale-105 transition-transform duration-100 ease-out cursor-pointer`}>
    <h1 className='text-white md:text-2xl text-sm  text-center'> {text}</h1>
</div>
  );
}
