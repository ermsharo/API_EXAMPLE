"use client";
import * as React from "react";
import { Backdrop, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useMyContext } from "../context/context";
import ResultCard from "./ResultCard";
import Loading from "./Loading";
import SearchResultsList from "./SearchResultList";
import RecipeModal from "./RecipeModal";

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

export default function SearchResults() {
  const { isLoading, error, data, open, handleClose, handleOpen } =
    useMyContext();

  const handleClickInsideModal = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  if (isLoading) return <Loading />;
  if (error) return <div>Error</div>;

  if (data) {
    return (
      <div>
        <Backdrop open={open} onClick={handleClose}>
          <div onClick={handleClickInsideModal}>
            <RecipeModal />
          </div>
        </Backdrop>
        <SearchResultsList data={data} />
      </div>
    );
  }
}
