import React from 'react'
import Description from './Description'
import Header from './Header'
interface ResumeProps{
  Name: string,
  Experience: string,
  Skills: string[]
}
const Index = ({Name, Experience, Skills}: ResumeProps) => {

  return (
      <>
        <div className="w-80 h-auto border flex-col">
        <div className="py-4 px-5 border bg-slate-900 flex-col w-full">
          <Header Name={'Name'} />
          <Description DescriptionText={Name} />
        </div>
        <div className="py-4 px-5 border bg-slate-900 flex-col justify-around w-full gap-2">
          <Header Name={'Experience'} />
          <Description DescriptionText={Experience} />
       </div>
        <div className="py-4 px-5 border bg-slate-900 flex-col justify-around w-full gap-2">
          <Header Name={'Skills'} />
          <ul className='text-md font-thin text-white flex-col justify-start pl-4 break-all'>
            
            {Skills &&
              Skills.map((skill) => {
                return <li>{skill}</li>
              })
            }
            <li>
              <input className="px-2 w-32 mt-2 text-black" placeholder="Add Skill" />
              <button className='bg-transparent mx-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  px-2 border border-blue-500 hover:border-transparent rounded text-sm'>Add</button></li>
          </ul>  
       
          </div>
        </div>
      </>
  )
}

export default Index