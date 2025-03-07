import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { BASE_URL } from "../../constants";

const images=[
  `${BASE_URL}helm.png`,
  `${BASE_URL}body.png`,
  `${BASE_URL}shoulder.png`,
  `${BASE_URL}legs.png`,
  `${BASE_URL}gloves.png`,
  `${BASE_URL}weapon.png`,
];

export function ItemLeverCalculator() {
  const [itemLevels, setItemLevels]=useState(new Array(6).fill(0));
  const totalItemLevel = itemLevels.reduce((a, b) => (a += b)) / itemLevels.length;
  const onChangeItemLevel=(index:number, e: React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>)=>{
    itemLevels[index]=parseInt(e.target.value);
    setItemLevels([...itemLevels])
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, justifySelf:"center", marginTop:"24px" }}>
      {images.map((image, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

          <img src={image} alt={`Item ${index + 1}`} style={{ width: 50, height: 50, borderRadius: 4 }} />

          <TextField
            variant="outlined"
            size="small"
            placeholder={'Item Level'}
            sx={{ width: '100%' }}
            style={{ width: 75, height: 50, borderRadius: 4 }}
            onChange={(e)=>onChangeItemLevel(index,e)}
            value={itemLevels[index]}
          />
        </Box>
      ))}
      <TextField
        variant="outlined"
        size="small"
        placeholder={'Item Level'}
        sx={{ width: '100%' }}
        value={totalItemLevel.toFixed(2)}
        style={{ width: 120, height: 50, borderRadius: 4 }}
      />
    </Box>
  );
};