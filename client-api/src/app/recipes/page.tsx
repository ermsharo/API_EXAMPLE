"use client"
import * as React from 'react';
import SearchFilters from '../../components/SearchFilters';
import Header from '../../components/Header';
import SearchResults from '../../components/SearchResults';
import { MyContextProvider } from '../../context/context';
import { ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
	typography: {
	  fontFamily: 'Josefin Sans, sans-serif', // Replace 'Your Custom Font' with your desired font
	},
	palette: {
		primary: {
		  main: '#0f2336', // Custom primary color
		},
		secondary: {
		  main: '#eeb45a', // Custom secondary color
		},
	  },
	
  });


export default function Recipes() {
	return (
		<main>
			<MyContextProvider>
			<ThemeProvider theme={theme}>
				<Header />
				<SearchFilters />
				<SearchResults />
				</ThemeProvider>
			</MyContextProvider>
		</main>
	);
}
