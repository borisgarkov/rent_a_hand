import { Avatar, Card, CardContent, CardHeader, Chip, Divider, IconButton, Stack, Typography } from "@mui/material";

import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';


const userInfoIconHeadingCssStyle = {
    gap: 1,
    marginTop: 2,
    marginBottom: 2,
    padding: '0 1rem',
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
        </Stack>
    )
};

const UserResume = () => {
    return (
        <Stack sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            ...userInfoIconHeadingCssStyle
        }}>
            <TextSnippetOutlinedIcon />
            <Typography variant='body1' sx={{ marginBottom: 1 }}>Резюме: Linux, AWS, Terraform, Kubernetes,
                Networks, Some FreeBSD skills; Databases: MySQL, Postgresql; Docker;
                ansible; CI/CD understanding and using the best practices; monitoring tools:
                Zabbix, Nagios and a lot of other tools
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
        <Typography>
            Заплащане на час
        </Typography>
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