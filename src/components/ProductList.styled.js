import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 102px);
  gap: 80px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  backround-color : antiquewhite;
  > a {
    text-decoration: none;
  }
`;

export const ProductName = styled.h4`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
