import React from 'react';
import ModuleItem from './ModuleItem';


export default function Modules() {
  return (
    <div className="flex flex-col items-center justify-center p-2 mt-2">
        <h1 className='text-3xl font-bold '>Modules</h1>
    <div className='grid grid-cols-5 mt-5 md:space-x-2'>
    <ModuleItem
text='Harnessing'
color='green'
intensity={900}/>
<ModuleItem
text='PLC Design'
color='green'
intensity={600}/>
<ModuleItem
text='Mechatronics'
color='green'
intensity={400}/>
<ModuleItem
text='Spot Welding'
color='green'
intensity={600}/>

<ModuleItem
text='Automotive QC'
color='green'
intensity={900}/>
    </div>
    </div>
  );
}
