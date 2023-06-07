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
      <main id="main" className="grid-container grid-container--crew flow">
          <h1 className="numbered-title uppercase"><span aria-hidden="true" >03</span>Space launch 101</h1>
          <picture>
          <img src={images.landscape} alt={name} />
          </picture>
          <NavNumbers selectTech={selectTech} handleTech={handleTech} />
          <article className="crew-details flow">
              <p className="subtitle">The terminology...</p>
              <h2 className="fs-600 ff-serif uppercase">{name}</h2>
              <p>{description}</p>
          </article>
    </main>
    )
  }

export default Technology