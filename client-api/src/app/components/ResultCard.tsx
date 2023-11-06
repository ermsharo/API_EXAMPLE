'use client';
import * as React from 'react';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const CardImage = styled.img`
width: 100%;
height: auto;
	
`;


export default function ResultCard({ drink }: { drink: any }) {
	return (
		<Card>
			<CardImage
				src={drink.strDrinkThumb}
				title={drink.strDrink}
			/>
			<CardContent>
				<Typography gutterBottom variant="h6" component="div">
				{drink.strDrink}
				</Typography>
				{/* <Typography variant="body2" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
					continents except Antarctica
				</Typography> */}
			</CardContent>
			{/* <CardActions>
				<Button size="small">Ver receita</Button>
				<Button size="small">Learn More</Button>
			</CardActions> */}
		</Card>
	);
}
