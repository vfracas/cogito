import React, { useState } from "react";
import app from "./base";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Switch from "@material-ui/core/Switch";

const Home = () => {
    const [darkState, setDarkState] = useState(false);
    const palletType = darkState ? "dark" : "light";
    const mainPrimaryColor = darkState ? "#673ab7" : "#ff9100";
    const mainSecondaryColor = darkState ? "#482880" : "#b26a00";
    const darkTheme = createMuiTheme({
        palette: {
        type: palletType,
        primary: {
            main: mainPrimaryColor
        },
        secondary: {
            main: mainSecondaryColor
        }
        }
    });
    const handleThemeChange = () => {
        setDarkState(!darkState);
    };


    return (
        <ThemeProvider theme={darkTheme}>
            <Box checked={darkState}>
                <h1>Cogito</h1>
                <button onClick={() => app.auth().signOut()}>Sign out</button>
                <Switch checked={darkState} onChange={handleThemeChange} />
            </Box>
        </ThemeProvider>
    );
};

export default Home;