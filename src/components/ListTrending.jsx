import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const ListTrending = () =>
{

  const [resultFetchT, setResultFetchT] = useState([])

  useEffect(() => 
  {
    const urlTrending = "https://api.themoviedb.org/3/trending/movie/day?api_key=46829fa1f677f290fd75025af8b47e21";
    fetch(urlTrending).then((res)=>{if(!res.ok){alert("There seems to be an issue with the API TrendingList source")}
                                    else{return res.json()}})
                      .then((data)=>{const resultTrending = data.results;
                                     setResultFetchT(resultTrending);})
                      .catch((error)=>{return alert("The FetchT could not be made")})
  },[])
  
  return (
           <ul>
            {resultFetchT.map(el => <li key={el.id}>
                                            <Link to={`/movies/${el.id}`}>{el.title}</Link>
                                       </li>)}
           </ul>
         )
}