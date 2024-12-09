
import { Box, TextField, Typography } from "@mui/material";
import { MarketPriceData } from "../../common/MarketPriceData";
import { MarketPricesContext } from "../../context/MarketPrices";
import { useContext } from "react";
import { ItemsList } from "../../common/consts";
import { ItemEnum } from "../../common/ItemEnum";

export function ItemRow(item: MarketPriceData) {  
  const bundleString = item.bundleSize ? `x${item.bundleSize}` : '';
  const context = useContext(MarketPricesContext);

  const setPrice=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name:string)=> {
    const num=parseFloat(e.target.value)
    if(!isNaN(num)){
      context?.setPrice(name, parseFloat(e.target.value));
    }else{
      context?.setPrice(name, 0);
    }
  }

  return (<Box
    sx={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#1e1e1e',
      maxWidth: 300,
      padding: 1,
      borderRadius: 1,
      color: '#ffffff',
    }}
  >
    <Box
      component="img"
      src={ItemsList[item.name as ItemEnum].image}
      alt={item.name}
      sx={{
        width: 24,
        height: 24,
        marginRight: 1,
      }}
    />
    <Typography
      variant="body2"
      sx={{
        fontWeight: 'bold',
        marginRight: 'auto',
        maxWidth: 150,
        maxHeight: 60,
      }}
    >
      {`${item.name} ${bundleString}`}
    </Typography>

    <TextField
      variant="outlined"
      size="small"
      value={item.price === 0 ? "" : item.price}
      onChange={(e)=>setPrice(e, item.name)}
      sx={{
        width: 70,
        minWidth: 50,
      }}
    />
  </Box>
  )
};
