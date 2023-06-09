import { useState } from "react"
import NavNumbers from "../components/NavNumbers"
import data from "../data.json"




  const Technology = () => {

    const [selectTech, setSlectTech] = useState("Launch vehicle");
    const { name, images, description } = data.technology.find(technology=> technology.name === selectTech);
    const handleTech = (technology) => {
      setSlectTech(technology);
      console.log(technology);
    }

    return (
      <main id="main" className="grid-container grid-container--technology flow">
          <h1 className="numbered-title uppercase"><span aria-hidden="true" >03</span>Space launch 101</h1>
          <picture>
            <source srcSet={images.portrait} media="(min-width: 45em)" className="full-width" />
          <img src={images.landscape} alt={name} className="full-width" />
          </picture>
          <NavNumbers selectTech={selectTech} handleTech={handleTech} />
          <article className="technology-details flow">
              <div className="tech-title flow">
                <p className="subtitle fs-400  --ff-sans-cond uppercase text-light">The terminology...</p>
                <h2 className="fs-700 ff-serif uppercase">{name}</h2>
              </div>
              <p className="fs-400 --ff-sans-normal text-light">{description}</p>
          </article>
    </main>
    )
  }

export default Technology