import { DaysGrid } from "@/types/types";
import { Grid, Typography, useTheme } from "@mui/material";
import moment from "moment";
import React, { FC } from "react";

interface Props {
  i: number;
  daysGridLength: number;
  item: DaysGrid;
}

const Day: FC<Props> = ({ daysGridLength, item, i }) => {
  const theme = useTheme();
  const getWeekDays = () => ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const weekDays = getWeekDays();
  const isSameDate = moment().isSame(item.date, "day");
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
          <Typography
            variant="caption"
            color={theme.palette.getContrastText(
              isSameDate ? theme.palette.primary.main : "#FFF"
            )}
            sx={{
              backgroundColor: 
            }}
          >
            {item.date.format("DD")}
          </Typography>
        </>
      )}
    </Grid>
  );
};

export default Day;
