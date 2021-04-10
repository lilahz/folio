import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

import { UserContext } from '../../UserContext';
import classes from './LogoutComponent.module.css';

const LogoutComponent = (props) => {
    const [open, setOpen] = useState(false);
    const user = useContext(UserContext);

    useEffect(() => {
        const url = user.type === 'junior' ? '/api/auth/junior_logout' : '/api/auth/company_logout';

        axios.post(url)
        .then(response => {
            console.log("respone", response);
            console.log("respone data", response.data);

            setOpen(true);
            user.setMail('');
            user.setType('');

            setTimeout(() => {
                props.history.push('/');
            }, 1500);
        })
        .catch(error => {
            console.log("response error " , error.response); 
        })
    }, []);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }

    return (
        <div className={classes.Logout}>
            <CircularProgress/>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert elevation={6} variant='filled' onClose={handleClose} severety='success'>
                    התנתקת בהצלחה!
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default withRouter(LogoutComponent);