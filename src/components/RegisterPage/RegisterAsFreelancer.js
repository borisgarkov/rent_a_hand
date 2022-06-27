import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import AddressFormFreelancerRegister from './RegisterAsFreelancerComponents/AddressFormFreelancerRegister';
import { useState } from 'react';
import SkillsEducationFormFreelancerRegister from './RegisterAsFreelancerComponents/SkillsEducationFormFreelancerRegister';
import { Grid } from '@mui/material';

import freelancer_img from '../images/main_page/main_page_freelancer.jpeg';
import PolicyFreelancerRegister from './RegisterAsFreelancerComponents/PolicyFreelancerRegister';

const steps = [
    {
        label: 'Обща информация',
        content: <AddressFormFreelancerRegister />,
    },
    {
        label: 'Умения и образование',
        content: <SkillsEducationFormFreelancerRegister />,
    },
    {
        label: 'Политика за поверителност',
        content: <PolicyFreelancerRegister />,
    },
];

export default function RegisterAsFreelancer() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Grid container sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${freelancer_img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* <img src={freelancer_img} alt='freelancer img' style={{ objectPosition: 'center', objectFit: 'cover', height: '100vh' }} /> */}
            </Grid>

            <Grid item xs={12} sm={8} md={5} component={Paper} sx={{ padding: { xs: 2, md: 5 } }}>
                <Typography variant='h5' sx={{ margin: '10px', fontWeight: 'bold' }}>Регистрация в 'Таланти'</Typography>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                optional={
                                    index === 2 ? (
                                        <Typography variant="caption">Последна стъпка</Typography>
                                    ) : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Typography>{step.content}</Typography>
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Завърши регистрация' : 'Продължи'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Назад
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>Всички стъпки са попълнени - моля проверете имейл адреса си за потвърждение</Typography>
                    </Paper>
                )}
            </Grid>

        </Grid>
    );
}
