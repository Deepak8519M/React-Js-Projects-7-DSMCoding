import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch {
        setError("Unable to Fetch Data");
      }
    };

    fetchFoodData();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;

  // [
  //   {
  //     name: "Boilded Egg",
  //     price: 10,
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     image: "/images/egg.png",
  //     type: "breakfast",
  //   },
  // ];

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filter);
  };

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="search">
            <input
              onChange={(e) => searchFood(e)}
              type="text"
              placeholder="Search  Food..."
            />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button>All</Button>
          <Button>BreakFast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </FilterContainer>
        <SearchResult data={filteredData} />
      </Container>
    </>
  );
};

export default App;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  /* background-color: red; */
`;

const TopContainer = styled.section`
  width: 100%;
  /* background-color: #008000; */
  max-width: 1100px;
  margin: 0 auto;
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
  /* background-color: red; */
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 10px;
  max-width: 1100px;
  margin: 3px auto;
`;

export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
`;
