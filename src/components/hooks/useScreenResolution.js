import { useTheme } from "@emotion/react";
import { useMediaQuery } from '@mui/material';

function useScreenResolution() {
    const theme = useTheme();
    const isModileDevice = useMediaQuery(theme.breakpoints.down('sm'));

    return isModileDevice;
};

export default useScreenResolution;