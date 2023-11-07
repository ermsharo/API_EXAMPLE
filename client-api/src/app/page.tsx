"use client";
import Header from "@/components/Header";
import styled from "@emotion/styled";
import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  const BoardDisplay = styled.div`
    width: 80%;
    margin: auto;
  `;
  const SearchLogoDisplay = styled.div`
    display: flex;
    justify-content: center;
    img {
      width: 20%;
      height: auto;
      margin: auto;
    }
  `;

  const CustomButton = styled(Button)`
    background-color: #0f2336; /* Your custom styles here */
    color: #f5be62;
    &:hover {
      background-color: #16324d;
    }
  `;

  const FormDisplay = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 30%;
    margin: auto;
  `;

  return (
    <main>
      <Header />
      <BoardDisplay>
        <SearchLogoDisplay>
          <img src="/logo.png" alt="Cocktail recipe logo" />
        </SearchLogoDisplay>
        <FormDisplay>
          <TextField id="filled-basic" label="User" variant="filled" />
          <TextField id="filled-basic" label="Password" variant="filled" />

          <CustomButton>Login</CustomButton>
          <Link href="/singup">
            {" "}
            <Typography>Create account</Typography>
          </Link>
        </FormDisplay>
      </BoardDisplay>
    </main>
  );
}
