import { Stack, Typography } from "@mui/material";

import PaymentIcon from '@mui/icons-material/Payment';
import SchoolIcon from '@mui/icons-material/School';
import { EditSectionButton } from "./EditSectionButton";

import { userInfoIconHeadingCssStyle } from "./commonProfileCssStyles";

export const UserSalaryAndEducationSection = () => {
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
                <EditSectionButton />
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
                <EditSectionButton />
            </Stack>
        </>
    )
}
