"use client"
import * as React from 'react';
import SearchFilters from '../components/SearchFilters';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import { MyContextProvider } from '../context/context';

export default function Recipes() {
	return (
		<main>
			<MyContextProvider>
				<Header />
				<SearchFilters />
				<SearchResults />
			</MyContextProvider>
		</main>
	);
}
