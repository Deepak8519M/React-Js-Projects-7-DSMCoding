import React from "react";
import styled from "styled-components";
import { BASE_URL, Button } from "../App";

const SearchResult = ({ data }) => {
  return (
    <>
      <FoodCardsContainer>
        <FoodCards>
          {data?.map(({ name, image, text, price }) => (
            <FoodCard key={name}>
              <div className="food_image">
                <img src={BASE_URL + image} alt="" />
              </div>

              <div className="food-info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>${price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </FoodCardsContainer>
    </>
  );
};

export default SearchResult;

const FoodCardsContainer = styled.section`
  height: calc(100vh - 149px);
  background-image: url("/bg.png");
  background-size: cover;
  margin-top: 20px;
  width: 100%;
  flex-grow: 1;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 24px;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;
const FoodCard = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;

  width: 300px;
  height: fit-content;
  border: 0.66px solid;
  border-image-source: radial-gradient(
        80.38% 222.5% at -13.75% -12.36%,
        #98f9ff 0%,
        rgba(255, 255, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        80.69% 208.78% at 108.28% 112.58%,
        #eabfff 0%,
        rgba(135, 38, 183, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

  background-color: rgba(255, 255, 255, 0.1); /* semi-transparent */
  backdrop-filter: blur(20px); /* blur the background behind */
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 160px;
  }

  .food-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
  }
`;
