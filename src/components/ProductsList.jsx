import { Container, CardWrapper, ProductName } from "./ProductList.styled";
import { Link } from "react-router-dom";

export const ProductsList = ({products}) => 
{
  console.log(products)
  return (
          <Container>
            {products.map((product) => (
              <CardWrapper key={product.id}>
                <Link to={`${product.id}`}>
                  <img src={product.pic} alt="" width="100px" height="100px"/>
                  <ProductName>{product.name}</ProductName>
                </Link>
              </CardWrapper>
            ))}
          </Container>
         )
}