import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function RegisterCard({
    category_image,
    category_description
}) {
    return (
        <>
            <Card
                sx={{ width: { xs: '100%', lg: 350 } }}
            >
                <CardActionArea>
                    <CardMedia component='img' height='180' image={category_image} alt='category image' />
                    <CardContent>
                        <Typography>Регистрация в "{category_description}"</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}