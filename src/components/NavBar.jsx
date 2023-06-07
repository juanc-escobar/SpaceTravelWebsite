import {Link} from 'react-router-dom';

const NavBar = ({clicked, activeClass}) => {

  return (
    <nav className="nav-bar">
    <ul className='primary-navigation underline-indicators flex' data-visible={clicked ? "false" : "true"}>
      <li className={activeClass === "/" ? "active" : "" }> <Link to={"/"} className='uppercase text-white ff-sans-cond letter-spacing-2'><span aria-hidden="true"></span><span>00</span>Home</Link></li>
      <li className={activeClass === "/Destination" ? "active" : "" }> <Link to={"Destination"} className='uppercase text-white ff-sans-cond letter-spacing-2'><span aria-hidden="true">01</span>Destination</Link></li>
      <li className={activeClass === "/Crew" ?  "active" : "" }><Link to={"Crew"} className='uppercase text-white ff-sans-cond letter-spacing-2' href="#"><span aria-hidden="true">02</span>Crew</Link></li>
      <li className={activeClass === "/Technology" ? "active" : "" }><Link to={"Technology"} className='uppercase text-white ff-sans-cond letter-spacing-2' href="#"><span aria-hidden="true">03</span>Technology</Link></li>
    </ul>
  </nav>
  )
}

export default NavBar