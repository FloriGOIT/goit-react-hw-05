import { trending } from "useful/trending"
import { ListTrending } from "components/ListTrending"

export const Home  = () =>
{
    return(<div>
             <h2>Trending today</h2>
             <ListTrending trendingList={trending} />
           </div>)
}