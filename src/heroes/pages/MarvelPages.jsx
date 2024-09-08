import {  NavBar2 } from "../../ui"
import { Footer } from "../components"
import { HeroList } from "../components/HeroList"

export const MarvelPages = () => {
  return (
    <>
    <NavBar2/>
    <div className="container">
    <h1>
   Marvel
       </h1>
    <hr />
    <HeroList publisher='Marvel Comics'/>
    </div>
    <Footer/>
    </>
  )
}
