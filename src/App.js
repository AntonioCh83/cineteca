import './App.css';
import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ListaFilms from './components/listaFilm';
import Header from './components/header';
import Modal from './components/modal';
import Lottie from 'react-lottie';
import animation from'./assets/animations/34590-movie-theatre.json';
import { fetchFilms,fetchFilmsById } from './utils/fetch';


function App() {
  const [films,setFilms]=useState([]);
  const [count,setCount]=useState(0);
  const [error,SetError]=useState('');
  const[errorId,setErrorId]=useState('');
  const[filmSelected,setFilmSelected]=useState(null);

  const select=async(film)=>{
    setFilmSelected(film);
    const newFilmSelected=await fetchFilmsById(film.imdbID);
    if(newFilmSelected.Error){
      setFilmSelected(null);
      setErrorId(newFilmSelected.Error)
    }else{
      setFilmSelected(newFilmSelected);
    }

  }
  

  const apiCall=async(search)=>{
    const dati=await fetchFilms(search);
    SetError(dati.error);
    if(!dati.error){
      setFilms(dati.filmList);
      setCount(dati.countFilms);
    }else{
      setCount(0);
      setFilms([])
    }
    
  }
  
  useEffect(()=>{
    apiCall('Godfather');
  },[])
  
  return (
    <>
    <Header forSearch={apiCall}/>
    <div className="App container-fluid">
      <header className="App-header">
       <h1>Films totali-{count}</h1>
       <Lottie
       options={
        {
          loop:true,
          autoplay:true,
          animationData: animation,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }
      }
      width={200}
      height={200}
       />
      </header>
     {
       !error?<ListaFilms func={select} films={films}/>:<h5>{error}</h5>

     } 
      
    </div>
    <Modal error={errorId} datiFilm={filmSelected}/>
    </>
  );
}

export default App;
