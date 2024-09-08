import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";
import 'animate.css';
import { Footer } from "../components";
import { NavBar2 } from "../../ui";

export const HeroPage = () => {

  const { id, ...rest } = useParams();
  const navigate = useNavigate()
  const hero = useMemo(() => getHeroById(id), [id])

  const onNavigateBack = () => {
    navigate(-1)
  }



  if (!hero) {

    return <Navigate to="/Marvel" />
  }


  return (

    <>
    <NavBar2/>
      <div className="container">
        <div className="row my-5 animate__animated animate__backInLeft">

          <div className="col-4">
            <img
              src={`/assets/heroes/${id}.jpg`}
              alt={hero.superhero}
              className="img-thumbnail " />
          </div>
          <div className="col-8">
            <h3>
              {hero.superhero}
            </h3>
            <ul className="list-group list-group-flush">
              <li>
                <b>Alter ego: </b>
                {hero.alter_ego}
              </li>

              <li>
                <b>Publisher: </b>
                {hero.publisher}
              </li>

              <li>
                <b>First appearance: </b>
                {hero.first_appearance}
              </li>

            </ul>

            <h5 className="mt-5">
              Character
            </h5>
            <p>{hero.characters}</p>

            <button className="btn btn-outline-primary"
              onClick={() => onNavigateBack()}
            > go back to  </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
