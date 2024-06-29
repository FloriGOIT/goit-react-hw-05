import { Outlet } from "react-router-dom";
import { Main, Header, Links } from "./SharedLayout.styled";

export const SharedLayout = () =>
{
  return(
        <Main>
            <Header>
                <nav>
                    <Links to="" end>Home</Links>
                    <Links to="/movies">Movies</Links>
                </nav>
            </Header>
            <Outlet/>
        </Main>
         )
}