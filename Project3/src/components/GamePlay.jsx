import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not Selected any Number");
      return;
    }

    setError("");
    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - randomNumber);
    }

    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
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
