import './GaleriaFotos.css';
export const GaleriaFotos = () => {
    const scrollHaciaAbajo = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      };
    
      return (
        <div className="galeria-container">
          {imagenes.map((imagen, indice) => (
            <div key={indice} className="columna-imagen" onClick={scrollHaciaAbajo}>
              <img src={imagen} alt={`Imagen ${indice + 1}`} />
            </div>
          ))}
        </div>
      );
}
