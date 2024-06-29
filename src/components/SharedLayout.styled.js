import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Main = styled.div
`
margin:10px;
border-bottom: 1px solid blue;
`
export const Header = styled.header
`
background-color: #ffff0066;
padding: 20px;
box-shadow: 0px 1px 2px 2px hwb(60 52% 21%)
`

export const Links = styled(NavLink)
`
color: black;
text-decoration-line: none;
gap: 20px;
font-size: 20px;
font-weight: 400;
padding-left: 20px;
&.active {color:red; font-size: 22px; font-weight: 500}
`