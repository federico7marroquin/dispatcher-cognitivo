import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import propTypes from 'prop-types';

DialogField.propTypes = {
    state: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    infoCard: propTypes.string.isRequired,
    pushed: propTypes.bool,
}

export default function DialogField(props) {

    const { state, name, pushed, infoCard, children } = props;
    return (
        <React.Fragment>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                <Typography
                    component="h3"
                    variant="body1"
                    color={state === '' && pushed ? 'error' : 'textSecondary'}
                    noWrap
                >
                    {name}
                </Typography>
                <Box ml={1}>
                    <Tooltip
                        arrow
                        fontSize={40}
                        title={infoCard}
                        placement="right"
                    >
                        <IconButton size="small">
                            <InfoOutlinedIcon
                                color={state === '' && pushed ? 'error' : 'inherit'}
                                fontSize="small"
                            />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Grid>
            {children}
        </React.Fragment>
    );
}