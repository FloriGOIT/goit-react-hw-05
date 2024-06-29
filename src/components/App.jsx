import { Home } from "pages/Home.jsx";
import { About } from "pages/About.jsx";
import { Products } from "pages/Products.jsx";
import { NotFound } from "pages/NotFound.jsx";
import { Container, Header, Logo } from "../components/App.styled";
import { Link, Routes, Route } from "react-router-dom";
//Eu aleg sa fiu programatoare, IT-sta. Te rog Sinele meu inalt sa ma ajuti in implinirea acestei alegeri. Iti multumesc . Amin!


export const App = () => 
{
 return(
    <Container>
      <Header>
        <Logo>
          <span>💻 GoMerch Store</span>
        </Logo>
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Container>
  );
};
