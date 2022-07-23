import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Divider, FormControl, InputLabel, MenuList, Pagination, Select, Stack, TextField, Box } from '@mui/material';
import styles from './job-style.module.css'
import Button from '@mui/material/Button';

import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import { jobs } from './test-jobs';
import { work_categories, work_type } from './work-categories';
import JobsCatalog from './JobsCatalog';
import { useMemo, useState } from 'react';


const totalJobsCount = jobs.length;
const totalJobsPerPage = 10;
const totalPaginationPages = Math.ceil(totalJobsCount / totalJobsPerPage);

export default function JobsPage() {

    const [currentPage, setCurrentPage] = useState(1);
    const [currentSelectedCategoty, setCurrentSelectedCategoty] = useState('ИТ');
    const [currentCity, setCurrentCity] = useState('');

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
                        xs: '90%',
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
                            <Button variant='contained' sx={{ marginTop: 5 }} fullWidth>Търси</Button>
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