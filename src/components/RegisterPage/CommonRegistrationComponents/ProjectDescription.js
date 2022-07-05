import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextareaAutosize, TextField, Typography } from "@mui/material";
import { useState } from "react";
import BaseRegistrationForm from "./BaseRegistrationForm";

const registrationFields = [
    {
        type: 'text',
        textField: 'title',
        id: 'title',
        label: 'Заглавие на проета',
        autoComplete: 'title',
        required: true,
        displaySizeProps: {
            xs: 12,
        }
    },
    {
        type: 'text',
        textField: 'category',
        id: 'category',
        label: 'Категория',
        autoComplete: 'category',
        required: true,
        displaySizeProps: {
            xs: 12,
        }
    },
    {
        type: 'text',
        textField: 'time',
        id: 'time',
        label: 'Продължителност на проекта',
        autoComplete: 'time',
        required: true,
        displaySizeProps: {
            xs: 12,
        }
    },
]

export default function ProjectDescription() {
    const [payment, setPayment] = useState('На час');

    const handleChange = (event) => {
        setPayment(event.target.value);
    };

    return (
        <>
            <Grid container spacing={3}>
                {
                    registrationFields.map((x, index) => <BaseRegistrationForm key={index} field={x} />)
                }
            </Grid>
            <FormControl sx={{ marginTop: 4 }}>
                <FormLabel id="demo-controlled-radio-buttons-group">Заплащане</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={payment}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel value="На час" control={<Radio />} label="На час" />
                    <FormControlLabel
                        value="Еднократно за целия проект"
                        control={<Radio />}
                        label="Еднократно за целия проект"
                    />
                </RadioGroup>
            </FormControl>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
                <TextField
                    type='number'
                    required
                    id='wage'
                    name='wage'
                    label='Заплащане в лв.'
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: 4 }}>
                <Typography>Добави описание към проекта</Typography>
                <TextareaAutosize
                    minRows={10}
                    maxRows={10}
                    style={{ width: '100%' }}
                />
            </Grid>
        </>
    )
}