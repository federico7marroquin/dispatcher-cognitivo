import React, { Fragment, useState } from "react";
import { DatePicker, MuiPickersUtilsProvider  } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import {es} from 'date-fns/esm/locale'
function InlineDatePickerDemo(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [startDate, setStarDate] = useState(new Date());
  const [ endDate, setEndDate] = useState(new Date());

  return (
    <Fragment>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
            <DatePicker
                disableToolbar
                format="MMMM, yyyy"
                openTo="month"
                views={[ "month", "year"]}
                helperText="Mes seleccionado"
                value={selectedDate}
                onChange={handleDateChange}
                />
    </MuiPickersUtilsProvider>
    </Fragment>
  );
}

export default InlineDatePickerDemo;