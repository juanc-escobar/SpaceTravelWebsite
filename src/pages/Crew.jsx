import { NavDots } from "../components/NavDots"
import { useState } from "react"
import data from "../data.json"

const Crew = () => {

  const [selectCrew, setSlectCrew] = useState("Douglas Hurley");
  const { role, name, bio, images } = data.crew.find(crew => crew.name === selectCrew);
  const handleCrew = (crew) => {
    setSlectCrew(crew);
    console.log(crew);
  };

  return (
    <main id="main" className="grid-container grid-container--crew flow">
        <h1 className="numbered-title uppercase"><span aria-hidden="true" >02</span>Meet your crew</h1>
        <NavDots selectCrew={selectCrew} handleCrew={handleCrew} />
        <article className="crew-details flow">
            <h2 className="fs-600 ff-serif uppercase">{role}</h2>
            <p className='fs-700 ff-serif uppercase'>{name}</p>
            <p>{bio}</p>
        </article>
        <picture>
          <source srcSet={images.webp} type="image/webp"/>
         <img src={images.png} alt="Douglas Hurley" />
        </picture>
  </main>
  )
}

export default Crew