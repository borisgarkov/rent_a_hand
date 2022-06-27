import { Button, Stack, Typography } from "@mui/material";

import freelancer_image from '../images/working_woman_standing.jpeg';
import project_task_image from '../images/constructions.jpeg';
import jobs_image from '../images/business_woman.jpeg';

import { useState } from "react";

import RegisterCard from "./RegisterCard";
import { useNavigate } from "react-router-dom";

const register_categories = [
    {
        category_description: 'Обяви за постоянна работа / стаж',
        category_image: jobs_image,
    },
    {
        category_description: 'Търся човек за проект / задача',
        category_image: project_task_image,
    },
    {
        category_description: 'Искам да работя на свободна практика',
        category_image: freelancer_image,
    },

];

export default function RegisterPage() {

    const navigate = useNavigate();

    const [selectedCategoryValue, setSelectedCategoryValue] = useState(register_categories[0].category_description);

    const handleChange = (event) => {
        setSelectedCategoryValue(event.currentTarget.innerText);
    };

    return (
        <>
            <Stack sx={{
                maxWidth: '80%',
                margin: { xs: '50px auto', lg: '100px auto 0' },
                alignItems: 'center',
            }} spacing={5}>
                <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }} gap={1}>
                    <Typography variant='h4'>Присъедини се към</Typography>
                    <Typography variant='h4' sx={{ color: 'primary.main' }}>Rent A Hand</Typography>
                </Stack>

                <Stack sx={{
                    flexDirection: { xs: 'column', lg: 'row' },
                    gap: { xs: 2, lg: 10 },
                    justifyContent: 'center',
                }}>
                    <RegisterCard
                        selectedCategoryValue={selectedCategoryValue}
                        handleChange={handleChange}
                        category_image={register_categories[0].category_image}
                        category_description={register_categories[0].category_description}
                    />
                    <RegisterCard
                        selectedCategoryValue={selectedCategoryValue}
                        handleChange={handleChange}
                        category_image={register_categories[1].category_image}
                        category_description={register_categories[1].category_description}
                    />
                    <RegisterCard
                        selectedCategoryValue={selectedCategoryValue}
                        handleChange={handleChange}
                        category_image={register_categories[2].category_image}
                        category_description={register_categories[2].category_description}
                    />
                </Stack>
                <Button
                    variant='contained'
                    sx={{ maxWidth: 400 }}
                    onClick={() => navigate('/register-as-freelancer')}
                >
                    Регистрация в "{selectedCategoryValue}"
                </Button>
            </Stack>
        </>
    )
}