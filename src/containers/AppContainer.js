import React from 'react';
import MainContainer from './MainContainer';
import Dashboard from '../components/Dashboard/Dashboard'
import {useStyles} from '../styles/styles';

export default function AppContainer() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
    
    return (
        <div className={classes.root}>
            <Dashboard open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>
            <MainContainer />
        </div>
    );
    
}

