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
import { OtherBuffsHTMLButton } from "./styles";
import { useState } from "react";

export function RaidsDamageCalculator() {
  const [baseMov, setBaseMov] = useState<number>(0);

  const [yearning, setYearning] = useState<number>(0);

  const [yearningIndex, setYearningIndex] = useState<number>(0);

  const [vernese, setVernese] = useState<number>(0);

  const [feast, setFeast] = useState<number>(0);

  const [otherBuffsArray, setOtherBuffsArray] = useState<Array<number>>([]);

  const onChangeBaseMovement = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = parseFloat(e.target.value);

    isNaN(value) ? setBaseMov(0) : setBaseMov(darksideClamp(value, 0, 140));

    function darksideClamp(value: number, min: number, max: number) {
      return Math.min(max, Math.max(min, value));
    }
  };

  const onChangeYearning = (event: any) => {
    setYearning(event.target.value);
    setYearningIndex(event.target.value);
  };

  const onChangeVernese = () => {
    vernese > 0 ? setVernese(0) : setVernese(0.03);
  };

  const onChangeFeast = () => {
    feast > 0 ? setFeast(0) : setFeast(0.05);
  };

  const onKeyDownOtherBuffs = (event: any) => {
    if (event.key === "Enter" && Number(event.target.value)) {
      const float = parseFloat(event.target.value);
      setOtherBuffsArray([...otherBuffsArray, float]);
      event.target.value = "";
    }
  };

  const onClickOtherBuffs = (event: any) => {
    const target = event.target.id;
    const arr = [...otherBuffsArray];
    arr.splice(target, 1);
    setOtherBuffsArray(arr);
  };

  const otherBuffsArraySum = () => {
    if (otherBuffsArray.length > 0) {
      return otherBuffsArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    } else {
      return 0;
    }
  };

  const totalMovSpd =
    baseMov *
    (+yearning + +vernese + +feast + +(otherBuffsArraySum() / 100) + 1);

  const calc =
    Math.ceil((totalMovSpd - 100) * 0.45) > 0
      ? Math.ceil((totalMovSpd - 100) * 0.45)
      : 0;

  return (
    <>
      <Box padding={"10%"} display={"flex"} flexDirection={"column"}>
        <TextField
          placeholder="Base movement speed %"
          onChange={(e) => onChangeBaseMovement(e)}
          type="number"
        />
        <FormControl variant="outlined" style={{ marginTop: "10%" }}>
          <InputLabel id="buff-select-label" style={{ zIndex: "-1" }}>
            Yearning Buff
          </InputLabel>
          <Select
            value={yearningIndex}
            onChange={onChangeYearning}
            labelId="buff-select-label"
            label="Buff Percentage"
          >
            <MenuItem value={0}>lvl 0</MenuItem>
            <MenuItem value={0.08}>lvl 1</MenuItem>
            <MenuItem value={0.1}>lvl 2</MenuItem>
            <MenuItem value={0.12}>lvl 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl component="fieldset" style={{ marginTop: "10%" }}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="vernese"
                  color="primary"
                  onChange={onChangeVernese}
                />
              }
              label="Vernese Wine"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="feast"
                  color="primary"
                  onChange={onChangeFeast}
                />
              }
              label="Stronhold Feast"
            />
          </FormGroup>
        </FormControl>
        <Box>
          <TextField
            type="number"
            placeholder="Other speed buffs"
            onKeyDown={onKeyDownOtherBuffs}
          />
          <Box style={{ display: "flex", overflow: "auto", margin: "1svh" }}>
            {otherBuffsArray.map((buff, i) => {
              return (
                <OtherBuffsHTMLButton
                  key={i}
                  id={i.toString()}
                  variant="contained"
                  onClick={(event) => onClickOtherBuffs(event)}
                >
                  {buff}
                </OtherBuffsHTMLButton>
              );
            })}
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          position={"fixed"}
          bottom={"0"}
          left={"0"}
          width={"100%"}
        >
          <InputLabel
            id="result-label"
            style={{ position: "absolute", top: "-15%" }}
          >
            Movement Speed / Total Damage
          </InputLabel>
          <Typography
            variant="body1"
            style={{
              fontSize: "1.6rem",
              width: "50%",
              paddingTop: "5%",
              paddingBottom: "5%",
            }}
          >
            {Math.ceil(totalMovSpd)}
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontSize: "1.6rem",
              width: "50%",
              paddingTop: "5%",
              paddingBottom: "5%",
            }}
          >
            {calc}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
