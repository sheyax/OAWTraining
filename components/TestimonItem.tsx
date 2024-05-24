import React from 'react';
type Props={
    name: string;
    title: string;
    comment: string;
}

export default function TestimonItem({name, title, comment}:Props) {
  return (
    <div className="bg-gray-200 rounded-md p-2 h-42 mx-2 my-2">
        <div className='flex p-2 space-x-2'>
            <div className=" h-[50px] w-[50px] rounded-full bg-green-800">

            </div>
            <div>
                <h1 className='font-bold'>{name}</h1>
                <p className='text-xs text-gray-700'>{title}</p>
            </div>
        </div>
<div className="px-5 text-sm">
<p>  {comment}
            </p>

</div>
        
    
    </div>
  );
}
