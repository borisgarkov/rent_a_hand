import { Stack, Typography, Box, Button, FormControl, InputLabel, Select, MenuList } from "@mui/material";
import mainImage from '../images/working_man.jpeg';

export default function MainPage() {

    const work_categories = [
        'ИТ',
        'Ремонтни дейности',
        'Монтажни дейности',
        'Занаяти',
        'Поддръжка на автомобили',
        'Здраве и фитнес',
        'Транспорт и логистика',
        'Продажби, ПР и маркетинг',
        'Финанси/Счетоводни услуги',
        'Друго',
    ];

    const work_type = [
        'Обява за работа',
        'Предлагам услуга',
        'Търся работа',
    ]

    return (
        <>
            <Box sx={{
                backgroundImage: `url(${mainImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center',
                height: '50vh',
                maxWidth: '1140px',
                margin: 'auto',
            }}>
                <Typography variant='h4'>
                    ПЛАТФОРМА ЗА РАБОТА
                </Typography>
                <Typography variant='h5'>
                    Сподели обява с няколко клика
                </Typography>
                <Button variant='contained'>Създай обява</Button>
                <Typography variant='h5'>
                    Потърси обяви
                </Typography>

            </Box>
            <Stack sx={{
                maxWidth: 500,
                margin: 'auto',
            }}>
                <FormControl
                    variant='standard'
                    sx={{
                        m: 1,
                    }}
                >
                    <InputLabel>Категория</InputLabel>
                    <Select>
                        {
                            work_categories.map(work => (
                                <MenuList key={work} value={work}>{work}</MenuList>
                            ))
                        }
                    </Select>
                </FormControl>
                <FormControl
                    variant='standard'
                    sx={{
                        m: 1
                    }}
                >
                    <InputLabel>Тип работа</InputLabel>
                    <Select>
                        {
                            work_type.map(work => (
                                <MenuList key={work} value={work}>{work}</MenuList>
                            ))
                        }
                    </Select>
                </FormControl>
                <Button variant='contained'>Търси</Button>
            </Stack>
        </>
    )
}