import { Grid, TextareaAutosize, Typography } from "@mui/material";

export default function AddProjectDescription() {
    return (
        <Grid item xs={12}>
            <Typography>Добави описание към проекта</Typography>
            <TextareaAutosize
                minRows={10}
                maxRows={10}
                style={{ width: '100%' }}
            />
        </Grid>
    )
}