import { useState } from "react"
import NavTabs from "../components/NavTabs"
import data from "../data.json"

const Destination = () => {
  const [selectPlanet, setSlectPlanet] = useState("Moon");
  const {name, images, description, distance, travel} = data.destinations.find(planet => planet.name === selectPlanet);
  const handlePlanetChange = (planet) => {
    setSlectPlanet(planet);
  };

  return (
    <main id="main" className="grid-container grid-container--destination flow">
      <h1 className="numbered-title uppercase"><span aria-hidden="true" >01</span> Pick your destination</h1>
      <picture>
        <source srcSet={images.webp} type="image/webp"/>
        <img src={images.png} alt={name} />
      </picture>
      <NavTabs selectPlanet={selectPlanet} handlePlanetChange={handlePlanetChange} />
      <article className="destination-info">
      <h2 className="fs-800 uppercase ff-serif">{name}</h2>

        <p>{description}</p>
        
        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="fs-500 ff-serif uppercase">{distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="fs-500 ff-serif uppercase">{travel}</p>
          </div>
        </div>
      </article>
    </main>
  )
}

export default Destination