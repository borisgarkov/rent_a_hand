import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

import DoneIcon from '@mui/icons-material/Done';

export default function ImageUpload({
    uploadImageText
}) {

    const [isImageUploaded, setIsImageUploaded] = useState(false);

    const getImageUploaded = (event) => {
        let imagePath = event.target.value;
        if (imagePath) {
            setIsImageUploaded(true);
        };
    };

    const flexStyle = {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    };

    return (
        <Grid item xs={12}>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="upload-profile-image"
                type="file"
                onChange={getImageUploaded}
            />
            <Stack sx={{ ...flexStyle, flexDirection: { xs: 'column', md: 'row' } }}>
                <label htmlFor="upload-profile-image" style={{ width: '100%' }}>
                    <Button variant="outlined" component="span" fullWidth>
                        {uploadImageText}
                    </Button>
                </label>
                {
                    isImageUploaded ?
                        <Stack sx={{ ...flexStyle, gap: 2 }}>
                            <DoneIcon sx={{ color: 'green' }} />
                            <Typography>Успешно прикачена снимка</Typography>
                        </Stack> :
                        null
                }
            </Stack>
        </Grid>
    )
}