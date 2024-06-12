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
      borderTop="none"
      paddingTop="0.3em"
      borderRight="none"
      borderBottom={() => {
        if (!(i > 7 * Math.floor(daysGridLength / 7) - 1))
          return "1px solid rgb(0, 0, 0, 0.12)";
      }}
      borderLeft={() => {
        if (i % 7 !== 0) return "1px solid rgb(0, 0, 0, 0.12)";
      }}
    >
      {/* Show the Day name*/}
      {i < 7 && (
        <>
          <Typography variant="caption" gutterBottom color="rgb(0,0,0,0.8)">
            {weekDays[i]}
          </Typography>
          <br />
        </>
      )}
      {/** Show the day number */}
      <Typography
        variant="caption"
        color={theme.palette.getContrastText(
          isSameDate ? theme.palette.primary.main : "#FFF"
        )}
        sx={{
          backgroundColor: isSameDate
            ? theme.palette.primary.main
            : "transparent",
          borderRadius: "50%",
          padding: "0.5em",
        }}
      >
        {/* {item.date.format("DD")} */}
        {item.no}
      </Typography>
    </Grid>
  );
};

export default Day;
