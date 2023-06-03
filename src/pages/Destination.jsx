import NavBar from "../components/NavBar"
import MoonImgW from "../assets/destination/image-moon.webp"
import MoonImg from "../assets/destination/image-moon.png"
import NavTabs from "../components/NavTabs"

const Destination = () => {
  return (
    <main id="main" className="grid-container grid-container--destination flow">
      <h1 className="numbered-title uppercase"><span aria-hidden="true" >01</span> Pick your destination</h1>
      <picture>
        <source srcSet={MoonImgW} type="image/webp"/>
        <img src={MoonImg} alt="the moon" />
      </picture>
      <NavTabs />
      <article className="destination-info">
      <h2 className="fs-800 uppercase ff-serif">Moon</h2>

        <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
        regain perspective and come back refreshed. While you’re there, take in some history 
        by visiting the Luna 2 and Apollo 11 landing sites.</p>
        
        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="fs-500 ff-serif uppercase">384,400 km</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="fs-500 ff-serif uppercase">3 days</p>
          </div>
        </div>
      </article>
    </main>
  )
}

export default Destination