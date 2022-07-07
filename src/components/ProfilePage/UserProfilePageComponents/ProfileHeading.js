import { Avatar, Button, Card, Rating, Stack, Typography } from "@mui/material";

import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useScreenResolution from "../../hooks/useScreenResolution";


const BaseNameCityConnectHeadingSection = () => {
    return (
        <>
            <Stack>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Иван Иванов</Typography>
                <Stack sx={{
                    flexDirection: 'row',
                    gap: 0.5,
                }}>
                    <LocationOnIcon sx={{ color: 'primary.main' }} size='small' />
                    <Typography variant="body1">Бургас</Typography>
                </Stack>
            </Stack>
            <Stack sx={{
                flexDirection: 'column',
                flexGrow: 1,
                display: { xs: 'none', sm: 'flex' }
            }}>
                <Typography component="legend">Отзиви</Typography>
                <Rating name="read-only" defaultValue={3.5} precision={0.5} readOnly sx={{ color: '#f37327' }} />
            </Stack>
            <Button
                variant='contained'
                startIcon={<MessageOutlinedIcon />}
                sx={{ marginLeft: { sm: 'auto' }, marginRight: { sm: 5 } }}
            >
                Свържи се
            </Button>
        </>
    )
};


const NameCityConnectHeadingSection = () => {

    const isModileDevice = useScreenResolution();

    return (
        <>
            {
                isModileDevice ?
                    <Stack sx={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        flexWrap: 'wrap',
                    }}>
                        <BaseNameCityConnectHeadingSection />
                    </Stack> :
                    <BaseNameCityConnectHeadingSection />
            }
        </>
    )
};


export const ProfileHeading = () => {
    return (
        <Card sx={{ marginTop: { xs: 1, sm: 10 }, marginBottom: 2, marginLeft: 'auto', marginRight: 'auto', maxWidth: 950 }}>
            <Stack sx={{
                flexDirection: {
                    xs: 'column',
                    sm: 'row',
                },
                gap: 4,
                alignItems: {
                    xs: 'center',
                    sm: 'center',
                },
                padding: 1,
                height: {
                    sm: 120,
                }
            }}>
                <Avatar sx={{ width: 70, height: 70, marginLeft: { sm: 2 } }} />
                <NameCityConnectHeadingSection />
            </Stack>
        </Card>
    )
}