"use client";
import Header from "@/components/Header";
import { isLogged } from "@/services/localDataManager";
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme/theme';
export default function Home() {
  if (isLogged()) {
    location.assign("http://localhost:3000/recipes");
  } else {
    location.assign("http://localhost:3000/login");
  }



  return (
    <main>
 
 <ThemeProvider theme={theme}>
  <Header />

</ThemeProvider>
    </main>
  );
}
