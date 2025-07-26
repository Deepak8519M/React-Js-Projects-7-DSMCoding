import React from "react";
import styled from "styled-components";

const SearchResult = ({ data }) => {
  return (
    <>
      <FoodCardsContainer>
        <FoodCards>
          {data?.map((food) => (
            <FoodCard key={food.name}>{food.text}</FoodCard>
          ))}
        </FoodCards>
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

const FoodCards = styled.div``;
const FoodCard = styled.div``;
