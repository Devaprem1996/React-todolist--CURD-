import React from "react";
import './style.css'
import { createTheme, responsiveFontSizes,ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Header from './components/Header'
import Footer from './components/Footer'
import { Input } from "./components/Input";


let theme = createTheme();
theme = responsiveFontSizes(theme);



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
      
        <Header />
        <Input />
        <Footer />
    
      </Container>
    </ThemeProvider>
  );
}

export default App;
