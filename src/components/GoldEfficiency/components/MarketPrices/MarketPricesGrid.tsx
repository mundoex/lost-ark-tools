import { Box, Grid, Typography } from '@mui/material';
import { ItemRow } from './ItemRow';
import { MarketPricesContext } from '../../../../context/MarketPrices';
import { useContext, useMemo } from 'react';
import { MarketPriceData } from '../../../../common/Market/MarketPriceData';
import { ItemEnum } from '../../../../common/Items/ItemEnum';
import { MarketPriceDataBlocks } from './data';

function MarketPriceBlock({category, itemList}:{category:string, itemList: MarketPriceData[]}){
  return <Grid item md={4}>
    <Box sx={{ backgroundColor: '#1e1e1e', padding: 1, width: 600, margin: 0.5 }}>
      <Typography sx={{ fontWeight: 'bold', marginBottom: 1 }}>
        {category}
      </Typography>
      <Grid container spacing={1} width="100%">
        {itemList.map((item,  index) => {
          return <Grid item xs={12} md={6} key={index}>
            <Box
              sx={{
                backgroundColor: '#2b2b2b',
                borderRadius: 1,
                padding: 1.2,
                color: '#ffffff',
                width: 275,
              }}
            >
              <ItemRow {...item} />
            </Box>
          </Grid>
        })}
      </Grid>
    </Box>
  </Grid>
}

export function MarketPricesGrid(){
  const context = useContext(MarketPricesContext);
  const marketPrices = context.marketPrices;
  const blocksData = useMemo(()=>{
    return MarketPriceDataBlocks.map((block)=>({category:block.name, itemList:[...marketPrices].filter((item)=>block.names.includes(item.name as ItemEnum))}));
  },[MarketPriceDataBlocks, marketPrices])

  return (
    <Grid container>
      {blocksData.map((bData)=>(<MarketPriceBlock key={bData.category} {...bData}/>))}
    </Grid>
  );
};
