import { createTheme } from "@mui/material/styles";
import { red } from '@mui/material/colors';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: pallet?.primary || '#556cd6',
        },
        secondary: {
            main: pallet?.secondary || '#19857b',
        },
        error: {
            main: red.A400,
        },
});

export default lightTheme;