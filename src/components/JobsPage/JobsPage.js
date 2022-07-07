import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Divider, FormControl, InputLabel, MenuList, Pagination, Select, Stack, TextField, Box } from '@mui/material';
import BackToTopButton from '../CommonItems/BackToTopButton';
import styles from './job-style.module.css'
import Button from '@mui/material/Button';

import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import { jobs } from './test-jobs';
import { work_categories, work_type } from './work-categories';
import JobsCatalog from './JobsCatalog';


const totalJobsCount = jobs.length;
const totalJobsPerPage = 6;
const totalPaginationPages = Math.ceil(totalJobsCount / totalJobsPerPage);

export default function JobsPage() {

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
                    maxWidth: 400,
                    alignSelf: 'flex-start',
                    flexGrow: 1,
                    position: {
                        xs: 'static',
                        sm: 'sticky',
                    },
                    margin: {
                        xs: 'auto',
                        sm: 0,
                    },
                    marginTop: {
                        xs: 5,
                    },
                    marginBottom: {
                        xs: 5,
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
                            <FormControl
                                variant='standard'
                                sx={{
                                    margin: 1,
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
                                    margin: 1
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
                            <FormControl
                                variant='standard'
                                sx={{
                                    margin: 1
                                }}
                            >
                                <InputLabel>Населено място</InputLabel>
                                <Select>
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
                <Grid
                    container
                    sx={{
                        maxWidth: 1000
                    }}
                    gap={2}
                >
                    {
                        jobs.map(job => (<JobsCatalog job={job} />))
                    }
                </Grid>
            </Stack>

            <Stack spacing={2} sx={{ maxWidth: 1000, margin: 'auto', marginTop: 5, marginBottom: 5 }} >
                <Pagination size='large' count={totalPaginationPages} color='primary' className={styles['center-ul-items']} />
            </Stack>

            <BackToTopButton />
        </>
    )
}