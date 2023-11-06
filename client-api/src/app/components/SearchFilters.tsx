'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid/Grid';
import Image from 'next/image';
import logo from './../assets/logo.png';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

const SearchButton = styled(Button)`
  background-color: #0f2336; /* Your custom styles here */
  color: #f5be62;
  &:hover{
    background-color: #16324d; 
  }

`;

const SearchBarDisplay = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: 80% 20%;
    grid-column-gap: 0.5rem;
	width: 80%;
`;

const SearchDisplay = styled.div`
	width: 80%;
    margin: auto;
`;

const SearchLogoDisplay = styled.div`
display: flex;
justify-content: center;
 img{
width: 25%;
height: auto;
margin: auto;
 }
`;

export default function SearchFilters() {
	return (
		<main>
			<SearchDisplay>
                <SearchLogoDisplay>
                <img src='/logo.png' alt="Cocktail recipe logo" />

                </SearchLogoDisplay>
			

				<SearchBarDisplay>
					<TextField id="outlined-basic" label="Sua busca aqui" variant="outlined" />
					<SearchButton> Pesquisar</SearchButton>
				</SearchBarDisplay>
			</SearchDisplay>
		</main>
	);
}
