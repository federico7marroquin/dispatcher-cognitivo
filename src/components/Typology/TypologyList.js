import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import { useStyles } from './TypologyStyles';


function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
    return [...a, ...not(b, a)];
}

// const typologies = [
//     createTypology('Solicitud de Información', 'Primer nivel', 'Información sobre productos'),
//     createTypology('Peticiones, Quejas y Reclamos', 'Primer nivel', 'PQRs'),
//     createTypology('Certificados', 'Primer nivel', ''),
//     createTypology('Servicio al Cliente',  'Primer nivel', 'Respuesta automática'),

//     createTypology('Asuntos Legales', 'Escalados', 'Consecuencias legales'),
//     createTypology('Autorizaciones',  'Escalados', ''),
//     createTypology('Derechos de Peticiones',  'Escalados', 'Consecuencias legales'),
//     createTypology('Casos sin tipificar',  'Escalados', 'necesitan ser estudiados'),
    
//     createTypology('Atención Prioritaria',  'Prioritarios', 'Consecuencias legales'),
//     createTypology('Demandas', 'Prioritarios', 'Escalan al area de Asuntos legales'),
//     createTypology('Tutelas',  'Prioritarios', 'Escalan al area legal'),
//     createTypology('Soporte técnico',  'Prioritarios', 'Soporte técnico para clientes'),   
// ]

function createTypology(name, category, description){
    return { name, category, description };
}

export default function TypologyList(props) {
    const classes = useStyles();
    const [checked, setChecked] = useState([]);
    const [left, setLeft] = useState( [0, 1, 2, 3]);
    const [middle, setMiddle] = useState([9, 10, 11, 12]);
    const [right, setRight] = useState([4, 5, 6, 7]);
    const { typologies, handleOpenDialog, setItem } = props

    const leftChecked = intersection(checked, left);
    const middleChecked = intersection(checked, middle);
    const rightChecked = intersection(checked, right);

 

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const numberOfChecked = (items) => intersection(checked, items).length;

    const handleToggleAll = (items) => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        } else {
            setChecked(union(checked, items));
        }
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };
    const handleCheckedRight2 = () => {
        setRight(right.concat(middleChecked));
        setMiddle(not(middle, middleChecked));
        setChecked(not(checked, middleChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const handleCheckedMiddle = () => {
        setMiddle(middle.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));

    }

    const customList = (title, items) => (
        <Card>
            <CardHeader
                className={classes.cardHeader}
                avatar={
                    <Checkbox
                        onClick={handleToggleAll(items)}
                        checked={numberOfChecked(items) === items.length && items.length !== 0}
                        indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
                        disabled={items.length === 0}
                        inputProps={{ 'aria-label': 'all items selected' }}
                    />
                }
                title={title}
                subheader={`${numberOfChecked(items)}/${items.length} seleccionados`}
            />
            <Divider />
            <List className={classes.list} dense component="div" role="list">
                {items.map((value) => {
                    const labelId = `transfer-list-all-item-${value}-label`;

                    return (
                        <ListItem 
                            key={value} 
                            role="listitem" 
                            button 
                           
                        >
                            <ListItemIcon onClick={handleToggle(value)}>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={typologies[value]} />
                            <Tooltip 
                                placement="top"
                                title="Editar"
                            >
                                <IconButton  size='small' onClick={() => setItem(typologies[value], title )}>
                                    <EditIcon  fontSize='small'/>
                                </IconButton>
                            </Tooltip>
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
            {/* <Divider /> */}
            <Grid container alignItems='center' justify="center">
                <Button
                    className={classes.buttonAdd}
                    variant="contained"
                    color="secondary"
                    onClick={() => handleOpenDialog(title)}
                >
                    <AddIcon />
                </Button>
            </Grid>
        </Card>
    );

    return (
        <>
            <Grid item sm={12} md={3} style={{width: '100%'}}>
                {customList('Primer nivel', left)}
            </Grid>

            <Grid item >
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                >
                    <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        onClick={handleCheckedRight}
                        disabled={leftChecked.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        onClick={handleCheckedLeft}
                        disabled={rightChecked.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>
                </Grid>
            </Grid>

            <Grid item xs={12} md={3}>
                {customList('Escalados', right)}
            </Grid>

            <Grid item >
                <Grid container direction="column" alignItems="center">
                    <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        onClick={handleCheckedMiddle}
                        disabled={rightChecked.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        onClick={handleCheckedRight2}
                        disabled={middleChecked.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>
                </Grid>
            </Grid>

            <Grid item xs={12} md={3}>
                {customList('Prioritarios', middle)}
            </Grid>
        </>
    );
}
