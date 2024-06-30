
//Eu aleg sa fiu programatoare, IT-sta. Te rog Sinele meu inalt sa ma ajuti in implinirea acestei alegeri. Iti multumesc . Amin!

import {Route, Routes} from "react-router-dom"
import { SharedLayout } from "../components/SharedLayout.jsx"
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { MovieDetails } from "pages/MovieDetails.jsx";

export const App = () => 
{
 return(
        <Routes>
                <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home />}/>
                        <Route path="/movies" element={<Movies />}/>
                        <Route path="/movies/:movieId" element={<MovieDetails />}/>
                </Route>
        </Routes>
        );
};
