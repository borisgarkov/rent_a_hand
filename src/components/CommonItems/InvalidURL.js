import { Stack, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function InvalidURL() {
    return (
        <Stack sx={{
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            padding: 10,
            gap: 1,
            justifyContent: 'center',
            height: '75vh'
        }}>
            <Typography variant='h4' sx={{ textAlign: 'center' }}>
                Упс..! Нещо се обърка!
            </Typography>
            <SentimentVeryDissatisfiedIcon fontSize="large" />
        </Stack>
    )
}