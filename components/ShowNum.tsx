import React from 'react';

type Props={
    num: number;
    disp: string;
}

export default function ShowNum({num, disp}:Props) {
  return (
    <div className='flex flex-col items-center justify-center p-2'>
        <h1 className='font-bold text-5xl mx-auto'>{num}</h1>
    <p>{disp}</p>
    </div>
  )
}