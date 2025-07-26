import React, { useState } from "react";
import styled from "styled-components";

const BASE_URL = "http://localhost:9000/";

const App = () => {
  const [data, setData] = useState(null);

  const fetchFoodData = async () => {
    const response = await fetch(BASE_URL);
    const json = await response.json();
    console.log(json);
  };

  fetchFoodData();

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="search">
            <input type="text" placeholder="Search  Food..." />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button>All</Button>
          <Button>BreakFast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </FilterContainer>

        <FoodCardsContainer>
          <FoodCard></FoodCard>
        </FoodCardsContainer>
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  /* background-color: red; */
`;

const TopContainer = styled.section`
  /* background-color: #008000; */
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 15px;
  flex-grow: 1;
`;

const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
`;

const FoodCardsContainer = styled.section`
  height: calc(100vh - 149px);
  background-image: url("/bg.png");
  background-size: cover;
  margin-top: 20px;
  width: 100%;
`;

const FoodCard = styled.div``;
