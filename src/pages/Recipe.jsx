import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { device } from "../breakpoints";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeButton, setActiveButton] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails(params.name);
  }, [params.name]);

  return (
    <DetailWrapper className="detail-wrapper">
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <div>
          <Button
            className={activeButton === "information" ? "active" : ""}
            onClick={() => setActiveButton("information")}
          >
            Information
          </Button>
          <Button
            className={activeButton === "instructions" ? "active" : ""}
            onClick={() => setActiveButton("instructions")}
          >
            Directions
          </Button>
          <Button
            className={activeButton === "ingredients" ? "active" : ""}
            onClick={() => setActiveButton("ingredients")}
          >
            Ingredients
          </Button>
        </div>

        {activeButton === "information" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <p dangerouslSetInnerHTML={{ __html: details.pricePerServing }}>
              Eatery Price : ${details.pricePerServing}
            </p>
          </div>
        )}
        {activeButton === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeButton === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1rem;
    text-align: justify;
  }

  p {
    margin-bottom: 2rem;
    font-weight: 500;
  }

  img {
    height: 400px;
    width: 500px;
    border-radius: 5%;
  }

  li {
    line-height: 2.5rem;
    font-size: 1rem;
    text-align: justify;
  }
  ul {
    margin-top: 2rem;
  }

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;

    img {
      height: 250px;
      width: 300px;
      border-radius: 5%;
      margin-bottom: 2rem;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  margin: 5px;
  font-weight: 600;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #15a17a;
  background: #fff;
  width: 8rem;
  height: 2rem;
  transform: scale(0.9);
  cursor: pointer;
  &.active {
    background: linear-gradient(35deg, #313121, #3cb290);
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`;

const Info = styled.div`
  margin-left: 5rem;
  display: flex;
  flex-direction: column;

  @media ${device.mobileL} {
    margin-left: 0;
  }
`;

export default Recipe;
