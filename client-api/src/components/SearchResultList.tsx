"use client";
import * as React from "react";
import { Backdrop, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useMyContext } from "../context/context";
import ResultCard from "./ResultCard";
import Loading from "./Loading";

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  padding: 1rem;
  margin-top: 1rem;
`;

const ResultsBox = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export default function SearchResultsList({ data }: { data: any }) {
  const { drinks } = data;
  return (
    <ResultsBox>
      <Typography variant="h5" component="div">
        Result for drinks with [word]
      </Typography>
      <ResultsGrid>
        {drinks.map((drink: any) => {
          return <ResultCard drink={drink} />;
        })}
      </ResultsGrid>
    </ResultsBox>
  );
}
