import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image'
import LogoMinimal from './../assets/logo_minimal.png'
import SearchFilters from '../components/SearchFilters';

export default function Recipes() {
    return (
      <main >
   <div>

   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Image
      src="/logo_minimal.png"
      width={150}
      height={50}
      alt="Picture of the author"
    />
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Box>
    <SearchFilters/>
    </Box>

   </div>
      </main>
    )
  }
  