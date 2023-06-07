import { Link } from "react-router-dom"


const ExploreBtn = () => {
  return (
    <div className='flex'>
        <div>
        <Link to={"/Destination"} className="large-button uppercase ff-serif text-dark bg-white">Explore</Link>
        </div>
    </div>
  )
}

export default ExploreBtn