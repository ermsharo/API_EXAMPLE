import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";


const UserDisplay = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: auto;
  padding: 2rem;
`;


export default function Loading() {
  return (
    <UserDisplay sx={{ display: "flex" }}>
      <CircularProgress />
    </UserDisplay>
  );
}
