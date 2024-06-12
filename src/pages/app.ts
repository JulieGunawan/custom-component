// import React from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import lightTheme from "../theme/lightTheme";

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }


// interface MyAppProps {
//   Component: React.ElementType;
//   pageProps: Record<string, any>;
// }

// const CustomStyles: React.FC<MyAppProps> = (props) => {
//   const theme = createTheme(lightTheme);
//   const { Component, pageProps } = props;

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// };

// export default CustomStyles;


import { Fab, Button, Container, Stack, Typography } from "@mui/material";
import {styled} from "@mui/system";
import AddIcon from "@mui/icons-material/Add";

const StyledButton = styled(Button) (() => ({
  backgroundColor: '#f6ccff',
}));

function App() {
  return (
    <Container>
      <Stack spacing={2} direction="row">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <AddIcon />
        </Fab>
        <StyledButton variant="contained" disableElevation>
          Add
}