import styled from "styled-components";

import { useState } from "react";

function RollDice({ currentDice, setCurrentDice }) {
  const generateRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomNumber);
  };
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
}

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: red; */
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
