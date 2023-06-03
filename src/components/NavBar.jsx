import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav className="nav-bar">
    <ul className='primary-navigation underline-indicators flex' data-visible={props.clicked ? "false" : "true"}>
      <li className='active'> <Link to={"/"} className='uppercase text-white ff-sans-cond letter-spacing-2'><span aria-hidden="true"></span><span>00</span>Home</Link></li>
      <li className=''> <Link to={"Destination"} className='uppercase text-white ff-sans-cond letter-spacing-2'><span aria-hidden="true">01</span>Destination</Link></li>
      <li className=''><Link to={"Crew"} className='uppercase text-white ff-sans-cond letter-spacing-2' href="#"><span aria-hidden="true">02</span>Crew</Link></li>
      <li className=''><Link to={"Technology"} className='uppercase text-white ff-sans-cond letter-spacing-2' href="#"><span aria-hidden="true">03</span>Technology</Link></li>
    </ul>
  </nav>
  )
}

export default NavBar