import React, { Fragment, useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import {es} from 'date-fns/esm/locale'

function FullDatePicker(props) {
  const {helperText, date} = props;
  const [selectedDate, handleDateChange] = useState(date);

  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
        <DatePicker
          disableToolbar
          inputVariant="outlined"
          format="dd/MM/yyyy"          
          helperText={helperText}
          value={selectedDate}
          onChange={handleDateChange}
          disableFuture={true}
          />
      </MuiPickersUtilsProvider>

    </Fragment>
  );
}

export default FullDatePicker;
