'use client';
import * as React from 'react';
import SearchFilters from '../../components/SearchFilters';
import Header from '../../components/Header';
import SearchResults from '../../components/SearchResults';
import { MyContextProvider } from '../../context/context';
import { ThemeProvider, createTheme } from '@mui/material';
import { theme } from '../../theme/theme';

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
