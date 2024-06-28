import { products } from "useful/fakeAPI.jsx"

export const Products = () =>
{
  return(
         <ul>
            {products.map( (el) => <li key={el.id}>{el.name}</li>)}
         </ul>
        )  
}