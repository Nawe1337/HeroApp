import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import queryString from "query-string"
import { getHEroByName } from "../helpers"
import "./search.css"

import { HeroCards } from "../components/HeroCards"
import { Footer } from "../components"
import {  NavBar2 } from "../../ui"

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation();


  const { q = "" } = queryString.parse(location.search)



  const heros = getHEroByName(q)

  const showSearch = (q.length === 0);

  const showError = (q.length != 0) && (heros.length === 0);

  const { serchText, onImputChage, onResetForm } = useForm({
    serchText: "",

  })




  const handleSubmit = (e) => {
    e.preventDefault();

    if (serchText.trim().length === 0) {

      navigate(`?q=${""}`)
    }

    navigate(`?q=${serchText}`)

    onResetForm();
  }




  return (
    <>
    <div className="colorNav">
    <NavBar2/>
    </div>
      <div className="container">
        <h1>Search</h1>
        <hr />

        <div className="row">


          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={handleSubmit} >
              <input
                type="text"
                placeholder="Search a hero"
                className="form-control "
                name="serchText"
                autoComplete="off"
                value={serchText}
                onChange={onImputChage}
              />
              <button className=" btn btn-outline-primary mt-2">
                Search</button>
            </form>
          </div>

          <div className="col-7">
            <h4> Result </h4>
            <hr />
            <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? "" : "none" }}>
              Search Hero
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? "" : "none" }}>
              Hero <b>{q}</b> is not found
            </div>

            {/* { q === "" ? ( <div className="alert alert-primary">
Search Hero
</div>) :(
heros.length === 0) && (

  <div className="alert alert-danger">
Hero <b>{ q }</b> is not found 
</div>
)
} */}



            {
              heros.map(hero => (

                <HeroCards key={hero.id} {...hero} />
              ))

            }

          </div>
        </div>

        <div
          className="DivF">
        </div>
        
      </div>
      <Footer />
    </>
  )
}
