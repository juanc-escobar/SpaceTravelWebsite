import React from 'react'

const NavTabs = () => {
  return (
    <div className="tab-list underline-indicators flex">
    <button aria-selected="true" className='uppercase text-white letter-spacing-2   ff-sans-cond'>Moon</button>
    <button aria-selected="false" className='uppercase text-white letter-spacing-2  ff-sans-cond'>Mars</button>
    <button aria-selected="false" className='uppercase text-white letter-spacing-2  ff-sans-cond'>Europa</button>
    <button aria-selected="false" className='uppercase text-white letter-spacing-2  ff-sans-cond'>Titan</button>
  </div>
  )
}

export default NavTabs