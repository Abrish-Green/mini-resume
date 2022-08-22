import React from 'react'

const Skill = ({Skill}:{Skill:string[]}) => {
    const [skill, setSkill] = React.useState(Skill)
    const [newSkill, setNewSkill] = React.useState('')
    const HandleChange = (e:any) => {
      setNewSkill(e.target.value)
    }
    const AddSkill = () => {
        setSkill((prev) => [...prev, newSkill])
    }
    return (
      <>
          <ul className='text-md font-thin text-white flex-col justify-start pl-4 break-all'>
            
            {skill &&
              skill.map((skillItem) => {
                return <li>{(skillItem)}</li>
              })
            }
            <li>
              <input onChange={HandleChange} className="px-2 w-32 mt-2 text-black" placeholder="Add Skill" />
              <button onClick={AddSkill} className='bg-transparent mx-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  px-2 border border-blue-500 hover:border-transparent rounded text-sm'>Add</button></li>
          </ul> 
      </>
    )
  }
  

export default Skill
