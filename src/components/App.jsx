import { Home } from "pages/Home.jsx";
import { About } from "pages/About.jsx";
import { Products } from "pages/Products.jsx";
import { NotFound } from "pages/NotFound.jsx";
import { Links, Container, Header, Logo } from "../components/App.styled";
import {  Routes, Route } from "react-router-dom";


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
          <Links to="/" >Home</Links>
          <Links to="/about">About</Links>
          <Links to="/products">Products</Links>
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
