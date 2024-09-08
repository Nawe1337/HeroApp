import { NavBar } from "../../ui"
import { Footer } from "../components"
// import GaleriaFotos from "../components/GaleriaFotos"
import { Main } from "../components/Main"
import PlanesComponent from "../components/PlanesComponent"
import "./homePage.css"

export const HomePage = () => {
  return (
 
<>
<NavBar/>
<div>


      <main className="main">
        <div className="heroImage">
          <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1724855693/ai-generated-8590746_1_mrqzbu.png" className="heroImage" alt="" />
          <h1 className="heroText animate__animated animate__slideInLeft">Welcome Comics Word Fanpage </h1>
          <h2 className="heroText2 animate__animated animate__slideInLeft">Dive into the universe of the most iconic superheroes from Marvel and DC. Here, you'll find epic stories, fun facts, and everything you need to know about your favorite heroes. From the brave Avengers to the legendary Justice League, this is the place where the action never stops. Join our community and stay up to date with everything happening in the world of comics!</h2>
       
        </div>

        {/* <div className="mainContent">
          <div className="cardDrid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item}  className="card">
                <img 
                  src={`/placeholder.svg?height=200&width=400&text=Comic ${item}`} 
                  alt={`Comic ${item}`} 
                  className="cardImage"
                />
                <div className="cardContent">
                  <h2 className="cardTitle">Comic Title {item}</h2>
                  <p  className="cardDescription">
                    A brief description of the comic goes here. This is a placeholder text.
                  </p>
                  <button className="button">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </main>
      <PlanesComponent/>
       {/* <GaleriaFotos /> */}
       
      <Main/>
    </div>
    
    
   <Footer/>
  </>
  )
}
