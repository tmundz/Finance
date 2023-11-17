import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./themes";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <div className='app'>
        <h1>hi</h1>
        <ThemeProvider theme={theme}>
            <CssBaseline />
        </ThemeProvider>
    </div>
  )
}

export default App
