import React from 'react'

export const NavDots = () => {
  return (
    <div className="dot-indicators flex">
        <button aria-selected="true" className='active'><span className='sr-only'>Slide title</span></button>
        <button aria-selected="false" className=''><span className='sr-only'>Slide title</span></button>
        <button aria-selected="false" className=''><span className='sr-only'>Slide title</span></button>
    </div>
  )
}
