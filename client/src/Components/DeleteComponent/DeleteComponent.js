import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

import { UserContext } from '../../UserContext';
import classes from './DeleteComponent.module.css';

const DeleteComponent = (props) => {
    const [open, setOpen] = useState(false);
    const user = useContext(UserContext);

    useEffect(() => {
        const delete_url = user.type === 'junior' ? '/api/auth/junior_delete' : '/api/auth/company_delete';
        const logout_url = user.type === 'junior' ? '/api/auth/junior_logout' : '/api/auth/company_logout';
        const email = user.email;
        console.log("logout url : " , logout_url);

        axios.post(logout_url)
        .then(response => {
            console.log("logout response : ", response);
            console.log("logout response data", response.data);

            setOpen(true);
            const data = {"email":email};
            user.setMail('');
            user.setType('');
            console.log("delete url : " , delete_url);
            // axios.post(delete_url, data)
            // .then(response => {
            //     console.log("delete response", response);
            //     console.log("delete response data", response.data);
    
            //     setTimeout(() => {
            //         props.history.push('/');
            //     }, 1500);
            // })
            // .catch(error => {
            //     console.log("delete response error " , error.response); 
            // })
        })
        .catch(error => {
            console.log("logout response error " , error.response); 
        })
    }, []);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }

    return (
        <div className={classes.Delete}>
            <CircularProgress/>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert elevation={6} variant='filled' onClose={handleClose} severety='success'>
                    חשבון נמחק בהצלחה!
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default withRouter(DeleteComponent);