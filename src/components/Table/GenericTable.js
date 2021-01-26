import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import {stableSort, getComparator} from '../../utils/Stablesort/StableSort';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export default function GenericTable(props) {
    const classes = useStyles();
    const {
        title,
        values,
        headCells,
        initRowsPerPage,
        setItem,
        defaultOrder,
        addFunction
    } = props;
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState(defaultOrder);
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rows, setRows] = React.useState(values);
    const [rowsPerPage, setRowsPerPage] = React.useState(initRowsPerPage);


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const editItem = () => {
        let item;
        for(let i=0; i< rows.length; i ++) {
            if(rows[i].name === selected[0]){
                item = rows[i];
                break;
            }
        }
        console.log('definitivo', item)
        setItem(item);
    }
    const deleteItem = () => {
        const newValues = []

        for (let j = 0; j < rows.length; j++) {
            let alreadySelected = false
            for (let i = 0; i < selected.length; i++) {
                if (selected[i] === rows[j].name) {
                    alreadySelected = true;
                    break;
                }
            }
            if (!alreadySelected) {
                newValues.push(rows[j])
            }
        }
        setRows(newValues);
        setSelected([]);
    }
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, row) => {
        const arrayRow = Object.keys(row);
        const selectedIndex = selected.indexOf(row[arrayRow[0]]);
        let newSelected = [];

        if (selectedIndex === -1) {


            newSelected = newSelected.concat(selected, row[arrayRow[0]]);

        } else if (selectedIndex === 0) {

            newSelected = newSelected.concat(selected.slice(1));

        } else if (selectedIndex === selected.length - 1) {


            newSelected = newSelected.concat(selected.slice(0, -1));

        } else if (selectedIndex > 0) {


            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }


        
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <EnhancedTableToolbar
                addFunction={addFunction}
                title={title}
                numSelected={selected.length}
                editItem={editItem}
                deleteItem={deleteItem} />
            <TableContainer>
                <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size='medium'
                    aria-label="enhanced table"
                >
                    <EnhancedTableHead
                        classes={classes}
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                        headCells={headCells}
                    />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                const arrayRow = Object.keys(row);
                                const isItemSelected = isSelected(row[arrayRow[0]]);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row[arrayRow[0]]}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={isItemSelected}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </TableCell>
                                        {
                                            Object.keys(row).map((key, index) => {
                                                if (headCells.length > index) {
                                                    if (index === 0) {
                                                        return (
                                                            <TableCell 
                                                                key={index}
                                                                component="th" id={labelId} scope="row" padding="none">
                                                                {row[key]}
                                                            </TableCell>
                                                        )

                                                    }
                                                    else {
                                                        return (
                                                            <TableCell
                                                                key={index}
                                                                align={headCells.length - 1 === index ? 'right' : 'inherit'}>
                                                                {row[key]}
                                                            </TableCell>
                                                        )
                                                    }
                                                }
                                                return null;

                                            })
                                        }
                                    </TableRow>
                                );
                            })}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
}
