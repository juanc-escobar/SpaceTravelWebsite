import NavBar from "../components/NavBar"
import { useState } from "react"
import { Outlet, useLocation } from "react-router-dom"


const Home = () => {

  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  const handleClick = () => { 
    setClicked(!clicked);
    console.log(clicked);
  } 

  const getClassname = () => {
    if (location.pathname === "/Destination") {
      return "bg-destination";
    } else if (location.pathname === "/Crew") {
      return "bg-crew";
    } else if (location.pathname === "/Technology") {
      return "bg-technology";
    } else {
      return "bg-home";
    }
  };

  return (
    <div className={`home ${getClassname()}`}>
      <a className="skip-to-content" href="#main">Skip to content</a>
      <header className="primary-header flex">
          <div>
            <picture>
              <img src="../src/assets/shared/logo.svg" alt="space tourism logo" className="logo"/>
            </picture>
          </div>
          <button className="mobile-nav-btn" aria-controls="primary-navigation" aria-expanded={clicked ? "false" : "true"} onClick={handleClick}><span className="sr-only">Menu</span></button>
          <NavBar clicked={clicked}/>
      </header>
      <Outlet />
    </div>
  )
}

export default Home