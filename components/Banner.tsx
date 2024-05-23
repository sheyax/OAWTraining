import React from 'react';

export default function Banner() {
  return (
    <div className="md:grid md:grid-cols-2">
    <div className=" space-y-5 p-5 md:p-2">
    <h1 className='text-6xl font-bold font-sans text-center md:text-left'> Become an Automobile Manufacturing Expert
</h1>

<p className='text-green-800 text-md text-center md:text-left'> Developing skills for new energy automobile vehicle manufacturing in Nigeia</p>
    </div>

    <div>
    <img
        src="/bann.jpg"
        alt="My Image Description"
        className='object-cover w-full h-40 md:w-[700px] md:h-96'
      />
    </div>
    </div>
  );
}
