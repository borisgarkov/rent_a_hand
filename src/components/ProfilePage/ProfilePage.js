import { Avatar, Card, CardContent, CardHeader, Chip, Divider, IconButton, Stack, Typography } from "@mui/material";

import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';

export default function ProfilePage() {
    return (
        <>
            <Card sx={{ marginTop: { xs: 1, md: 10 }, marginBottom: 2, maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
                <Stack sx={{
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center',
                    padding: 1,
                    height: {
                        xs: 80,
                    }
                }}>
                    <Avatar sx={{ width: 50, height: 50 }} />
                    <Stack sx={{
                    }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Име, Фамилия</Typography>
                        <Typography variant="caption">Location</Typography>
                    </Stack>
                    <IconButton size='large' sx={{ marginLeft: 'auto' }}>
                        <MessageOutlinedIcon fontSize="medium" />
                    </IconButton>
                </Stack>
            </Card>
            <Card sx={{ maxWidth: 1000, margin: 'auto' }}>
                <Stack sx={{
                    padding: 1,
                }}>
                    <Stack sx={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        gap: 0.5,
                        marginBottom: 1
                    }}>
                        <WorkOutlineOutlinedIcon />
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Механик</Typography>
                    </Stack>
                    <Stack sx={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        gap: 0.5
                    }}>
                        <TextSnippetOutlinedIcon />
                        <Typography variant='body2' sx={{ marginBottom: 1 }}>Резюме: Linux, AWS, Terraform, Kubernetes,
                            Networks, Some FreeBSD skills; Databases: MySQL, Postgresql; Docker;
                            ansible; CI/CD understanding and using the best practices; monitoring tools:
                            Zabbix, Nagios and a lot of other tools
                        </Typography>
                    </Stack>
                    <Divider />
                    <Stack sx={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 0.5
                    }}>
                        <SquareFootOutlinedIcon />
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 1, marginTop: 1 }}>Умения</Typography>
                    </Stack>
                    <Stack sx={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}>
                        <Chip label="Databases" variant="outlined" />
                        <Chip label="Nagios" variant="outlined" />
                        <Chip label="Zabbix" variant="outlined" />
                    </Stack>
                </Stack>

            </Card>
        </>
    )
}