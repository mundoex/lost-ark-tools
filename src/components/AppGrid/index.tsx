import { Grid } from "@mui/material";
import {AppCard, AppCardProps} from "../AppCard";
import { useNavigate } from "react-router-dom";
import { DARK_FIRE_SRC, GOLD_IMAGE_SRC } from "../../assets/images-src";

export function AppGrid() {
    const navigate = useNavigate();

    const apps:AppCardProps[]=[
        {
            imagePath: "./abilitystone.png",
            title: "Ability Stone Cutter",
            subtitle: "Helps cutting stones",
            external: true,
            onClick: ()=> window.open('https://lostark.meta-game.gg/ability-stone-calculator','_blank')
        },
        {
            imagePath: "./la-tools.png",
            title: "Crafting Calculator",
            subtitle: "Calculates profitable crafts",
            external: true,
            onClick: ()=> window.open('https://la-tools.com/crafting-calculator','_blank')
        },
        {
            imagePath: "./honing-calc.png",
            title: "Honing Calculator",
            subtitle: "Helps calculate price of honing",
            external: true,
            onClick: ()=> window.open('https://maxroll.gg/lost-ark/upgrade-calculator','_blank')
        },
        {
            imagePath: "./helm.png",
            title: "Item Level Calculator",
            subtitle: "Helps calculate item level",
            external: false,
            onClick: ()=> navigate("/item-level-calc")
        },
        {
            imagePath: GOLD_IMAGE_SRC,
            title: "Raids gold calculator",
            subtitle: "Calculate weekly raids gold",
            external: false,
            onClick: ()=> navigate("/raids-gold")
        },
        {
            imagePath: DARK_FIRE_SRC,
            title: "Jail Check",
            subtitle: "Help check for jailers",
            external: false,
            onClick: ()=> navigate("/jail-check")
        },
    ];
  
    return (
      <Grid sx={{ flexGrow: 1, marginTop:0 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            {apps.map((app) => (
              <Grid key={app.title} item>
                <AppCard {...app}/>                
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }