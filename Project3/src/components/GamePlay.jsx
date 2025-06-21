import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";

function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [currentDice, setCurrentDice] = useState(1);
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} setCurrentDice={setCurrentDice} />
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 20px;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
    /* background-color: rebeccapurple; */
    max-width: 1180px;
    margin: 0 auto;
  }
`;
