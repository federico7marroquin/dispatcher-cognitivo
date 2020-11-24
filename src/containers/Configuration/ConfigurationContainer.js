import React from 'react';
import {useStyles} from '../../styles/styles';

export default function Configuration(props) {
    const classes = useStyles();
 
 
    return (
        <div className={classes.root}>
           <p>Hola Mundo</p>
        </div>
    );
    
}