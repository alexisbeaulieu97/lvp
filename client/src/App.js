import './App.css';
import NavBar from './NavBar';
import { Box } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      paper: '#000000',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      main: "#009688",
      dark: '#009688',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavBar></NavBar>
      </Box>
    </ThemeProvider>
  );
}

export default App;
