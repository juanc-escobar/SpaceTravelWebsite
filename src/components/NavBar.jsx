
const NavBar = (props) => {
  return (
    <nav className="nav-bar">
    <ul className='primary-navigation underline-indicators flex' data-visible={props.clicked ? "false" : "true"}>
      <li className='active'><a className='uppercase text-white ff-sans-cond letter-spacing-2' href="#"><span aria-hidden="true"></span><span>00</span>Home</a></li>
      <li className=''><a className='uppercase text-white ff-sans-cond letter-spacing-2' href="#"><span aria-hidden="true">01</span>Destination</a></li>
      <li className=''><a className='uppercase text-white ff-sans-cond letter-spacing-2' href="#"><span aria-hidden="true">02</span>Crew</a></li>
      <li className=''><a className='uppercase text-white ff-sans-cond letter-spacing-2' href="#"><span aria-hidden="true">03</span>Technology</a></li>
    </ul>
  </nav>
  )
}

export default NavBar