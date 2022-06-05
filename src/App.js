import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
import Navigation from "./components/NavigationBar/Navigation";
import JobsPage from './components/JobsPage/JobsPage';


const theme = createTheme({
    typography: {
        fontFamily: ['Comfortaa', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
    },
    palette: {
        background: {
            default: '#f5f5f5',
        }
    }
})

// import styles from './App.module.css'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navigation />
            <JobsPage />

        </ThemeProvider>
    );
}

export default App;
