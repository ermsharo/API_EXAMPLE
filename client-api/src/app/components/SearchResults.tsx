'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid/Grid';
import Image from 'next/image';
import logo from './../assets/logo.png';
import { Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useMyContext } from '../context/context';
import ResultCard from './ResultCard';


const ResultsGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-column-gap: 1.5rem;
grid-row-gap: 1.5rem;
padding: 1rem;
margin-top: 1rem;

	
`;


const ResultsBox = styled.div`

width: 70%;
margin: auto;
margin-top: 2rem;
margin-bottom: 2rem;
	
`;


//Criar a nossa tipagem para data
const SearchResultsList = ({data} : {data : any}) =>{
	
	const {drinks} = data; 
	console.log("Data here", data)
	return(<ResultsBox>
       <Typography  variant="h5" component="div">
          Resultados para [palavra]: 
        </Typography>
<ResultsGrid>
       {drinks.map((drink: any) => {
         return <ResultCard drink = {drink}/>;
       })}
     </ResultsGrid>

	</ResultsBox>)
}


export default function SearchResults() {
    const { isLoading, error, data} = useMyContext();


    if (isLoading) return (<div>loading</div>)
    if (error) return (<div>Error</div>)

	if(data){
		return (
			<div>
		<SearchResultsList data = {data}/>
			</div>
		);
	}
	
}
