import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

        <div className="space-y-5 p-2 md:w-3/4 flex-grow">
            <h1 className="font-bold text-3xl md:text-4xl text-green-800 text-center">About OAW Automobile Training</h1>

            <p className='text-gray-700 text-center text-md'>
                OAW Automobile Training is the training arm of Origin Automobile Works committed to building capacity in Automobile Manufacturing Skills. 
                We aim to fill the skill gap in Nigeria's automobile manufacturing ecosystem. Promoting high tech skills relevant for today's competitive automobile industry and pioneering
                Nigeria's automobile manufacturing capabilities.
            </p>
        </div>
    
    </div>
  );
}
