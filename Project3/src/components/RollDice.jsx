import styled from "styled-components";

import { useState } from "react";

function RollDice({ currentDice, roleDice }) {
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
    /* background-color: red; */
  }

  /* .dice img {
    width: 290px;
  } */
  p {
    font-size: 24px;
  }
`;
