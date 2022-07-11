import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

import CheckIcon from '@mui/icons-material/Check';

export default function RegisterCard({
    selectedCategoryValue,
    handleChange,
    category_image,
    category_description
}) {
    return (
        <>
            <Card
                onClick={handleChange}
                sx={{ flex: { lg: '0 0 350px' } }}
                data-aos="fade-up"
            >
                <CardActionArea>
                    <CardMedia component='img' height='180' image={category_image} alt='category image' />
                    <CardContent sx={{
                        display: 'flex',
                        gap: 3,
                        height: 'auto'
                    }}>
                        <Typography>{category_description}</Typography>
                        {
                            selectedCategoryValue === category_description &&
                            <CheckIcon sx={{ color: 'primary.main' }} />
                        }
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}