import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

export default function PolicyFreelancerRegister() {
    return (
        <Box sx={{ margin: '10px auto' }}>
            <Typography variant="h6">Политика за лични данни</Typography>
            <FormControlLabel
                control={<Checkbox color="secondary" name="policy" value="yes" />}
                label="Прочетох и съм запознат с политиката за лични данни"
            />
        </Box>
    )
}