import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";

function GamePlay() {
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSelector />
      </div>
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  max-width: 1180px;
  margin: 0 auto;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
    background-color: rebeccapurple;
  }
`;
