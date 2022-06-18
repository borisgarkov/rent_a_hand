import { Card, Stack, TextField } from "@mui/material";

export default function RegisterAsFreelancer() {
    return (
        <>
            <Card sx={{ maxWidth: 1000, margin: '50px auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 5 }}>
                <Stack sx={{ flexDirection: 'row', gap: 2 }}>
                    <TextField variant="standard" label='Име' />
                    <TextField variant="standard" label='Фамилия' />
                </Stack>
                <TextField fullWidth variant="standard" label='Имейл' />
                <TextField fullWidth variant="standard" label='Парола' />

            </Card>
        </>
    )
}