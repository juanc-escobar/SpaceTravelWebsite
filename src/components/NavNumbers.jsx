import React from 'react'

const NavNumbers = ({selectTech, handleTech}) => {
    const technology = ["Launch vehicle", "Spaceport", "Space capsule"]
  return (
    <div className="numbers-indicators flex">
        {technology.map((tech, index) => (
            <button key={tech} aria-selected={tech} className={`${tech === selectTech ? 'active' : ''}`} onClick={() => {handleTech(tech)}}>
                <span className='sr-only'>{tech}</span>{index + 1}
            </button>  
        ))}
  </div>
  )
}

export default NavNumbers