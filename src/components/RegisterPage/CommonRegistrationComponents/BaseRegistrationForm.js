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
                onInvalid={(e) => e.target.setCustomValidity('Моля, попълнете полето!')}
                onInput={(e) => e.target.setCustomValidity('')}
            />
        </Grid>
    )
}