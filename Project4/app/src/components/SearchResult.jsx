import React from "react";
import styled from "styled-components";

const SearchResult = () => {
  return (
    <>
      <FoodCardsContainer>
        <FoodCard></FoodCard>
      </FoodCardsContainer>
    </>
  );
};

export default SearchResult;

const FoodCardsContainer = styled.section`
  height: calc(100vh - 149px);
  background-image: url("/bg.png");
  background-size: cover;
  margin-top: 20px;
  width: 100%;
`;

const FoodCard = styled.div``;
