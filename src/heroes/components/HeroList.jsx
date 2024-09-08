import { useMemo } from "react"
import { getHeroByPublisher } from "../helpers/getHeroByPublisher"
import { HeroCards } from "./HeroCards"
import "./HeroList.css"

export const HeroList = ({publisher}) => {

const heros = useMemo(()=> getHeroByPublisher(publisher),[publisher])

  return (

<div className="row rows-cols-1 row-cols-md-3  g-3">
{
    heros.map( aux => (
<HeroCards 
key={aux.id}
{...aux}
/>     
    ))
}
</div>

  )
}
