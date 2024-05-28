import { Box, TextField } from "@mui/material";
import { useState } from "react";

export function MovToDmgConvert() {
  const [result, setResult] = useState<string | number>(
    "Formula = ((MaxMovSped = 140% )-100)*0.45 = 18%"
  );

  const movSpdCalc = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = parseInt(e.target.value);

    if (isNaN(value)) {
      setResult("Formula = ((MaxMovSped = 140% )-100)*0.45 = 18% ");
    } else {
      const calc = (value - 100) * 0.45;
      setResult(Math.ceil(calc) + "%");
    }
    console.log(result);
  };

  return (
    <>
      <Box padding={"10%"}>
        <TextField
          placeholder="mov spd %"
          onChange={(e) => movSpdCalc(e)}
          type="number"
        />
        <div>
          <p>{result}</p>
        </div>
      </Box>
    </>
  );
}
