import React from "react";
import styled from "styled-components";

const App = () => {
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
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  /* background-color: red; */
`;

const TopContainer = styled.section`
  background-color: #008000;
  min-height: 60px;
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
