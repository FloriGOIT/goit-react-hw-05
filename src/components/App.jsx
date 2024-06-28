import { Home } from "pages/Home.jsx";
import { About } from "pages/About.jsx";
import { Products } from "pages/Products.jsx";
import { NotFound } from "pages/NotFound.jsx";
import { Container, Header, Logo } from "./App.styled.js";



export const App = () => 
{
 return(
    <Container>
      <Header>
        <Logo>
          <span>💻 GoMerch Store</span>
        </Logo>
        <nav>
          
        </nav>
      </Header>
    </Container>
  );
};
