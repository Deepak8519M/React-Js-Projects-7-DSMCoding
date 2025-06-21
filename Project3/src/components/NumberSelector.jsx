import { useState } from "react";
import styled from "styled-components";

function NumberSelector({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  console.log(selectedNumber);
  return (
    <NumberSelectorContainer hasError={!!error}>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            onClick={() => numberSelectorHandler(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  .error {
    /* margin-bottom: 10px; */
    color: red;
    // Only show blinking animation if there is an error
    animation: ${({ hasError }) =>
      hasError ? "blink 1s step-start 0s infinite" : "none"};

    // Only show full opacity if error exists
    opacity: ${({ hasError }) => (hasError ? 1 : 0)};

    // Makes fade-in/fade-out smooth
    transition: opacity 0.3s ease-in-out;
  }

  @keyframes blink {
    25% {
      color: red;
    }
    50% {
      opacity: 0;
    }
    75% {
      color: blue;
    }
    100% {
      opacity: 1;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 20px;
    font-weight: 500;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 24px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;
`;
