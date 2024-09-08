import {Link} from "react-router-dom"


const CharacterByHero = ({alter_ego,characters}) =>{
    return (alter_ego !== characters ) 
    ? ( <p className="pCard">{characters}</p>)
    : null   }

export const HeroCards = ({
    id,
superhero,
publisher,
alter_ego,
first_appearance,
characters,
}) => {

   const heroImgUrl = `/assets/heroes/${id}.jpg`  

  return (
   <div className="col">
    <div className="card">
        <div className="row mo-gutters">
            <div className="col-4">
            <img src={heroImgUrl} className="card-img animate__animated animate__fadeIn" alt={superhero}  />
            </div>
        <div className="col-8">
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
      <CharacterByHero alter_ego={alter_ego} characters={characters}/>
               <p className="card-text">
               <small className="text-muted">{first_appearance}</small>
               </p>
<Link  to={`/hero/${id}`}>
<button className="btn btn-outline-primary"> Mas </button>
</Link>

            </div>

        </div>


        </div>

    </div>

   </div>
  )
}
