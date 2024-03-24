import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Controls from "./Controls";
import useEventCalendar from "./useEventCalendar";

const EventCalendar = () => {
  const { date, getMonthDaysGrid, changeMonth } = useEventCalendar();
  return (
    <div>
      <Paper sx={{ width: "100%", border: "1px solid rgba(0,0,0,0.12)" }}>
        <Controls changeMonth={changeMonth} date={date} />
        <Typography>Calendar Grid</Typography>
      </Paper>
    </div>
  );
};

export default EventCalendar;
