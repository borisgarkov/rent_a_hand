import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Divider, FormControl, InputLabel, MenuList, Pagination, Select, Stack, TextField, Box, Avatar, Typography } from '@mui/material';
import styles from './job-style.module.css'
import Button from '@mui/material/Button';

import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import { jobs } from './test-jobs';
import { work_categories, work_type } from './work-categories';
import JobsCatalog from './JobsCatalog';
import { useMemo, useState } from 'react';

import job_offers_img from '../images/main_page/main_page_job_offers.jpg';
import freelancer_img from '../images/main_page/main_page_freelancer.jpeg';
import projects_img from '../images/main_page/project_photo.jpeg';

const totalJobsCount = jobs.length;
const totalJobsPerPage = 10;
const totalPaginationPages = Math.ceil(totalJobsCount / totalJobsPerPage);

export default function JobsPage() {

    const allAvatarImages = [
        job_offers_img,
        projects_img,
        freelancer_img,
    ];

    let imageMap = {};
    work_type.forEach((key, indx) => imageMap[key] = allAvatarImages[indx]);

    const [currentPage, setCurrentPage] = useState(1);
    const [currentSelectedCategoty, setCurrentSelectedCategoty] = useState('ИТ');
    const [currentCity, setCurrentCity] = useState('');

    const [workType, setWorkType] = useState(work_type[0]);
    const [avatarImage, setAvatarImage] = useState(imageMap[work_type[0]]);
    const [titleWorkType, setTitleWorkType] = useState(work_type[0]);

    const handleWorkTypeChange = (event) => {
        setWorkType(event.target.value);
    }

    const currentPageJobs = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * totalJobsPerPage;
        const lastPageIndex = firstPageIndex + totalJobsPerPage;
        return jobs.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const handlePageChange = (event) => {
        setCurrentPage(parseInt(event.target.innerText));
    }

    const handleCategoryChange = (event) => {
        setCurrentSelectedCategoty(event.target.value);
    }

    const searchJobs = () => {
        setAvatarImage(imageMap[workType]);
        setTitleWorkType(workType);
    }

    return (
        <>
            <Stack sx={{
                flexDirection: {
                    xs: 'column',
                    md: 'row',
                },
                justifyContent: 'center',
                columnGap: 5,
                marginTop: {
                    xs: 0,
                    md: 10,
                },
            }}>
                <Stack sx={{
                    width: {
                        xs: '100%',
                    },
                    maxWidth: {
                        sm: '400px',
                    },
                    alignSelf: 'flex-start',
                    flexGrow: 1,
                    position: {
                        xs: 'static',
                        sm: 'sticky',
                    },
                    margin: {
                        xs: '15px auto',
                        sm: 0,
                    },
                    top: 80
                }}>
                    <Stack sx={{ flexDirection: 'row', gap: 2, alignItems: 'center', margin: '16px 0', justifyContent: 'center' }}>
                        <Avatar src={avatarImage} sx={{ width: 80, height: 80 }} />
                        <Typography variant='body1' sx={{ maxWidth: 200, flex: '1 0 200px' }}>{titleWorkType}</Typography>
                    </Stack>
                    <Card>
                        <CardHeader subheader='Филтър' />
                        <Divider />
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <FormControl variant='standard' sx={{ margin: 1 }}>
                                <InputLabel>Категория</InputLabel>
                                <Select value={currentSelectedCategoty} onChange={handleCategoryChange}>
                                    {
                                        work_categories.map(work => (
                                            <MenuList key={work} value={work}>{work}</MenuList>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <FormControl variant='standard' sx={{ margin: 1 }}>
                                <InputLabel>Тип работа</InputLabel>
                                <Select value={workType} onChange={handleWorkTypeChange}>
                                    {
                                        work_type.map(work => (
                                            <MenuList key={work} value={work}>{work}</MenuList>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <FormControl variant='standard' sx={{ margin: 1 }}>
                                <InputLabel>Населено място</InputLabel>
                                <Select value={currentCity}>
                                </Select>
                            </FormControl>
                        </CardContent>
                        <Divider />
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <ManageSearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField fullWidth id="input-with-sx" label="Търси по ключова дума" variant="standard" />
                            </Box>
                            <Button variant='contained' onClick={searchJobs} sx={{ marginTop: 5 }} fullWidth>Търси</Button>
                        </CardContent>
                    </Card>
                </Stack>
                <Grid container sx={{ maxWidth: 1000 }} gap={2}>
                    {
                        currentPageJobs.map(job => (<JobsCatalog key={job.id} job={job} />))
                    }
                </Grid>
            </Stack>

            <Stack spacing={2} sx={{ maxWidth: 1000, margin: 'auto', marginTop: 5, marginBottom: 5 }} >
                <Pagination
                    size='large'
                    count={totalPaginationPages}
                    color='primary'
                    page={currentPage}
                    onChange={handlePageChange}
                    className={styles['center-ul-items']}
                />
            </Stack>
        </>
    )
}