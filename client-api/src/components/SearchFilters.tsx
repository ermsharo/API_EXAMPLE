'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid/Grid';
import Image from 'next/image';
import logo from './../assets/logo.png';
import { Autocomplete, Button } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';

const SearchButton = styled(Button)`
  background-color: #0f2336; /* Your custom styles here */
  color: #f5be62;
  &:hover {
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
	img {
		width: 20%;
		height: auto;
		margin: auto;
	}
`;

let mockedSearchData = [
	'Light rum',
	'Applejack',
	'Gin',
	'Dark rum',
	'Sweet Vermouth',
	'Strawberry schnapps',
	'Scotch',
	'Apricot brandy',
	'Triple sec',
	'Southern Comfort',
	'Orange bitters',
	'Brandy',
	'Lemon vodka',
	'Blended whiskey',
	'Dry Vermouth',
	'Amaretto',
	'Tea',
	'Champagne',
	'Coffee liqueur',
	'Bourbon',
	'Tequila',
	'Vodka',
	'Añejo rum',
	'Bitters',
	'Sugar',
	'Kahlua',
	'demerara Sugar',
	'Dubonnet Rouge',
	'Watermelon',
	'Lime juice',
	'Irish whiskey',
	'Apple brandy',
	'Carbonated water',
	'Cherry brandy',
	'Creme de Cacao',
	'Grenadine',
	'Port',
	'Coffee brandy',
	'Red wine',
	'Rum',
	'Grapefruit juice',
	'Ricard',
	'Sherry',
	'Cognac',
	'Sloe gin',
	'Apple juice',
	'Pineapple juice',
	'Lemon juice',
	'Sugar syrup',
	'Milk',
	'Strawberries',
	'Chocolate syrup',
	'Yoghurt',
	'Mango',
	'Ginger',
	'Lime',
	'Cantaloupe',
	'Berries',
	'Grapes',
	'Kiwi',
	'Tomato juice',
	'Cocoa powder',
	'Chocolate',
	'Heavy cream',
	'Galliano',
	'Peach Vodka',
	'Ouzo',
	'Coffee',
	'Spiced rum',
	'Water',
	'Espresso',
	'Angelica root',
	'Orange',
	'Cranberries',
	'Johnnie Walker',
	'Apple cider',
	'Everclear',
	'Cranberry juice',
	'Egg yolk',
	'Egg',
	'Grape juice',
	'Peach nectar',
	'Lemon',
	'Firewater',
	'Lemonade',
	'Lager',
	'Whiskey',
	'Absolut Citron',
	'Pisco',
	'Irish cream',
	'Ale',
	'Chocolate liqueur',
	'Midori melon liqueur',
	'Sambuca',
	'Cider',
	'Sprite',
	'7-Up',
	'Blackberry brandy',
	'Peppermint schnapps',
	'Creme de Cassis'
];

export default function SearchFilters() {

  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);
  

  const handleIngredientChange = (event: React.ChangeEvent<{}>, newValue: string | null) => {
    setSelectedIngredient(newValue);
   
  };

	return (
		<main>
			<SearchDisplay>
				<SearchLogoDisplay>
					<img src="/logo.png" alt="Cocktail recipe logo" />
				</SearchLogoDisplay>

				<SearchBarDisplay>
        <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={mockedSearchData}
      value={selectedIngredient} // Bind the selected value to the state
      onChange={handleIngredientChange}// Update the state when an option is selected
      renderInput={(params) => <TextField {...params} label="Select a drink ingredient" />}
    />
					{/* <TextField id="outlined-basic" label="Sua busca aqui" variant="outlined" /> */}
					<SearchButton
						onClick={() => {
							console.log('Running' ,selectedIngredient);
						}}
					>
						{' '}
						Pesquisar
					</SearchButton>
				</SearchBarDisplay>
			</SearchDisplay>
		</main>
	);
}
