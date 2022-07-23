import { Stack, Typography, Button, Paper, Tabs, Tab, Box } from "@mui/material";

import LinearProgress from '@mui/material/LinearProgress';

import job_offers_img from '../images/main_page/main_page_job_offers.jpg';
// import projects_img from '../images/main_page/main_page_projects.jpeg';
import freelancer_img from '../images/main_page/main_page_freelancer.jpeg';
import projects_img from '../images/main_page/project_photo.jpeg';

import WorkIcon from '@mui/icons-material/Work';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StarBorderIcon from '@mui/icons-material/StarBorder';


import { useNavigate } from 'react-router-dom';

import styles from './main-page.module.css'
import { useEffect, useState } from "react";
import CustomerFeedback from "./CustomerFeedback";
import SearchSection from "./SearchSection";
import ExploreTheMarketPlace from "./ExploreTheMarketPlace";

const tabs_css_style = {
    padding: {
        xs: '0 10px',
        md: '0 50px',
    },
};

const JobsTabInfo = () => {
    const navigate = useNavigate();

    return (
        <>
            <Stack sx={{
                gap: 2,
                justifyContent: 'center',
            }}>
                <WorkIcon fontSize='large' sx={{ alignSelf: 'center', color: 'primary.main' }} />
                <Typography variant='h5' sx={{ ...tabs_css_style }}>
                    Предлагате работа?
                </Typography>
                <Typography variant='body1' sx={{ ...tabs_css_style }}>
                    Споделете вашата обява за работа / стаж и намерете подходящия кандидат.
                </Typography>
                <Typography variant='body1' sx={{ marginBottom: 2.5, ...tabs_css_style }}>
                    Научете повече за предимствата на нашата платформа
                </Typography>
            </Stack>


            <Stack sx={{
                flexDirection: { md: 'row' },
                gap: 1,
                justifyContent: 'space-evenly',
                paddingBottom: 3
            }}>
                <Button variant='contained' onClick={() => navigate('/pricing')}>Корпоративни Планове</Button>
                <Button variant='outlined' onClick={() => navigate('/register-as-firm')}>Качи обява за работа</Button>
            </Stack>
        </>
    )
};

const ProjectsTabInfo = () => {
    const navigate = useNavigate();

    const buttonWidth = '38%';

    return (
        <>
            <Stack sx={{
                gap: 2,
                justifyContent: 'center',
            }}>
                <AssignmentIcon fontSize='large' sx={{ alignSelf: 'center', color: 'primary.main' }} />
                <Typography variant='h5' sx={{ ...tabs_css_style }}>
                    Имаш проект / задача, за който не се изисква дългосрочен трудов договор?
                </Typography>
                <Typography variant='body1' sx={{ marginBottom: 2.5, ...tabs_css_style }}>
                    Намери подходящ талант в нашата платформа, за да свърши нужната работа.
                </Typography>
            </Stack>
            <Stack sx={{
                flexDirection: { md: 'row' },
                gap: 1,
                justifyContent: 'space-evenly',
                paddingBottom: 3
            }}>
                <Button variant='contained' onClick={() => navigate('/register-project')} sx={{ width: { md: buttonWidth } }}>Регистрация</Button>
                <Button variant='outlined' onClick={() => navigate('/jobs')} sx={{ width: { md: buttonWidth } }}>Проекти</Button>
            </Stack>
        </>
    )
};

const FreelancerTabInfo = () => {
    const navigate = useNavigate();

    return (
        <>
            <Stack sx={{
                gap: 2,
                justifyContent: 'center',
            }}>
                <StarBorderIcon fontSize='large' sx={{ alignSelf: 'center', color: 'primary.main' }} />
                <Typography variant='h5' sx={{ ...tabs_css_style }}>
                    Искаш да работиш за себе си?
                </Typography>
                <Typography variant='body1' sx={{ ...tabs_css_style }}>
                    Работи в удобно за теб време, където и когато поискаш.
                </Typography>
                <Typography variant='body1' sx={{ marginBottom: 2.5, ...tabs_css_style }}>
                    Намери подходящия проект за твоите умения,
                    като споделиш опита и знанията си в нашата платформа.
                </Typography>
            </Stack>
            <Stack sx={{
                width: { md: '85%' },
                margin: '0 auto',
                paddingBottom: 3
            }}>
                <Button variant='contained' onClick={() => navigate('/register-as-freelancer')}>Регистрация</Button>
            </Stack>
        </>
    )
};

export default function MainPage() {

    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 1500);
    // }, []);

    const [tab, setTab] = useState(0);
    const [backgroundImg, setBackgroundImg] = useState(job_offers_img);

    const tab_images = {
        0: job_offers_img,
        1: projects_img,
        2: freelancer_img,
    };

    const tabsChangeHandler = (event, newTab) => {
        setTab(newTab);
        setBackgroundImg(tab_images[newTab]);
    };

    const tabs_info = [
        {
            label: 'Обяви за работа',
            icon: <WorkIcon />,
            value: 0
        },
        {
            label: 'Проекти / Задачи',
            icon: <AssignmentIcon />,
            value: 1
        },
        {
            label: 'Таланти',
            icon: <StarBorderIcon />,
            value: 2
        },
    ];

    const tabs_data = {
        0: <JobsTabInfo />,
        1: <ProjectsTabInfo />,
        2: <FreelancerTabInfo />,
    };

    return (
        <>
            {
                // loading ?
                //     <Box sx={{ width: '100%', height: '100vh' }}>
                //         <LinearProgress />
                //     </Box> :
                <>
                    <Box sx={{ position: 'relative' }}>

                        <Stack>
                            <img className={styles['image']} loading='lazy' src={backgroundImg} alt='job offers img' />
                        </Stack>
                        <Paper sx={{
                            width: { xs: '100%', lg: 576 },
                            position: { xs: 'static', lg: 'absolute' },
                            top: { md: '25%' },
                            left: { md: '8%' },
                        }}>
                            <Tabs
                                value={tab}
                                centered
                                variant='fullWidth'
                                sx={{
                                    marginBottom: 5
                                }}
                                onChange={tabsChangeHandler}
                            >
                                {
                                    tabs_info.map(x => (
                                        <Tab
                                            key={x.label}
                                            wrapped
                                            label={x.label}
                                            icon={x.icon}
                                            iconPosition='top'
                                            value={x.value}
                                            sx={tabs_css_style}
                                        />
                                    ))
                                }
                            </Tabs>
                            {
                                tabs_data[tab]
                            }
                        </Paper>

                    </Box>
                    <ExploreTheMarketPlace />
                    <CustomerFeedback />
                </>
            }
        </>
    )
}