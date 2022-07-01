import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

export default function PersonalDataReview() {
    return (
        <FormControlLabel
            control={<Checkbox color="secondary" name="policy" value="yes" />}
            label="Прочетох и съм запознат с политиката за лични данни"
        />
    )
}