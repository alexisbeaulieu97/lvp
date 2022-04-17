import NavBar from './NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { darkTheme } from './themes';
import { Box } from '@mui/material';

const theme = createTheme(darkTheme);
console.log(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundColor: 'background.default'
        }}
      >
        <NavBar></NavBar>
      </Box>
    </ThemeProvider>
  );
}

export default App;
