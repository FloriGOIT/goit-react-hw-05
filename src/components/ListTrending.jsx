import { Link } from "react-router-dom";


export const ListTrending = ({trendingList}) =>
{
  const trendingResults = trendingList.results;
  
  return (
           <ul>
            {trendingResults.map(el => <li key={el.id}>
                                            <Link to={`/movies/${el.id}`}>{el.title}</Link>
                                       </li>)}
           </ul>
         )
}