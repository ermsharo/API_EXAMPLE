"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { AppBar, Button, Toolbar } from "@mui/material";
import {isLogged} from "@/services/localDataManager";

export default function VerifyRedirect() {

    if(isLogged()){
        
    }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Image
            src="/logo_minimal.png"
            width={150}
            height={50}
            alt="Picture of the author"
          />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
