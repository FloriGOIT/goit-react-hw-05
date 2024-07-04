import { useParams } from "react-router-dom";
//import  {movieDetails} from "../useful/movieDetails.js";
import { useEffect, useState } from "react";


export const urlmovieDetails = {
    "adult": false,
    "backdrop_path": "/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg",
    "belongs_to_collection": {
      "id": 8945,
      "name": "Mad Max Collection",
      "poster_path": "/9U9QmbCDIBhqDShuIxOiS9gjKYz.jpg",
      "backdrop_path": "/7ECkRbU1OvDCDLxUv5YBBDxfGF3.jpg"
    }}
console.log("urlmovieDetails:", urlmovieDetails.backdrop_path)

export const SelectedMovieDescription = () =>
{   const [resultFetchD, setResultFetchD] = useState([])
    const imagePoster = `https://image.tmdb.org/t/p/w342${resultFetchD.backdrop_path}`
    console.log("imagePoster:", imagePoster)
    const { movieId } = useParams();
    console.log("movieId:", movieId)

    useEffect(()=>
    {
     const urlMovieDetails = `${imagePoster}`
     
     fetch(urlMovieDetails).then((res)=>{if(!res.ok){alert("There seems to be an issue with the API MovieDetail source")}
                                         else{return res.json()}})
                           .then((data)=>{setResultFetchD(data)})
                           .catch((error)=>{return alert("The FetchT could not be made")})
    },[imagePoster])
    
    return(<div>
        <div>
            <img src = "https://image.tmdb.org/t/p/w342/9U9QmbCDIBhqDShuIxOiS9gjKYz.jpg" alt="poster" />
            <div>
                <h3>{resultFetchD.title} ({resultFetchD.release_date})</h3>
                <p>User Score: {resultFetchD.vote_average}</p>
                <h5>Overview</h5>
                <p>{resultFetchD.overview}</p>
                <h5>Genres</h5>
                <p>genres...name</p>
            </div>
        </div>
        <div>
            <h4>Additional information</h4>
            <p>Cast</p>
            <p>Review</p>
        </div>
   </div>)
        }

