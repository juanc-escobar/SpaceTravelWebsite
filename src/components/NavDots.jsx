import React from 'react'

export const NavDots = ({selectCrew = 'Douglas Hurley', handleCrew}) => {

  const tripulation = ['Douglas Hurley', 'Mark Shuttleworth', 'Victor Glover', 'Anousheh Ansari']

  return (
    <div className="dot-indicators flex">
        {tripulation.map((crew) => (
          <button key={crew} aria-selected={crew === selectCrew} className={`${crew === selectCrew ? 'active' : ''}`} onClick={() => handleCrew(crew)}><span className='sr-only'>{crew}</span></button>
        ))}
    </div>
  )
}
