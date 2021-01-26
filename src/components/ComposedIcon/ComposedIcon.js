import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import EditIcon from '@material-ui/icons/Edit';
import propTypes from 'prop-types';

ComposedIcon.propTypes = {
    infoCard: propTypes.any,
    state: propTypes.string,
    pushed: propTypes.bool,
    placement: propTypes.string,
    handlePush: propTypes.func
}

ComposedIcon.defaultProps = {
    infoCard: 'Editar',
    placement: 'bottom',
    state: '',
    pushed: false,
}


export default function ComposedIcon(props) {

    const {infoCard, state, pushed, placement, handlePush } = props;
    return (
        <Tooltip
            arrow
            fontSize={40}
            title={infoCard}
            placement={placement}
        >
            <IconButton 
                onClick={handlePush} 
                size="small"
            >
                {infoCard==='Editar'?
                    <EditIcon />
                    :
                    <InfoOutlinedIcon
                        color={state === '' && pushed ? 'error' : 'inherit'}
                        fontSize="small"
                    />
                }
            </IconButton>
        </Tooltip>
    )
}