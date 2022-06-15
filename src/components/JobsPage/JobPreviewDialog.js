import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Avatar, Box, IconButton, Typography } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { forwardRef, useState } from 'react';

import { useNavigate } from "react-router-dom";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function JobPreviewDialog({ job }) {
    const [open, setOpen] = useState(false);
    let navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="text" onClick={handleClickOpen}>
                Научи повече
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    <Box
                        marginBottom={2}
                        sx={{
                            display: 'flex',
                            alignItems: 'baseline',
                            columnGap: 2,
                        }}
                    >
                        <Avatar>{job.publisher.slice(0, 1)}</Avatar>
                        <Typography id="transition-modal-title" variant="h6" component="h2" mb={2}>
                            {job.publisher}
                        </Typography>
                        <IconButton onClick={handleClose} sx={{ alignSelf: 'flex-start', marginLeft: 'auto' }} >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    {job.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {job.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => (navigate('/job-description'))}>
                        Прегледай обява
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}