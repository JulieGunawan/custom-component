import { Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Controls from "./Controls";
import useEventCalendar from "./useEventCalendar";
import Day from "./Day";

const EventCalendar = () => {
  const { date, changeMonth, daysGrid } = useEventCalendar();
  return (
    <div>
      <Paper sx={{ width: "100%", border: "1px solid rgba(0,0,0,0.12)" }}>
        <Controls changeMonth={changeMonth} date={date} />
        <Grid container spacing={1} padding="0.5em">
          {daysGrid.map((item, i) =>
            item.no ? (
              <Day key={i} daysGridLength={daysGrid.length} item={item} i={i} />
            ) : null
          )}
        </Grid>
      </Paper>
    </div>
  );
};

export default EventCalendar;
