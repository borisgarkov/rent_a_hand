import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useState } from 'react';

import { Alert } from '@mui/material';

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

    return (
        <Grid item xs={12}>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="upload-profile-image"
                type="file"
                onChange={getImageUploaded}
                name='image'
                required
                onInvalid={() => alert('Моля, прикачете снимка!')}
            />
            {
                isImageUploaded ?
                    <Alert severity="success">Успешно прикачена снимка</Alert> :
                    null
            }
            <label htmlFor="upload-profile-image" style={{ width: '100%' }}>
                <Button variant="outlined" component="span" fullWidth>
                    {uploadImageText}
                </Button>
            </label>

        </Grid>
    )
}