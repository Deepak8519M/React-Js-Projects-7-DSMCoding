import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";

function GamePlay() {
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSelector />
      </div>
      <RollDice />
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 20px;

  max-width: 1180px;
  margin: 0 auto;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
    background-color: rebeccapurple;
  }
`;
