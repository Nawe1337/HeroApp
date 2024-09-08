import { heroes } from "../data/heroes"
import { ImgBanner } from "./ImgBanner"

export const Main = () => {


  return (
    <>
    <ImgBanner/>
   
    <div className="container">
    <div className="divFotos">
    <h2 className="h2Fotos animate__animated animate__fadeIn">
    Our super heroes
    </h2>
    <hr />
    <div>
    
    <div className="divImg">
        {heroes.map((resp) => {
          return(
            <img key={resp.id} src={`/assets/heroes/${resp.id}.jpg`}  className="gridImage animate__animated animate__fadeIn" />
          )
        })}
    </div>
    </div>
    </div>
    </div>
    
    </>
  )
}
