import NavBar from "../components/NavBar"
import ExploreBtn from "../components/ExploreBtn"
import { useState } from "react"


const Home = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => { 
    setClicked(!clicked);
    console.log(clicked);
  } 



  return (
    <div className="home">
    <a className="skip-to-content" href="#main">Skip to content</a>
    <header className="primary-header flex">
        <div>
          <img src="../src/assets/shared/logo.svg" alt="space tourism logo" className="logo"/>
        </div>
        <button className="mobile-nav-btn" aria-controls="primary-navigation" aria-expanded={clicked ? "false" : "true"} onClick={handleClick}><span className="sr-only">Menu</span></button>
        <NavBar clicked={clicked}/>
    </header>
    <main id="main" className="grid-container grid-container--home">
      <div>
        <h1 className="text-light fs-500 ff-sans-cond letter-spacing-1 uppercase">So, you want to travel to
        <span className="fs-900 ff-serif text-white d-block">Space</span></h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
        outer space and not hover kind of on the edge of it. Well sit back, and relax 
        because we’ll give you a truly out of this world experience! </p>
      </div>
      <ExploreBtn />
    </main>
    </div>
  )
}

export default Home