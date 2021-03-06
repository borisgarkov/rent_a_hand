import { Card, CardHeader, CardContent, CardActions, Grid, Box, Typography, Icon, Button } from "@mui/material"
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';


export default function PricingCard({ card }) {
    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
                alignSelf: 'baseline'
            }}
        >
            <Card>
                <CardHeader
                    title={card.title}
                    titleTypographyProps={{
                        align: 'center',
                        color: 'primary.main',
                        fontWeight: 'bold',
                    }}
                    sx={{
                        backgroundColor: '#e0e3e7',
                    }}
                />
                <CardContent>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        marginBottom: 2
                    }}>
                        <Typography variant='h4' color='text.primary'>{card.price}</Typography>
                        <Typography variant='h5' color='text.secondary'>/месец</Typography>
                    </Box>
                    <Typography
                        variant='h5'
                        color='text.primary'
                        textAlign='center'
                        marginBottom={4}
                    >
                        Включва
                    </Typography>

                    {
                        card.description.map(line =>
                            <Box
                                key={line}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 2,
                                    gap: 2,
                                }}
                            >
                                <Icon>
                                    <CheckCircleOutlineOutlinedIcon fontSize='small' />
                                </Icon>
                                <Typography
                                    // component='li'
                                    variant='subtitle1'
                                    color='text.primary'
                                >
                                    {line}
                                </Typography>
                            </Box>
                        )
                    }

                </CardContent>
                <CardActions>
                    <Button variant='contained' fullWidth>Избери</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}