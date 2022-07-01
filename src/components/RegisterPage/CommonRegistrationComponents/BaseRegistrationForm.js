import { Grid, TextField } from "@mui/material";

export default function BaseRegistrationForm({
    field
}) {
    return (
        <Grid item {...field.displaySizeProps}>
            <TextField
                type={field.type}
                required={field.required}
                id={field.id}
                name={field.textField}
                label={field.label}
                fullWidth
                autoComplete={field.autoComplete}
                variant="outlined"
            />
        </Grid>
    )
}