import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Avatar, Card, CardContent, CardHeader, Collapse, Container, IconButton, Rating, Slide, Typography } from '@mui/material';
import { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';

const reviews = [
    {
        name: 'Ненко Андреев',
        job: 'ФИТНЕС ИНСТРУКТОР',
        text: `Страхотна и модерна платформа, чрез която успявам 
        да достигна до хора, които искат да променят начина си на живот.`
    },
    {
        name: 'Ненко',
        job: 'ФИТНЕС ИНСТРУКТОР',
        text: `Страkuglgluiglugliuguligluiiulg`
    },
    {
        name: 'nikoleta',
        job: 'ФИТНЕС ИНСТРУКТОР',
        text: `ala bala`
    },
]


export default function CustomerFeedback() {
    const [currentReview, setCurrentReview] = useState(reviews[0]);

    const goToPreviousReview = () => {
        let index = reviews.indexOf(currentReview) - 1;

        if (index < 0) {
            setCurrentReview(reviews[reviews.length - 1])
        } else {
            setCurrentReview(reviews[index])
        }
    };

    const goToNextReview = () => {
        let index = reviews.indexOf(currentReview) + 1;

        if (index > reviews.length - 1) {
            setCurrentReview(reviews[0])
        } else {
            setCurrentReview(reviews[index])
        }
    }

    return (
        <Container>
            <Container sx={{
                textAlign: 'center',
                margin: '36px auto 0',
            }}>
                <Rating name="rating" defaultValue={5} precision={0.5} readOnly sx={{ color: 'primary.main' }} />
            </Container>
            <Typography variant='h6' sx={{
                textAlign: 'center',
                margin: '8px auto 0'
            }}>
                Какво казват хората за нас
            </Typography>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: { xs: 0, md: 2 },
                    justifyContent: 'center',
                    margin: '54px auto'
                }}
            >
                <IconButton onClick={goToPreviousReview}>
                    <ArrowBackIosIcon sx={{ color: 'primary.main' }} />
                </IconButton>
                <Card key={currentReview.name} sx={{
                    width: { xs: 190, md: 500 },
                    height: { md: 190 },
                    overflowWrap: 'break-word',
                }}>
                    <CardHeader
                        title={currentReview.name}
                        subheader={currentReview.job}
                        avatar={<Avatar />}
                    />
                    <CardContent sx={{

                    }}>
                        {currentReview.text}
                    </CardContent>
                </Card>
                <IconButton onClick={goToNextReview}>
                    <ArrowForwardIosIcon sx={{ color: 'primary.main' }} />
                </IconButton>
            </Container>
        </Container>
    )
}