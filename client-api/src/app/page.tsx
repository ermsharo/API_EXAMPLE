'use client';
import Header from '@/components/Header';
import { isLogged } from '@/services/localDataManager';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

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

	if (isLogged()) {
		location.assign('http://localhost:3000/recipes');
	}

	return (
		<main>
			<Header />
	
		</main>
	);
}
