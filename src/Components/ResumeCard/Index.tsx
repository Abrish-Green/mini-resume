import React from 'react'

const Index = () => {
  return (
      <>
        <div className="w-80 h-auto border flex-col">
        <div className="py-4 px-5 border bg-slate-900 flex-col w-full">
            <div className='text-lg font-bold text-white px-3 border-b'>Name</div>
            <div className='text-lg font-semibold text-white flex justify-start pl-4'>Abrham Muche</div>  
        </div>
        <div className="py-4 px-5 border bg-slate-900 flex-col justify-around w-full gap-2">
            <div className='text-lg font-bold text-white px-3 border-b'>Experience</div>
            <div className='text-md font-thin text-white flex justify-start pl-4 break-all'> The person who builds, adjusts, and/or maintains.</div>  
       </div>
        <div className="py-4 px-5 border bg-slate-900 flex-col justify-around w-full gap-2">
          <div className='text-lg font-bold text-white px-3 border-b'>Skills</div>
          <ul className='text-md font-thin text-white flex-col justify-start pl-4 break-all'>
            <li>Java</li>
            <li>Javascript</li>
            <li>C++</li>
            <li><input className="px-2 w-32 mt-2 text-black" placeholder="Add Skill" />
              <button className='bg-transparent mx-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  px-2 border border-blue-500 hover:border-transparent rounded text-sm'>Add</button></li>
          </ul>  
       
          </div>
        </div>
      </>
  )
}

export default Index