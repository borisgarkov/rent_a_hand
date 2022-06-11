import { Avatar, Card, CardContent, CardHeader, Chip, Divider, IconButton, Stack, Typography, Box, Button, Rating } from "@mui/material";

import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PaymentIcon from '@mui/icons-material/Payment';
import SchoolIcon from '@mui/icons-material/School';


const userInfoIconHeadingCssStyle = {
    gap: 1,
    marginTop: 2,
    marginBottom: 2,
    padding: '0 1rem',
};

const EditSection = () => {
    return (
        <IconButton sx={{
            marginLeft: 'auto',
        }}>
            <EditOutlinedIcon />
        </IconButton>
    )
};

const skillsChipOnHoverCssStyle = {
    '&:hover': { backgroundColor: '#bdbdbd' },
};

const ProfileHeading = () => {
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
                <Stack sx={{
                }}>
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
            </Stack>
        </Card>
    )
}

const UserJobSection = () => {
    return (
        <Stack sx={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            ...userInfoIconHeadingCssStyle,
        }}>
            <WorkOutlineOutlinedIcon sx={{ color: 'primary.main' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Механик</Typography>
            <EditSection />
        </Stack>
    )
};

const UserResumeSection = () => {
    return (
        <Stack sx={{
            flexDirection: 'column',
            // alignItems: 'flex-start',
            ...userInfoIconHeadingCssStyle
        }}>
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: 1,
            }}>
                <TextSnippetOutlinedIcon sx={{ color: 'primary.main' }} />
                <Typography fontWeight='bold' variant='h6'>Резюме</Typography>
                <EditSection />
            </Stack>
            <Typography variant='body2' sx={{
                marginBottom: 1,
                textAlign: 'justify',
                paddingLeft: { sm: '32px' },
                paddingRight: { sm: '10px' },
            }}>
                Hey I'm Preslav,
                Thanks for visiting my profile.
                The experience that i have at the moment is at 100% for me and every time i learn something its 100% more.
                I have good presentation skills in sales and excellent technical skills in process engineering.
                At the moment i am working as a process enginer in production factory with aluminium profiles.
                Making analysis for production process and solving problems in production with aluminium is one of
                my best abilities that i have and i want to help people here. Drawing on inventor 2021 mechanical parts
                for machines and using CAD ,CAM is also one of my other specialties. Designing new type of machine parts
                for specific situations in production and helping it get better at quality. Being communicative during work
                is my top skill that i have acquired during my working career till now. The more we go on the more it continues...
                For conclusion im a very kind and generous person that if something is interesting for me to do, im getting along with it very fast.
            </Typography>
        </Stack >
    )
};

const UserSkillsSection = () => {
    return (
        <Stack sx={{
            ...userInfoIconHeadingCssStyle
        }}>
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 0.5,
            }}>
                <SquareFootOutlinedIcon sx={{ color: 'primary.main' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1, marginTop: 1 }}>Умения</Typography>
                <EditSection />
            </Stack>
            <Stack sx={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 1,
            }}>
                <Chip label="Databases" variant="filled" sx={skillsChipOnHoverCssStyle} />
                <Chip label="Nagios" variant="filled" sx={skillsChipOnHoverCssStyle} />
                <Chip label="Zabbix" variant="filled" sx={skillsChipOnHoverCssStyle} />
            </Stack>
        </Stack>
    )
};

const UserSalaryAndEducationSection = () => {
    return (
        <>
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'center',
                ...userInfoIconHeadingCssStyle,
                gap: 2,
                marginBottom: 5,
            }}>
                <PaymentIcon sx={{ color: '#666666', alignSelf: 'flex-start' }} />
                <Stack>
                    <Typography variant='body1' fontWeight='bold'>
                        Заплащане
                    </Typography>
                    <Typography variant='body1' >
                        10лв / час
                    </Typography>
                </Stack>
                <EditSection />
            </Stack >
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'center',
                ...userInfoIconHeadingCssStyle,
                gap: 2,
                marginBottom: 5,
            }}>
                <SchoolIcon sx={{ color: '#666666', alignSelf: 'flex-start' }} />
                <Stack spacing={1}>
                    <Typography variant='body1' fontWeight='bold'>
                        Образование
                    </Typography>
                    <Typography variant='body2'>
                        УНСС
                    </Typography>
                    <Typography variant='body2'>
                        Oxford
                    </Typography>
                </Stack>
                <EditSection />
            </Stack>
        </>
    )
}

const SaveUserToFavourite = () => {
    return (
        <Card sx={{
            maxWidth: 950,
            margin: 'auto',
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 2,
            backgroundColor: 'primary.main',
            textAlign: 'center',
        }}>
            <CardContent>
                <Typography sx={{ color: 'white', marginBottom: 1 }} variant='h6'>
                    Бъдещи проекти с Иван Иванов?
                </Typography>
                <Typography sx={{ color: 'white' }} variant='body1'>
                    Ако мислите, че уменията на Иван Иванов са подходящи за Вашите бъдещи проекти,
                    можете да го добавите към списъка с подходящи кандидати.
                </Typography>
                <Button
                    sx={{
                        backgroundColor: 'white',
                        border: '1px solid white',
                        borderRadius: 5,
                        marginTop: 4,
                        '&:hover': {
                            backgroundColor: 'white'
                        }
                    }}
                    startIcon={<StarBorderIcon />}
                >
                    Запази
                </Button>
            </CardContent>
        </Card>
    )
};


export default function ProfilePage() {
    return (
        <>
            <ProfileHeading />
            <Card sx={{
                maxWidth: 950,
                margin: 'auto',
                display: 'flex',
                flexDirection: {
                    xs: 'column-reverse',
                    md: 'row',
                },

                marginBottom: 2
            }}>
                <Stack sx={{
                    padding: 1,
                    flexGrow: 1,
                }}>
                    <UserSalaryAndEducationSection />
                </Stack>

                <Divider orientation="vertical" flexItem={true} />

                <Stack sx={{
                    flexBasis: '70%',
                }}>
                    <UserJobSection />
                    <Divider />
                    <UserResumeSection />
                    <Divider />
                    <UserSkillsSection />
                </Stack>
            </Card>

            <SaveUserToFavourite />

        </>
    )
}