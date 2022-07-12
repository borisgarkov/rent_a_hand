import { Link, Stack, Typography } from "@mui/material";
import Copyright from "./Copyright";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socialMediaIcons = [
    {
        icon: <FacebookIcon />,
        link: "https://www.facebook.com/Rent-A-Hand-Bulgaria-101820744973512",
    },
    {
        icon: <InstagramIcon />,
        link: "https://www.instagram.com/rent_a_hand_bulgaria/",
    },
    {
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/company/rent-a-hand-bulgaria/",
    },
]

export default function Footer(params) {
    return (
        <Stack
            component="footer"
            sx={{
                py: 3,
                px: 2,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                alignItems: 'center',
            }}>
            <Stack sx={{
                flexDirection: 'row',
                gap: 2,
                margin: '0 auto'
            }}>
                <Typography variant="body1">
                    Социални мрежи
                </Typography>
                {
                    socialMediaIcons.map(x => {
                        return (
                            <Link
                                key={x.link}
                                color="inherit"
                                href={x.link}
                                target="_blank"
                                rel="noopener"
                            >
                                {x.icon}
                            </Link>
                        )
                    })
                }
            </Stack>
            <Copyright />
        </Stack>
    )
}