import React from 'react';
import ShowNum from './ShowNum';

export default function Intro() {
  return (
    <div className="md:grid md:grid-cols-2 w-[460px] md:w-full">
        {/* Intro to program */}
    <div className='bg-green-600 p-10 md:col-span-1 flex flex-col justify-center items-center'>

<h1 className="font-bold text-3xl text-center mb-5"> Overview</h1>
<p
className='text-sm text-white md:w-3/4 mx-auto'
>Are you fascinated by the inner workings of vehicles? Do you dream of a career building the cars of tomorrow? Our comprehensive Automobile Manufacturing 
    Skill Training Program equips you with the essential knowledge and hands-on experience to thrive in this exciting industry.</p>
    </div>

    {/* Interesting info */}
    <div className='bg-gray-100 p-2 flex justify-evenly items-center'>
        <ShowNum num={50} disp='Trained Experts'/>
        <ShowNum num={10} disp='Professional Modules'/>
        <ShowNum num={5} disp='Locations'/>
    </div>
    </div>
  );
}