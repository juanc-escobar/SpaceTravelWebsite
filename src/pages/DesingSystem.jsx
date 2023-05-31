import React from 'react'

export const DesingSystem = () => {
  return (
    <>
    <div className='container'>
        <h1>Desing System</h1>
        <div className='bg-dark text-white'>Dark bg with white text</div>
        <div className='bg-light text-dark'>Light bg with black text</div>
        <div className='bg-white text-light'>White bg with light text</div>
        <section id='colors'></section>
        <div className="tab-list underline-indicators flex">
          <button aria-selected="true" className='uppercase text-white letter-spacing-2 bg-dark ff-sans-cond'>Moon</button>
          <button aria-selected="false" className='uppercase text-white letter-spacing-2 bg-dark ff-sans-cond'>Mars</button>
          <button aria-selected="false" className='uppercase text-white letter-spacing-2 bg-dark ff-sans-cond'>Europa</button>
        </div>
        <nav>
          <ul className='primary-navigation underline-indicators flex'>
            <li className='active'><a className='uppercase text-white letter-spacing-2' href="#"><span>01</span> Active</a></li>
            <li className=''><a className='uppercase text-white letter-spacing-2' href="#"><span>02</span> Hoverd</a></li>
            <li className=''><a className='uppercase text-white letter-spacing-2' href="#"><span>03</span> Idle</a></li>
          </ul>
        </nav>
        <div className="dot-indicators flex">
          <button aria-selected="true" className='active'><span className='sr-only'>Slide title</span></button>
          <button aria-selected="false" className=''><span className='sr-only'>Slide title</span></button>
          <button aria-selected="false" className=''><span className='sr-only'>Slide title</span></button>
        </div>
        <div className="numbers-indicators flex">
          <button aria-selected="true" className='active'><span className='sr-only'>Slide Number One</span>1</button>
          <button aria-selected="false" className=''><span className='sr-only'>Slide Number Two</span>2</button>
          <button aria-selected="false" className=''><span className='sr-only'>Slide Number Tree</span>3</button>
        </div>
        <div className='flex'>
          <div style={{marginTop: '5rem'}}>
            <a href="#" className="large-button uppercase ff-serif fs-600 text-dark bg-white">Explore</a>
          </div>
        </div>
    </div>
    
    </>
  )
}
