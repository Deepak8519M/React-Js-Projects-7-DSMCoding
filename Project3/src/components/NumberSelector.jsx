import styled from "styled-components";

function NumberSelector() {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {arrayNumber.map((value, i) => (
        <Box key={i}>{value}</Box>
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
`;
