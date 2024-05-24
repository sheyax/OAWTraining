import React from 'react';
import ShowNum from './ShowNum';

export default function Intro() {
  return (
    <div>
    <div className="md:grid md:grid-cols-2">

      <div className='bg-green-600 flex flex-col
      text-center items-center justify-center p-10'>
       <h1 className="font-bold text-3xl ">Overview</h1>
        <p className='text-white text-sm mt-5'>The automobile manufacturing industry is a dynamic and ever-evolving field, offering exciting career opportunities for individuals with the right skills. Our comprehensive Automobile Manufacturing Skill Training Program equips you with the theoretical
           knowledge and practical experience needed to thrive in this in-demand sector.</p>
      </div>
      <div className='bg-gray-100 flex justify-between p-10 items-center'>
        <ShowNum num={100} disp='Students'/>
        <ShowNum num={10} disp='Professionals'/>
        <ShowNum num={5} disp='Courses'/>
      </div>

    </div>
    </div>
  );
}