import { products } from "../useful/fakeAPI.js"
import {ProductsList} from "../components/ProductsList.jsx"

export const Products = () =>
{ 
  return(
         <div>
            <ProductsList products={products}/>
         </div>
        )  
}