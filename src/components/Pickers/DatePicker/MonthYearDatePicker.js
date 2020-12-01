import React, { Fragment, useState } from "react";
import { DatePicker, MuiPickersUtilsProvider  } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import {es} from 'date-fns/esm/locale'

function MonthYearDatePicker(props) {
  const [startDate, setStarDate] = useState(new Date());
  const [ endDate, setEndDate] = useState(new Date());
  const { datePicker, setDatePicker, onChangeDate} = props;

  const onChange = (date) => {
    setDatePicker(date)
    onChangeDate('month');
  }
  
  

  return (
    <Fragment>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
            <DatePicker
                disableToolbar
                inputVariant="outlined"
                format="MMMM, yyyy"
                openTo="month"
                views={[ "month", "year"]}
                helperText="Mes seleccionado"
                value={datePicker}
                onChange={onChange}
                disableFuture={true}
                />
    </MuiPickersUtilsProvider>
    </Fragment>
  );
}

export default MonthYearDatePicker;