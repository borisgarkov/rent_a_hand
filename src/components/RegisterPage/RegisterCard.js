import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

import CheckIcon from '@mui/icons-material/Check';

export default function RegisterCard(props) {
    return (
        <>
            <Card
                onClick={props.handleChange}
                sx={{ flex: { lg: '0 0 350px' } }}
                data-aos="fade-up"
            >
                <CardActionArea>
                    <CardMedia component='img' height='180' image={props.category_image} alt='category image' />
                    <CardContent sx={{
                        display: 'flex',
                        gap: 3,
                        height: 'auto'
                    }}>
                        <Typography>{props.category_description}</Typography>
                        {
                            props.selectedCategoryValue === props.category_description &&
                            <CheckIcon sx={{ color: 'primary.main' }} />
                        }
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}