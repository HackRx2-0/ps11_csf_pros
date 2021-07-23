import { Button, CardActions } from '@material-ui/core'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function AppointmentButtons({ name }) {

    const [open, setOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <CardActions>
                <Button size="small" color="primary" onClick={handleClickOpen}>
                    Book Now
                </Button>
                <Button size="small" color="primary">
                    Pay Now
                </Button>
            </CardActions>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Book an appointment with {name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To book an appointment with this doctor, please enter your information here. Appointment will be successfully completed after the payment has been done.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Full Name"
                        type="text"
                        fullWidth
                    />

                    <strong>Select Date</strong> {" "}
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AppointmentButtons
