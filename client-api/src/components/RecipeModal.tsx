"use client";
import * as React from "react";
import styled from "@emotion/styled";
import { useMyContext } from "@/context/context";
import Paper from "@mui/material/Paper";
import Loading from "./Loading";
import { Typography } from "@mui/material";

const CustomPaper = styled(Paper)`
  background-color: #16324d;
  z-index: 10;
  color: #fbf5de;
  border-radius: 2rem;
`;

const ModalArea = styled.div`
  width: 60vw;
  height: 60vh;

  padding: 5vw;
`;

const ModalAreaGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-column-gap: 2.5rem;
  padding: 1rem;
  white-space: pre-line;

  img {
    border-radius: 1rem;
  }
`;

const ModalAreaDrinksInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string;
  strIBA: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  strInstructionsZH_HANS: string | null;
  strInstructionsZH_HANT: string | null;
  strDrinkThumb: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strImageSource: string | null;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
};

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  cursor: pointer;
  border-radius: 0.2rem;
`;

const InfoArea = ({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) => {
  if (value == null) return <></>;
  return (
    <Typography>
      {" "}
      <strong>{label}</strong> : {value}{" "}
    </Typography>
  );
};

const RecipeModalInfo = ({ recipeData }: { recipeData: Cocktail }) => {
  const {
    idDrink,
    strDrink,
    strTags,
    strVideo,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
  } = recipeData;

  let recipeIngredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
  ];

  let recipeIngredientsMeasures = [
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
  ];

  const filteredIngredients = recipeIngredients.filter(
    (ingredient: string | null) => ingredient !== null,
  );
  const filteredMeasures = recipeIngredientsMeasures.filter(
    (measure: string | null) => measure !== null,
  );

  const instructions = strInstructions.split(".");

  const filteredInstructions = instructions.filter(
    (ingredient: string | null) => ingredient !== "",
  );
  return (
    <CustomPaper>
      <ModalArea>
        <Typography variant="h4">{strDrink}</Typography>
        <ModalAreaGrid>
          <ModalAreaDrinksInfo>
            <CardImage src={strDrinkThumb} />
            <div>
              {" "}
              <InfoArea label="Category" value={strCategory} />
              <InfoArea label="Glass" value={strGlass} />
              <InfoArea label="Alcoholic" value={strAlcoholic} />
            </div>
          </ModalAreaDrinksInfo>
          <div>
            <Typography variant="h5"> Ingredients</Typography>
            <ul>
              {filteredIngredients.map((ingredient, index) => {
                return (
                  <li>
                    {ingredient} {filteredMeasures[index]}
                  </li>
                );
              })}
            </ul>
            <></>

            <Typography variant="h5"> Instructions</Typography>
            <ul>
              {filteredInstructions.map((instruction: string) => {
                return <li>{instruction}</li>;
              })}
            </ul>
          </div>
        </ModalAreaGrid>
      </ModalArea>
    </CustomPaper>
  );
};

export default function RecipeModal() {
  const { recipeData, recipeError, recipeIsLoading } = useMyContext();

  if (recipeIsLoading) return <Loading />;
  if (recipeError) return <div>Error</div>;
  if (recipeData) {
    return (
      <div>
        <RecipeModalInfo recipeData={recipeData.drinks[0]} />
      </div>
    );
  }
}
