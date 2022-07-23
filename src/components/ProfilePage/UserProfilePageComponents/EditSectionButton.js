import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Stack, TextField } from '@mui/material';
import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';


export const EditSectionButton = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton
                onClick={handleClickOpen}
                sx={{
                    marginLeft: 'auto',
                }}
            >
                <EditOutlinedIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <IconButton
                        onClick={handleClose}
                        sx={{ margin: '0 8px 0 auto' }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Stack>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
            </Dialog>
        </>
    )
};