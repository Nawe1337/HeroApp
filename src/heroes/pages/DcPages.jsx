import {  NavBar2 } from "../../ui"
import { Footer } from "../components"
import { HeroList } from "../components/HeroList"

export const DcPages = () => {
  return (

    <>
    <NavBar2/>
     <div className="container">
<h1>
DC Comics
   </h1>
<hr />
<HeroList publisher='DC Comics'/>
</div>
<Footer/>
</>

  )
}
