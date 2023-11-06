'use client';
import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { useMyContext } from '@/context/context';

const CardImage = styled.img`
	width: 100%;
	height: auto;
	cursor: pointer;
`;

const CustomTitle = styled(Typography)`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: center;
  font-size: 0.75rem;
  text-overflow: ellipsis;
  font-weight: bolder;
  color: #16324d;
  cursor: pointer;
`;

export default function ResultCard({ drink }: { drink: any }) {
	const { handleOpen, setActualId, actualId } = useMyContext();
	const openCard = () => {
		console.log('Drink', drink);
		console.log('Card image clicked');
		handleOpen();
		setActualId(drink.idDrink);
		console.log('actual id', actualId);
	};

	return (
		<Card>
			<CardImage
				src={drink.strDrinkThumb}
				title={drink.strDrink}
				alt={drink.strDrink}
				onClick={() => {
					openCard();
				}}
			/>
			<CardContent>
				<CustomTitle
					onClick={() => {
						openCard();
					}}
					variant="h4"
				>
					{drink.strDrink}
				</CustomTitle>
			</CardContent>
		</Card>
	);
}
