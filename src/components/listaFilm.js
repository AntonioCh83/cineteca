import React from "react";
import Card from './card';

const ListaFilms=({films,func})=>{
    return(
        <div className="row d-flex justify-content-center">
          {
            films.map((film)=><Card key={film.imdbID} dati={film} func={func}/>)

          }
        </div>
       
    )
}

export default ListaFilms;