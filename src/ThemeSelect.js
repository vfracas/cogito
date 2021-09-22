import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

export default function ThemeSelect() {
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
      <div> Sample Text </div>
      <Switch checked={darkState} onChange={handleThemeChange} />
    </ThemeProvider>
  );
}