import "../assets/css/galeria.css";

import { useContext} from "react";
import  Context from "../Context";




export default function Favoritos() {

  const {data, setData} =useContext(Context);

  const fotosFavoritas = data.filter(foto => foto.liked);
  
  return (
    <div className="favoritos">
    <h2 className="titulo">Mis favoritos</h2>
    <div className="galeria">
      {fotosFavoritas.map(foto => (
        <div className="foto" key={foto.id}>  
            <img src={foto.src.medium} />
            <div className="photographer">
              <p>{foto.photographer}</p>
            </div>
        </div>
      ))}
    </div>
    </div>
  );
}
