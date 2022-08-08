import React,{useState} from "react";


const Card = ({dati,func})=>{
    
    
    // const select=()=>{
    //     setFilmSselected(dati);
    // }
    // console.log(dati)
    return(
        <div className="card m-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src={dati.Poster} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{dati.Title}</h5>
                <p className="card-text">
                info
                </p>            
            </div>
            <div className="card-footer">
                <button
                onClick={()=>{func(dati)}}
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    >
                    Info Film
                </button>
                
            </div>

        </div>

    )
}
export default Card;