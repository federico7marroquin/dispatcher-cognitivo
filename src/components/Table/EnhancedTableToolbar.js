import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { lighten, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

export default function EnhancedTableToolbar(props){
    const classes = useToolbarStyles();
    const { numSelected, title, addFunction, deleteItem, editItem } = props;

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected === 1 ? ` ${numSelected} Seleccionado` : `${numSelected} Seleccionados`}
                </Typography>
            ) : (
                    <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                        {title}
                    </Typography>
                )}

            {numSelected > 0 ? (
                <div style={{ display: 'flex' }}>
                    {
                        numSelected === 1 &&
                        <Tooltip title="Editar">
                            <IconButton onClick={editItem} aria-label="Editar">
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    }

                    <Tooltip title="Eliminar">
                        <IconButton aria-label="Eliminar" onClick={deleteItem}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            ) :
                addFunction &&
                (
                    <Tooltip title="Crear">
                        <IconButton  
                            aria-label="filter list"
                            onClick={addFunction}
                            >
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                )
                // :
                // (
                //     <Tooltip title="Lista de filtros">
                //         <IconButton aria-label="filter list">
                //             <FilterListIcon />
                //         </IconButton>
                //     </Tooltip>
                // )
            }
        </Toolbar>
    );
};