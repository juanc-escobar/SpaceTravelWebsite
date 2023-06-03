import { NavDots } from "../components/NavDots"
import DouglasImageW from "../assets/crew/image-douglas-hurley.webp"
import DouglasImage from "../assets/crew/image-douglas-hurley.png"

const Crew = () => {
  return (
    <main id="main" className="grid-container grid-container--crew flow">
        <h1 className="numbered-title uppercase"><span aria-hidden="true" >02</span>Meet your crew</h1>
        <NavDots />
        <article className="crew-details flow">
            <h2 className="fs-600 ff-serif uppercase">Commander</h2>
            <p className='fs-700 ff-serif uppercase'>Douglas Hurley</p>
            <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
            and former NASA astronaut. He launched into space for the third time as 
            commander of Crew Dragon Demo-2.</p>
        </article>
        <picture>
          <source srcSet={DouglasImageW} type="image/webp"/>
         <img src={DouglasImage} alt="Douglas Hurley" />
        </picture>
  </main>
  )
}

export default Crew