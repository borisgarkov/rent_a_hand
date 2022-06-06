import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
import Navigation from "./components/NavigationBar/Navigation";
import JobsPage from './components/JobsPage/JobsPage';
import JobDescriptionPage from "./components/JobsPage/JobDescriptionPage";
import PricingList from './components/PricingPlansPage/PricingList';
import ProfilePage from "./components/ProfilePage/ProfilePage";


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


function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navigation />
            <ProfilePage />
            {/* <JobDescriptionPage /> */}
            {/* <JobsPage /> */}
            {/* <PricingList /> */}

        </ThemeProvider>
    );
}

export default App;
