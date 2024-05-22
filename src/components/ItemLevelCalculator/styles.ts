import { Button, TextField, styled } from "@mui/material"
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

export const UpDownButton=styled(Button)({
    height:"20px",
    width:"40px",
    fontWeight:"bold",
    fontSize:"5px",
    alignItems:"center",
    minWidth:"40px",
    ":focus":{
        outline:"none",
    }
});

export const CustomNorthIcon=styled(NorthIcon)({
    margin:0,
});

export const CustomSouthIcon=styled(SouthIcon)({
    margin:0,
});

export const CustomTextField=styled(TextField)({
    maxWidth:"100px",
});

