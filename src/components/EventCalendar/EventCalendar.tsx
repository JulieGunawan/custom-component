import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Controls from "./Controls";

const EventCalendar = () => {
  return (
    <div>
        <Paper sx={{ width:'100%', border:'1px solid rgba(0,0,0,0.12)'}}>
            <Controls />
            <Typography>Calendar Grid</Typography>
        </Paper>
    </div>>
  );
};

export default EventCalendar;
