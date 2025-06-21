import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  border-radius: 3px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all ease-in 0.4s;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: all ease-in 0.3s;
  }
`;
