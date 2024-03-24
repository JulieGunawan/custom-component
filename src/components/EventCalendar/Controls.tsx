import { IconButton, Stack, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import moment from "moment";
import React from "react";
import { FC } from "react";

interface Prop {
  children?: React.ReactNode;
}

const Controls: FC<Prop> = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      padding="0.5em 1em"
      borderBottom="1px solid rgba(0,0,0,0.12)"
    >
      <Stack direction="row">
        <IconButton size="small" color="primary">
          <ArrowBackIos />
        </IconButton>
        <IconButton>
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Typography variant="h5">{moment().format("MMMM, YYYY")}</Typography>
    </Stack>
  );
};

export default Controls;
