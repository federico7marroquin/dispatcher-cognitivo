import React, { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";

function InlineDatePickerDemo(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <DatePicker
        variant="inline"
        label="Basic example"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <DatePicker
        disableToolbar
        variant="inline"
        label="Only calendar"
        helperText="No year selection"
        value={selectedDate}
        onChange={handleDateChange}
      />

    </Fragment>
  );
}

export default InlineDatePickerDemo;
