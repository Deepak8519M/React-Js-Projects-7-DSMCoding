import React from "react";
import styled from "styled-components";

function Rules() {
  return (
    <RulesContainer>
      <h2>How to Play Dice Game</h2>
      <div className="text">
        <p>1. Select any number.</p>
        <p>2. Click on the dice image.</p>
        <p>
          3. If the selected number matches the dice number, you will earn
          points equal to the dice value.
        </p>
        <p>
          4. If the numbers don't match, the dice value will be subtracted from
          your score.
        </p>
      </div>
    </RulesContainer>
  );
}

export default Rules;

const RulesContainer = styled.div`
  background-color: #f6e1e1;
  padding: 20px;
  max-width: 550px;
  position: absolute;
  bottom: 280px;
  right: 60px;
  border-radius: 10px;

  h2 {
    font-size: 24px;
    font-weight: 500;
  }
  .text {
    margin-top: 24px;
  }
  .text p {
    font-size: 18px;
  }
`;
