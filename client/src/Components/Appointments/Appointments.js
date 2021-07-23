import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useEffect } from 'react';
import axios from "axios";
import AppointmentButtons from './AppointmentButtons';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function Appointments() {

    const classes = useStyles();

    const [doctors, setDoctors] = useState([])

    const history = useHistory();

    useEffect(() => {
        axios
            .get("doctors.json")
            .then((res) => {
                setDoctors(res.data);
            })
    }, [])

    return (
        <React.Fragment>
            <CssBaseline />

            <main className="appointments">
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Book your Appointment
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            To book your appointment, select the doctor with their specialization and just book the slot.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={() => history.push("/upcomingAppointments")}>
                                        Upcoming Appointments
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary" onClick={() => history.push("/pastAppointments")}>
                                        Past Appointments
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Pending Appointments
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {doctors.map((doctor) => (
                            <Grid item key={doctor.id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://raw.githubusercontent.com/pranjals149/acevent/411c99c03a3053d37514094caca14920f1208dc7/user.svg"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Doctor's Name - <strong>{doctor.name}</strong>
                                        </Typography>
                                        <Typography>
                                            Specialization - <strong>{doctor.specialization}</strong>
                                        </Typography>
                                        <Typography style={{ color: "gray", fontSize: "13px" }}>
                                            Ratings - <strong>{doctor.ratings}</strong>
                                        </Typography>
                                    </CardContent>
                                    <AppointmentButtons
                                        name={doctor.name}
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>

        </React.Fragment>
    );
}
