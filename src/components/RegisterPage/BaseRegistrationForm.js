import { Button, Grid, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function BaseRegistrationForm({
    backgroundPicture,
    registrationTitle,
    steps,
}) {

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
                    backgroundImage: `url(${backgroundPicture})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <Grid item xs={12} sm={8} md={5} component={Paper} sx={{ padding: { xs: 2, md: 5 } }}>
                <Typography variant='h5' sx={{ margin: '10px', fontWeight: 'bold' }}>{registrationTitle}</Typography>
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
                                {step.content}
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
        </Grid >
    );
};