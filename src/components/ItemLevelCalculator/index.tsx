import { useState } from "react";
import { GEAR_LEVELS, GEAR_NAMES } from "../../common/consts";
import { Box } from "@mui/material";
import {
  CustomNorthIcon,
  CustomSouthIcon,
  CustomTextField,
  UpDownButton,
} from "./styles";

export function ItemLeverCalculator() {
  const [values, setValues] = useState(new Array(6).fill(0));

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number
  ) => {
    values[i] = parseInt(e.target.value);
    setValues(Array.from(values));
  };

  const calculateItemLevel = () =>
    values.reduce((a, b) => (a += b)) / values.length;

  const onClickUp = (i: number) => {
    const valueInCheck = values[i];
    if (valueInCheck >= GEAR_LEVELS[GEAR_LEVELS.length - 1]) return;

    const indexFound = GEAR_LEVELS.findIndex((lvl) => lvl > valueInCheck);
    values[i] = GEAR_LEVELS[indexFound];
    setValues(Array.from(values));
  };

  const onClickDown = (i: number) => {
    const valueInCheck = values[i];
    if (valueInCheck <= GEAR_LEVELS[0]) return;

    const indexFound = GEAR_LEVELS.findIndex((lvl) => lvl > valueInCheck);
    if (indexFound > 0) {
      values[i] = GEAR_LEVELS[indexFound - 2];
    } else {
      values[i] = GEAR_LEVELS[GEAR_LEVELS.length - 2];
    }
    setValues(Array.from(values));
  };

  return (
    <>
      <Box
        className="bananoid"
        component="div"
        display="flex"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          position: "relative",
          zIndex: "-1",
          justifyContent: "center",
          top: { md: "1svh", xs: "1svh" },
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        {GEAR_NAMES.map((item, i) => {
          return (
            <div key={item} style={{ display: "flex", flexDirection: "row" }}>
              <CustomTextField
                onChange={(e) => onChange(e, i)}
                label={item}
                size="small"
                value={values[i]}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "center",
                }}
              >
                <UpDownButton
                  onClick={() => onClickUp(i)}
                  startIcon={<CustomNorthIcon />}
                />
                <UpDownButton
                  onClick={() => onClickDown(i)}
                  startIcon={<CustomSouthIcon />}
                />
              </div>
            </div>
          );
        })}
        <CustomTextField
          label="Item Level"
          disabled
          variant="outlined"
          size="small"
          value={calculateItemLevel().toFixed(2)}
        />
      </Box>
    </>
  );
}
