import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
import Navigation from "./components/NavigationBar/Navigation";
import JobsPage from './components/JobsPage/JobsPage';
import JobDescriptionPage from "./components/JobsPage/JobDescriptionPage";
import PricingList from './components/PricingPlansPage/PricingList';
import MainPage from "./components/MainPage/MainPage";
import RegisterPageCategories from "./components/RegisterPage/RegisterPageCategories";

import { Routes, Route } from 'react-router-dom';
import LoginPage from "./components/LoginPage/LoginPage";
import BackToTopButton from "./components/CommonItems/BackToTopButton";
import InvalidURL from "./components/CommonItems/InvalidURL";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import RegisterAsFreelancerForm from "./components/RegisterPage/RegisterAsFreelancerComponents/RegisterAsFreelancerForm";
import RegisterAsFirmForm from "./components/RegisterPage/RegisterAsFirmComponents/RegisterAsFirmForm";
import ProjectRegistrationCategories from "./components/RegisterPage/RegisterForProjectComponents/ProjectRegistrationCategories";
import RegisterProjectAsPersonForm from "./components/RegisterPage/RegisterForProjectComponents/RegisterProjectAsPersonForm";
import RegisterProjectAsFirm from "./components/RegisterPage/RegisterForProjectComponents/RegisterProjectAsFirm";
import UserProfilePage from "./components/ProfilePage/UserProfilePage";
import CompanyProfilePage from "./components/ProfilePage/CompanyProfilePage";

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

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navigation />

            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/pricing' element={<PricingList />} />

                <Route path='/jobs' element={<JobsPage />} />
                <Route path='/job-description' element={<JobDescriptionPage />} />

                <Route path='/profile' element={<UserProfilePage />} />
                <Route path='/company-page' element={<CompanyProfilePage />} />

                <Route path='/login' element={<LoginPage />} />

                <Route path='/register' element={<RegisterPageCategories />} />
                <Route path='/register-as-freelancer' element={<RegisterAsFreelancerForm />} />
                <Route path='/register-as-firm' element={<RegisterAsFirmForm />} />
                <Route path='/register-project' element={<ProjectRegistrationCategories />} />
                <Route path='/register-person-project' element={<RegisterProjectAsPersonForm />} />
                <Route path='/register-firm-project' element={<RegisterProjectAsFirm />} />

                <Route path='*' element={<InvalidURL />} />
            </Routes>

            <BackToTopButton />
        </ThemeProvider>
    );
}

export default App;
