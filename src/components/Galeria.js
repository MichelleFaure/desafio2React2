import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useContext, useEffect } from "react";
import  Context from "../Context";


export default function Galeria() {
  const { data, setData } = useContext(Context);

  const agregarFavoritos = (id) => {
      data.map(elemento =>{
        if(id == elemento.id){
          elemento.liked = !elemento.liked;
        }
      })
    setData([...data])
  }

  return (
    <div className="galeria">
      {data.map(foto => (
        <div className="foto" key={foto.id} onClick={() => agregarFavoritos(foto.id)}>  
            <img src={foto.src.medium} />
            <Heart  filled={foto.liked}/>
            <div className="photographer">
              <p>{foto.photographer}</p>
            </div>
        </div>
      ))}
    </div>
  );
}
