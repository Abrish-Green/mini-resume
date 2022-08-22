import React, { SyntheticEvent } from 'react'
import { SyntheticExpression } from 'typescript'
import Description from './Description'
import Header from './Header'
import Skill from './Skill'
interface ResumeProps{
  Name: string,
  Experience: string,
  Skills: string[]
}
const Index = ({Name, Experience, Skills}: ResumeProps) => {

  return (
      <>
        <div className="w-80 h-full shadow-lg  flex-col">
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
          <Skill Skill={Skills} />
       
          </div>
        </div>
      </>
  )
}

export default Index