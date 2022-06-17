import { Stack, Typography, Button, FormControl, InputLabel, Select, MenuList } from "@mui/material";
import logo from '../images/Rent A Hand_D1.png';

import { work_categories, work_type } from '../JobsPage/work-categories';
import useScreenResolution from "../hooks/useScreenResolution";

import styles from './main-page.module.css'

export default function MainPage() {
    const isModileDevice = useScreenResolution();

    return (
        <>
            <Stack
                sx={{
                    flexDirection: {
                        xs: 'column',
                        sm: 'row',
                    },
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                }}
                data-aos="zoom-in-up"
                data-aos-duration="1000"
            >

                {
                    isModileDevice ?
                        '' :
                        <img src={logo} alt='logo' loading='lazy' className={styles['image']} />
                }

                <Stack>
                    <Stack sx={{
                        marginTop: {
                            xs: 5,
                            sm: 10,
                        },
                        textAlign: 'center',
                    }}>
                        <Typography variant='h4'>
                            ПЛАТФОРМА ЗА РАБОТА
                        </Typography>
                        <Typography variant='h5'>
                            Сподели обява с няколко клика
                        </Typography>

                    </Stack>
                    <Stack sx={{
                        marginTop: 5,
                        textAlign: 'center',
                    }}>
                        <Button variant='contained'>Създай обява</Button>
                        <Typography variant='h5' sx={{ marginTop: 3 }}>
                            Потърси обяви
                        </Typography>
                        <FormControl
                            variant='standard'
                            sx={{ m: 1 }}
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
                            sx={{ m: 1 }}
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
                </Stack>
            </Stack>
        </>
    )
}