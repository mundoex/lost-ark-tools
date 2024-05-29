import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControlLabel,
  FormGroup,
  FormControl,
  InputLabel,
  Checkbox,
  Typography,
} from "@mui/material";

import { useState } from "react";

export function MovToDmgConvert() {
  const [baseMov, setBaseMov] = useState<number>(0);

  const [yearning, setYearning] = useState<number>(0);

  const [defaultValue, setDefaultValue] = useState(0);

  const [checkA, setcheckA] = useState(0);

  const [checkB, setcheckB] = useState(0);

  const baseMovSelect = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = parseInt(e.target.value);

    if (isNaN(value)) {
      setBaseMov(0);
      return;
    }
    if (value > 140) {
      setBaseMov(140);
      return;
    }
    setBaseMov(value);
  };

  const yearningSet = (event: any) => {
    setYearning(event.target.value);
    setDefaultValue(event.target.value);
  };

  const handleCheckChangeA = () => {
    checkA > 0 ? setcheckA(0) : setcheckA(0.03);
  };

  const handleCheckChangeB = () => {
    checkB > 0 ? setcheckB(0) : setcheckB(0.05);
  };

  const totalMovSpd = baseMov * (+yearning + +checkA + +checkB + 1);

  const calc = Math.ceil((totalMovSpd - 100) * 0.45);

  const result = () => {
    if (calc < 0) {
      return 0;
    }
    return calc;
  };

  return (
    <>
      <Box padding={"10%"} display={"flex"} flexDirection={"column"}>
        <TextField
          placeholder="base mov spd %"
          onChange={(e) => baseMovSelect(e)}
          type="number"
        />
        <FormControl variant="outlined" style={{ marginTop: "10%" }}>
          <InputLabel id="buff-select-label" style={{ zIndex: "-1" }}>
            Yearning Buff
          </InputLabel>
          <Select
            value={defaultValue}
            onChange={yearningSet}
            labelId="buff-select-label"
            label="Buff Percentage"
          >
            <MenuItem value={0}>No buff</MenuItem>
            <MenuItem value={0.08}>8%</MenuItem>
            <MenuItem value={0.1}>10%</MenuItem>
            <MenuItem value={0.12}>12%</MenuItem>
          </Select>
        </FormControl>
        <FormControl component="fieldset" style={{ marginTop: "10%" }}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="checkedA"
                  color="primary"
                  onChange={handleCheckChangeA}
                />
              }
              label="Vernese Wine"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                  onChange={handleCheckChangeB}
                />
              }
              label="Stronhold Feast"
            />
          </FormGroup>
        </FormControl>
        <InputLabel id="result-label" style={{ marginTop: "15%" }}>
          Total Damage
        </InputLabel>
        <Typography
          variant="body1"
          style={{ fontSize: "1.6rem", marginTop: "5%" }}
        >
          {result()}
        </Typography>
      </Box>
    </>
  );
}
