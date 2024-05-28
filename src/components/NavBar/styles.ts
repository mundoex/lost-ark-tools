import { styled } from "@mui/material";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/material";

export const CustomMenuItem = styled(MenuItem)(
  ({}) => `
    color: white;
    text-decoration:none;
    font-size: 2rem;
    `
);

export const Listbox = styled("ul")(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: rgba(45,114,210,255);
    color: white;
    border-radius:10px;
    box-shadow: 0px 4px 6px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.50)" : "rgba(0,0,0, 0.05)"
    };
    z-index: 1;
    `
  // ${theme.palette.mode === "dark" ? "grey" : "#fff"};
  // ${theme.palette.mode === "dark" ? "grey" : "grey"};
);

export const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === "dark" ? "grey" : "#fff"};
    border: 1px solid white;
    color: ${theme.palette.mode === "dark" ? "grey" : "grey"};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  
  
    &:focus-visible {
      outline: none;
    }
    `
);
