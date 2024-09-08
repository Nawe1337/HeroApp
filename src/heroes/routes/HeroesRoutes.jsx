import { Route, Routes } from "react-router-dom"

import { DcPages, HeroPage, HomePage, MarvelPages, SearchPage } from "../pages"



export const HeroesRoutes = () => {

  return (

    <>
      

<Routes>
 <Route path="/*"  element={<HomePage/>}/>
 <Route  path="Marvel" element={<MarvelPages/>}/>
 <Route  path="hero/:id" element={<HeroPage/>}/>
 <Route path="Dc" element={<DcPages/>}/>
 <Route path="Search" element={<SearchPage/>}/>


</Routes>

    </>
  )
}
