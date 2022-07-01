import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { TextareaAutosize } from '@mui/material';
import BaseRegistrationForm from '../CommonRegistrationComponents/BaseRegistrationForm';

const registrationFields = [
    {
        type: 'text',
        textField: 'profession',
        id: 'profession',
        label: 'Професия',
        autoComplete: 'profession',
        required: true,
        displaySizeProps: {
            xs: 12,
        }
    },
    {
        type: 'number',
        textField: 'wage',
        id: 'wage',
        label: 'Заплащане на час',
        autoComplete: 'wage',
        required: false,
        displaySizeProps: {
            xs: 12,
        }
    },
    {
        type: 'text',
        textField: 'education',
        id: 'education',
        label: 'Образование',
        autoComplete: 'education',
        required: false,
        displaySizeProps: {
            xs: 12,
        }
    },
]


export default function SkillsEducationFormFreelancerRegister() {
    return (
        <Grid container spacing={3}>
            {
                registrationFields.map((x, index) => <BaseRegistrationForm key={index} field={x} />)
            }
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

    );
}