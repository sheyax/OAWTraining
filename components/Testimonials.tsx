import React from 'react';
import TestimonItem from './TestimonItem';

export default function Testimonials() {
  return (
    <div className="mt-10 space-y-5 flex flex-col items-center justify-center">
    <h1 className="text-xl font-bold">What our Students are Saying</h1>

    <div className="grid grid-cols-2 p-2 md:grid-cols-4">
        <TestimonItem
        name='Alex Usman'
        title='Automation Specialist'
        comment="I never expected to find such amazing opputunities after the training "
        />

<TestimonItem
        name='Samantha Jones'
        title='QC Specialist'
        comment="I gained professional and transferable skills "
        />

<TestimonItem
        name='Bayo Sholape'
        title='Automotive Electritian'
        comment="This was an eye opener to the world of electricals for vehicles "
        />
  <TestimonItem
        name='Chibunna Amadi'
        title='PLC Engineer'
        comment="I was introduced to new technology changing the world "
        />

    </div>
    </div>
  );
}
