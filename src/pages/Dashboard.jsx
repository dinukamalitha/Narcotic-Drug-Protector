import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import userLogOut from '../auth/userLogout';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import FingerprintIcon from '@mui/icons-material/Fingerprint';


export const Dashboard = () => {
    const navigate = useNavigate();
    const { error, logOut } = userLogOut();

    const handleLogOut = async () => {
        await logOut();

        if (!error) {
            navigate("/");
        }
    }

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                "https://api.thingspeak.com/channels/2180157/feeds.json?api_key=4F40CZNF8ZM401DM&results=2"
            );
            setData(response.data.feeds.slice().reverse());
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Fragment>
            <AppBar position="static">
                <Toolbar disableGutters>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                        <FingerprintIcon style={{ marginLeft: "25px"}} />


                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ marginLeft: "-15px" }}>
                        Narcotic Drugs Protector
                    </Typography>

                    <div className="avatar">
                        <IconButton sx={{ p: 0 }} style={{ marginRight: "25px" }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </div>

                    <Link to="/">
                        <Button color="warning" variant="contained" onClick={handleLogOut} style={{ marginRight: "30px" }}>
                            Log Out
                        </Button>
                    </Link>

                </Toolbar>
            </AppBar>

            {/* <h1>Welcome to the Dashboard</h1> */}

            <div className="table">
                <TableContainer component={Paper}>
                    <Table sx={{ maxWidth: 900 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Index</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Time</TableCell>
                                <TableCell align="center">Temperature</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={5} align="center">
                                        Loading...
                                    </TableCell>
                                </TableRow>
                            ) : (
                                data.map((row) => (
                                    <TableRow
                                        key={row.field1}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="center">
                                            {row.entry_id}
                                        </TableCell>
                                        <TableCell align="center">{row.field4}</TableCell>
                                        <TableCell align="center">{row.field2}</TableCell>
                                        <TableCell align="center">{row.field5}</TableCell>
                                        <TableCell align="center">{row.field3}</TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Fragment>
    )
}
