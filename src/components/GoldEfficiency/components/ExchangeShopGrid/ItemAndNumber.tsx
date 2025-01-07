import { Box, Typography } from "@mui/material";
import { ItemEnum } from "../../../../common/Items/ItemEnum";
import { ItemsList } from "../../../../constants/ItemList";

interface ItemAndNumberProps {
    item: ItemEnum;
    quantity: number | string;
    marginLeft?: number;
    size?:number;
}

const DEFAULT_SIZE = 24;

export function ItemAndNumber(props: ItemAndNumberProps) {
    const size = props?.size ? props.size : DEFAULT_SIZE;
    return <Box sx={{ display: 'flex', flexDirection: "row", alignItems: "center", marginLeft: 0.5 }}>
        <Typography variant="body2" sx={{ fontWeight: 'bold', marginRight: 0.5 }}>
            {`x${props.quantity}`}
        </Typography>
        <Box component="img" alt={props.item} src={ItemsList[props.item].image} sx={{ width: size, height: size, marginLeft: props?.marginLeft }} />
    </Box>;
}