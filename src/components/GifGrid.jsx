import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import '../estilos/GifGrid.css';



 export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);
    
   return (
     <>
     <div className="principal-container">
        <h3 className="titulo-container">{category}</h3>
          <div className="card-container">

          {images.map(( image ) => (
            <GifItem 
            key={image.id}
            { ...image }
            />
          ))}

          </div>
      </div>
     </>
   )
 }
 