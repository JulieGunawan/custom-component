import { DaysGrid } from "@/types/types";
import { Grid, Typography } from "@mui/material";
import React, { FC } from "react";

interface Props {
  i: number;
  daysGridLength: number;
  item: DaysGrid;
}

const Day: FC<Props> = ({ daysGridLength, item, i }) => {
  const getWeekDays = () => ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const weekDays = getWeekDays();

  return (
    <Grid
      item
      textAlign="center"
      height="8rem"
      overflow="auto"
      width={`${100 / 7}%`}
    >
      {i < 7 && (
        <>
          <Typography variant="caption" gutterBottom color="rgb(0,0,0,0.8)">
            {weekDays[i]}
          </Typography>
          <Typography>{item.date.format("DD")}</Typography>
        </>
      )}
    </Grid>
  );
};

export default Day;
