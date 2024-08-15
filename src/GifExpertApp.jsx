import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import './estilos/GifExpertApp.css';


export const GifExpertApp = () => {

    const[categories, setCategories] = useState(['Hunter x Hunter']);

    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory) ) return;

        setCategories([...categories, newCategory]);
    }

  return (
    <>    
      <div className="contenedor-app"> 
        <h1>Gif App</h1>

        <AddCategory onNewCategory = { event => onAddCategory(event) }/>
        
        {categories.map( (category)=>(

            <GifGrid key={category} 
            category={category}
            />

        )
        )}
        
        </div>   
    </>
  )
}
