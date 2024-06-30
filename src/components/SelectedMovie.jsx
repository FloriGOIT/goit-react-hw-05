import { useParams } from "react-router-dom";
import  {movieDetails} from "../useful/movieDetails.js"


export const SelectedMovieDescription = () =>
{
    const { movieId } = useParams();
    console.log(movieId)
    
    return(<div>
                <div>
                    <img src="https://image.tmdb.org/t/p/w342/9U9QmbCDIBhqDShuIxOiS9gjKYz.jpg" alt="original_title"/>
                    <details>
                        <h3>{movieDetails.title} ({movieDetails.release_date})</h3>
                        <p>User Score: {movieDetails.vote_average}</p>
                        <h5>Overview</h5>
                        <p>{movieDetails.overview}</p>
                        <h5>Genres</h5>
                        <p>genres...name</p>
                    </details>
                </div>
                <div>
                    <h4>Additional information</h4>
                    <p>Cast</p>
                    <p>Review</p>
                </div>
           </div>)
        }

