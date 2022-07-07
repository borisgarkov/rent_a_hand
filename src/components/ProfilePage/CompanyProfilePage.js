import { Avatar, Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import header_image from '../images/main_page/main_pageworking_desk.jpeg';
import logo from '../images/Rent A Hand_D1.png';

import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import DocumentScannerTwoToneIcon from '@mui/icons-material/DocumentScannerTwoTone';
import MapsHomeWorkTwoToneIcon from '@mui/icons-material/MapsHomeWorkTwoTone';
import useScreenResolution from "../hooks/useScreenResolution";

import style from './profile-page-style.module.css';

import { jobs } from "../JobsPage/test-jobs";
import JobsCatalog from "../JobsPage/JobsCatalog";
import { Fragment } from "react";


const companyInfo = `
    DXC Technology is a Fortune 500 global IT services leader.
    Our more than 130,000 people in 70-plus countries are entrusted by our
    customers to deliver what matters most. We use the power
    of technology to deliver mission-critical IT services across
    the Enterprise Technology Stack to drive business impact.
    DXC is an employer of choice with strong values, and fosters a
    culture of inclusion, belonging, and corporate citizenship. We are DXC.
`;

export default function CompanyProfilePage() {
    const isBelowMediumResolution = useScreenResolution('md');

    return (
        <>
            <Card
                sx={{
                    maxWidth: 1100,
                    margin: '10px auto'
                }}
            >
                <CardMedia
                    src={header_image}
                    alt='card img'
                    component='img'
                    sx={{
                        height: {
                            sx: 100,
                            md: 400
                        }
                    }}
                />
                {
                    isBelowMediumResolution ?
                        null :
                        <Avatar
                            className={style['image-style']}
                            src={logo}
                            sx={{
                                width: 120,
                                height: 120,
                                position: 'absolute',
                                top: '410px',
                                left: '260px',
                                backgroundColor: 'white',
                                border: '1px solid #e2e2e2'
                            }}
                            alt='logo'
                        />
                }
                <CardHeader
                    title='Rent A Hand'
                    titleTypographyProps={{ textAlign: 'center' }}
                />
                <Stack sx={{
                    flexDirection: {
                        sx: 'column',
                        md: 'row'
                    },
                    gap: 3
                }}>
                    <CardContent sx={{
                        flexBasis: {
                            md: '80%'
                        }
                    }}>
                        <Typography variant="h6">
                            За компанията
                        </Typography>
                        <Divider sx={{
                            margin: '0 auto 16px',
                            backgroundColor: 'primary.light',
                        }} />
                        <Typography sx={{ textAlign: 'justify' }}>{companyInfo}</Typography>
                    </CardContent>
                    <CardContent sx={{
                        flexBasis: {
                            md: '50%'
                        }
                    }}>
                        <Typography variant="h6" >
                            Рент Ъ Хенд
                        </Typography>
                        <Divider sx={{
                            margin: '0 auto 16px',
                            backgroundColor: 'primary.light',
                        }} />
                        <Box sx={{ marginBottom: 2 }}>
                            <Chip icon={<HomeTwoToneIcon />} label="Уебсайт" variant="outlined"
                                onClick={() => window.open('https://rent-a-hand-823c6.web.app/', '_blank')}
                            />
                        </Box>
                        <Box sx={{ marginBottom: 2 }}>
                            <Chip icon={<MapsHomeWorkTwoToneIcon />} label="Бизнес сектор: Строителство" variant="outlined" />
                        </Box>
                        <Box sx={{ marginBottom: 2 }}>
                            <Chip icon={<PeopleAltTwoToneIcon />} label="Брой служители: 100" variant="outlined" />
                        </Box>
                        <Chip icon={<DocumentScannerTwoToneIcon />} label="БУЛСТАТ: 58451654" variant="outlined" />

                    </CardContent>
                </Stack>
            </Card>
            <Stack sx={{
                maxWidth: 1100,
                margin: '10px auto',
            }}>
                <CardContent>
                    <Typography variant="h6">
                        Обяви за работа
                    </Typography>
                </CardContent>
                {
                    jobs.map(job => (
                        <CardActionArea key={job.id}>
                            <CardHeader
                                title={job.title}
                                subheader={`${job.datePosted} - ${job.city}`}
                                avatar={
                                    <Avatar
                                        className={style['image-style']}
                                        src={logo}
                                        sx={{
                                            backgroundColor: 'white',
                                            border: '1px solid #e2e2e2'
                                        }}
                                        alt='logo'
                                    />
                                }
                            />
                            <Divider />
                        </CardActionArea>
                    ))
                }


            </Stack>

        </>
    )
}