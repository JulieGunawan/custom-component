import { Stack } from "@mui/material";
import React from "react";
import EventCalendar from "./components/EventCalendar/EventCalendar";

const App = () => {
  return (
    <Stack width="100%" minHeight="100vh" justifyContent="center" padding="1em">
      <EventCalendar />
    </Stack>
  );
};

export default App;
