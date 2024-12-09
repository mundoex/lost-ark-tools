import { Box, Typography } from "@mui/material";
import { ItemsList } from "../../common/consts";
import { ItemEnum } from "../../common/ItemEnum";

interface ItemAndNumberProps {
    item: ItemEnum;
    quantity: number | string;
    marginLeft?: number;
}

export function ItemAndNumber(props: ItemAndNumberProps) {
    return <Box sx={{ display: 'flex', flexDirection: "row", alignItems: "center", marginLeft: 0.5 }}>
        <Typography variant="body2" sx={{ fontWeight: 'bold', marginRight: 0.5 }}>
            {`x${props.quantity}`}
        </Typography>
        <Box component="img" alt={props.item} src={ItemsList[props.item].image} sx={{ width: 24, height: 24, marginLeft: props?.marginLeft }} />
    </Box>;
}