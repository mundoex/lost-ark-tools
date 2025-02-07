import { Grid } from "@mui/material";
import { AppCard } from "../AppCard";
import { useNavigate } from "react-router-dom";
import { ItemEnum } from "../../common/Items/ItemEnum";
import { ItemsList } from "../../constants/ItemList";
import { AppCardProps } from "../AppCard/types";
import { BASE_URL } from "../../constants";

export function AppGrid() {
  const navigate = useNavigate();

  const apps: AppCardProps[] = [
    {
      imagePath: ItemsList[ItemEnum.ABILITY_STONE].image,
      title: "Ability Stone Cutter",
      subtitle: "Helps cutting stones",
      external: true,
      onClick: () => window.open('https://lostark.meta-game.gg/ability-stone-calculator', '_blank')
    },
    {
      imagePath: ItemsList[ItemEnum.ABIDOS_FUSION_MATERIAL].image,
      title: "Crafting Calculator",
      subtitle: "Calculates profitable crafts",
      external: true,
      onClick: () => window.open('https://la-tools.com/crafting-calculator', '_blank')
    },
    {
      imagePath: `${BASE_URL}honing-calc.png`,
      title: "Honing Calculator",
      subtitle: "Helps calculate price of honing",
      external: true,
      onClick: () => window.open('https://maxroll.gg/lost-ark/upgrade-calculator', '_blank')
    },
    {
      imagePath: `${BASE_URL}helm.png`,
      title: "Item Level Calculator",
      subtitle: "Helps calculate item level",
      external: false,
      onClick: () => navigate("/item-level-calc")
    },
    {
      imagePath: ItemsList[ItemEnum.HELLFIRE_KEYSTONE].image,
      title: "Raids gold calculator",
      subtitle: "Calculate weekly raids gold",
      external: false,
      onClick: () => navigate("/raids-gold")
    },
    {
      imagePath: ItemsList[ItemEnum.DARK_FIRE].image,
      title: "Jail Check",
      subtitle: "Help check for jailers",
      external: false,
      onClick: () => navigate("/jail-check")
    },
    {
      imagePath: ItemsList[ItemEnum.DESTINY_LEAPSTONE].image,
      title: "Market Prices",
      subtitle: "Set item prices for other apps",
      external: false,
      onClick: () => navigate("/market-prices")
    },
    {
      imagePath: ItemsList[ItemEnum.GOLD].image,
      title: "Item Gold Efficiency",
      subtitle: "Various gold maths",
      external: false,
      onClick: () => navigate("/gold-efficiency")
    },
    {
      imagePath: ItemsList[ItemEnum.TIER_4_GEM_LVL_7].image,
      title: "Cubes & Gems (BETA)",
      subtitle: "Cube & Gems maths Beta version",
      external: false,
      onClick: () => navigate("/cubes-and-gems")
    },
  ];

  return (
    <Grid sx={{ flexGrow: 1, marginTop: 0 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          {apps.map((app) => (
            <Grid key={app.title} item>
              <AppCard {...app} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}