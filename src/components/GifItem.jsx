import '../estilos/GifItem.css';

export const GifItem = ({title, url}) => {

  return (
    
    <div className="container-image">
        <img src={url} alt={title} />
        <p className="titulo-image">{title}</p>
    </div>
  )
}
