import styled from "styled-components";

function StartGame() {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 100vh;
  /* background-color: blue; */

  img {
    /* background-color: green; */
  }

  .content {
    /* background-color: red; */
    margin-top: -100px;
  }
  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
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

export default StartGame;
