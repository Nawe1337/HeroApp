import { heroes } from "../data/heroes"

export const getHeroByPublisher = (publisher) => {

const validPublisher = ['DC Comics', 'Marvel Comics'];

if(!validPublisher.includes(publisher)){
throw new Error("Error en el publisher ingresado");
}

return heroes.filter(heroe => heroe.publisher === publisher);

}
