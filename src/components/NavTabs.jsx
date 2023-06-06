import React from 'react'


const NavTabs = ({selectPlanet, handlePlanetChange}) => {
  
  const planets = ['Moon', 'Mars', 'Europa', 'Titan']

  if (!selectPlanet) {
    selectPlanet = planets[0]; 
  }

  return (
    <div className="tab-list underline-indicators flex">
      {planets.map((planet) => (
        <button key={planet} aria-selected ={planet === selectPlanet} className='uppercase text-white letter-spacing-2 ff-sans-cond' onClick={() => handlePlanetChange(planet)}>{planet}</button>
      ))}
  </div>
  )
}

export default NavTabs