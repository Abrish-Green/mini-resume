import React from 'react'

const Description = ({DescriptionText}: {DescriptionText:string}) => {
    return (
      <>
            <div className='text-lg font-thin text-white flex justify-start pl-4 break-all'>{DescriptionText}</div>  
      </>
      )
}

export default Description