import React from 'react'

const Header = ({Name}: {Name:string}) => {
    return (
      <>
        <div className='text-lg font-bold text-white px-3 border-b'>{Name}</div>
      </>
    )
  }
export default Header