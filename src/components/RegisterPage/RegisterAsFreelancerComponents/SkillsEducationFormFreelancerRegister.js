import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';
import { TextareaAutosize } from '@mui/material';


export default function SkillsEducationFormFreelancerRegister() {
    return (
        <Box sx={{ margin: { md: '20px auto' } }}>
            <Typography variant="h6" sx={{ marginBottom: 5 }}>
                Умения и образование
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="profession"
                        name="profession"
                        label="Професия"
                        fullWidth
                        autoComplete="profession"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="wage"
                        name="wage"
                        label="Заплащане на час"
                        fullWidth
                        autoComplete="wage"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="education"
                        name="education"
                        label="Образование"
                        fullWidth
                        autoComplete="education"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography>Добави кратко резюме за себе си</Typography>
                    <TextareaAutosize
                        minRows={3}
                        maxRows={5}
                        style={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography>Добави твоите умения</Typography>
                    <TextareaAutosize
                        minRows={3}
                        maxRows={5}
                        style={{ width: '100%' }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}