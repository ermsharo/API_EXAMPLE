"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid/Grid";
import Image from "next/image";
import logo from "./../assets/logo.png";
import { AppBar, Button, Toolbar } from "@mui/material";
import styled from "@emotion/styled";

export default function LogoArea() {
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
