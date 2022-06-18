import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Radio, Stack, Typography } from "@mui/material";

import freelancer_image from '../images/working_woman_standing.jpeg';
import project_task_image from '../images/constructions.jpeg';
// import project_task_image from '../images/working_desk.jpeg';
// import jobs_image from '../images/working_man.jpeg';

import jobs_image from '../images/business_woman.jpeg';

import { useState } from "react";

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export default function RegisterPage() {

    const register_categories = [
        {
            category_description: 'Обяви за постоянна работа / стаж',
            category_image: jobs_image,
            buttonText: 'Обяви за работа',
        },
        {
            category_description: 'Търся човек за проект / задача',
            category_image: project_task_image,
            buttonText: '',
        },
        {
            category_description: 'Искам да работя на свободна практика',
            category_image: freelancer_image,
            buttonText: 'Аз мога/ аз съм',
        },

    ];

    const [selectedCategoryValue, setSelectedCategoryValue] = useState(register_categories[0].category_description);

    const handleChange = (event) => {
        setSelectedCategoryValue(event.currentTarget.innerText);
    };

    const controlProps = (item) => ({
        checked: selectedCategoryValue === item,
        value: item,
        name: 'size-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

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
                    {
                        register_categories.map(x => {
                            return (
                                <Card
                                    key={x.category_description}
                                    category={x.category_description}
                                    onClick={handleChange}
                                    sx={{ flex: { lg: '0 0 350px' } }}
                                    data-aos="fade-up"
                                >
                                    <CardActionArea>
                                        <CardMedia component='img' height='180' image={x.category_image} alt='category image' />
                                        <CardContent sx={{
                                            display: 'flex',
                                            gap: 3,
                                            height: 'auto'
                                        }}>
                                            <Typography>{x.category_description}</Typography>
                                            <Radio {...controlProps(x.category_description)} size="small" />
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            )
                        })
                    }
                </Stack>
                <Button variant='contained' sx={{ maxWidth: 400 }}>Регистрация в "{selectedCategoryValue}"</Button>
            </Stack>
        </>
    )
}