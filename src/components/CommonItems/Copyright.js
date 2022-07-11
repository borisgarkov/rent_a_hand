import { Link, Typography } from "@mui/material";

export default function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Всички права запазени © '}
            <Link color="inherit" href="">
                Rent A Hand
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}