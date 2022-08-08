const APIKEY=process.env.REACT_APP_APIKEY;
const URL=process.env.REACT_APP_APIURL;

const fetchFilmsById=async(id)=>{
    const res=await fetch(`${URL}?apikey=${APIKEY}&i=${id}`)
    .then(response=>response.json());
    return res;
  }

  const fetchFilms=async(ricerca='The godfather')=>{
    
    if(ricerca<=3){
      return
    }
    const response=await fetch(`${URL}?apikey=${APIKEY}&s=${ricerca}&page=1-3`).then(res=>res.json());
    const {Search:filmList,totalResults:countFilms,Error:error}=response;
    console.log(response)
    
    return {filmList,countFilms,error:error??''};
  }

  export {fetchFilms,fetchFilmsById, APIKEY,URL};