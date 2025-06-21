import { useState } from "react";
import styled from "styled-components";

function NumberSelector() {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  const [selectedNumber, setSelectedNumber] = useState(1);

  console.log(selectedNumber);
  return (
    <div>
      {arrayNumber.map((value, i) => (
        <Box
          isSelected={value === selectedNumber}
          onClick={() => setSelectedNumber(value)}
          key={i}
        >
          {value}
        </Box>
      ))}
    </div>
  );
}

export default NumberSelector;

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
