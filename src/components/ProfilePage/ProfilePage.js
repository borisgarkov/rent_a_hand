import { Avatar, Card, CardContent, CardHeader, Chip, Divider, IconButton, Stack, Typography, Box } from "@mui/material";

import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


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

const ProfileHeading = () => {
    return (
        <Card sx={{ marginTop: { xs: 1, md: 10 }, marginBottom: 2, marginLeft: 'auto', marginRight: 'auto', maxWidth: 950 }}>
            <Stack sx={{
                flexDirection: 'row',
                gap: 4,
                alignItems: 'center',
                padding: 1,
                height: {
                    xs: 80,
                    md: 120,
                }
            }}>
                <Avatar sx={{ width: 70, height: 70, marginLeft: 2 }} />
                <Stack sx={{
                }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Иван Иванов</Typography>
                    <Typography variant="body1">Бургас</Typography>
                </Stack>
                <IconButton size='large' sx={{ marginLeft: 'auto', marginRight: 5 }}>
                    <MessageOutlinedIcon fontSize="medium" />
                </IconButton>
            </Stack>
        </Card>
    )
}

const UserJob = () => {
    return (
        <Stack sx={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            ...userInfoIconHeadingCssStyle
        }}>
            <WorkOutlineOutlinedIcon />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Механик</Typography>
            <EditSection />
        </Stack>
    )
};

const UserResume = () => {
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
                <TextSnippetOutlinedIcon />
                <Typography variant='h6'>Резюме</Typography>
                <EditSection />
            </Stack>
            <Typography variant='body1' sx={{ marginBottom: 1 }}>Hey I'm Preslav,
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
        </Stack>
    )
};

const UserSkills = () => {
    return (
        <Stack sx={{
            ...userInfoIconHeadingCssStyle
        }}>
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 0.5,
            }}>
                <SquareFootOutlinedIcon />
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1, marginTop: 1 }}>Умения</Typography>
                <EditSection />
            </Stack>
            <Stack sx={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 1,
            }}>
                <Chip label="Databases" variant="filled" />
                <Chip label="Nagios" variant="filled" />
                <Chip label="Zabbix" variant="filled" />
            </Stack>
        </Stack>
    )
};

const UserSalary = () => {
    return (
        <Stack sx={{
            flexDirection: 'row',
            alignItems: 'center',
            ...userInfoIconHeadingCssStyle
        }}>
            <Typography variant='body1'>
                Заплащане на час
            </Typography>
            <EditSection />
        </Stack>
    )
}


export default function ProfilePage() {
    return (
        <>
            <ProfileHeading />
            <Card sx={{
                maxWidth: 950,
                margin: 'auto',
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Stack sx={{
                    padding: 1,
                    flexGrow: 1,
                }}>
                    <UserSalary />
                </Stack>

                <Divider orientation="vertical" flexItem={true} />

                <Stack sx={{
                    flexBasis: '70%',
                }}>
                    <UserJob />
                    <Divider />
                    <UserResume />
                    <Divider />
                    <UserSkills />
                </Stack>
            </Card>
        </>
    )
}