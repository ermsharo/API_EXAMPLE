'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { useMyContext } from '@/context/context';
import { Paper } from '@mui/material';

const CardImage = styled.img`
	width: 100%;
	height: auto;
	cursor: pointer;
	border-radius: 0.2rem;
`;

const CustomTitle = styled(Typography)`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: center;
  font-size: 0.75rem;
  text-overflow: ellipsis;
  font-weight: bolder;
  cursor: pointer;
  color: #fbf5de;
  padding: 1rem;
`;

const CustomPaper = styled(Paper)`
  background-color: #16324d;
`;

export default function ResultCard({ drink }: { drink: any }) {
	const { handleOpen, setActualId, actualId } = useMyContext();
	const openCard = () => {
		handleOpen();
		setActualId(drink.idDrink);
	};

	return (
		<CustomPaper>
			<CardImage
				src={drink.strDrinkThumb}
				title={drink.strDrink}
				alt={drink.strDrink}
				onClick={() => {
					openCard();
				}}
			/>

			<CustomTitle
				onClick={() => {
					openCard();
				}}
				variant="h4"
			>
				{drink.strDrink}
			</CustomTitle>
		</CustomPaper>
	);
}
