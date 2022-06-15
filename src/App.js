import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
import Navigation from "./components/NavigationBar/Navigation";
import JobsPage from './components/JobsPage/JobsPage';
import JobDescriptionPage from "./components/JobsPage/JobDescriptionPage";
import PricingList from './components/PricingPlansPage/PricingList';
import MainPage from "./components/MainPage/MainPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";

import { Routes, Route } from 'react-router-dom';

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

            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/pricing' element={<PricingList />} />

                <Route path='/jobs' element={<JobsPage />} />
                <Route path='/job-description' element={<JobDescriptionPage />} />

                <Route path='/profile' element={<ProfilePage />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
