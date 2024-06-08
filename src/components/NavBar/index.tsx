import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { Link } from "react-router-dom";
import { Listbox, MenuButton, CustomMenuItem } from "./styles";
import LinkIcon from "@mui/icons-material/Link";
import CalculateIcon from "@mui/icons-material/Calculate";

const links = [
  { path: "item-level-calc", name: "Item Level" },
  { path: "stats-calc", name: "Stats" },
  { path: "raids-gold", name: "Raids Gold" },
  {
    path: "https://maxroll.gg/lost-ark/upgrade-calculator",
    name: "Upgrade Material",
  },
  {
    path: "https://lostark.meta-game.gg/ability-stone-calculator",
    name: "Ability Stone",
  },
  {
    path: "https://la-tools.com/crafting-calculator",
    name: "Stronghold Crafting",
  },
  { path: "https://loa-todo.com/engrave", name: "Engraving" },
  { path: "/raids-dmg-calc", name: "Raids Captain" },
];

export function NavBar() {
  return (
    <AppBar>
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "flex" },
            height: "fit-content",
          }}
        >
          <Dropdown>
            <MenuButton
              sx={{
                my: 2,
                color: "white",
                backgroundColor: "#1976d2",
                display: "block",
                ":hover": "none",
                border: "none",
                height: "fit-content",
                margin: { xs: "0 auto", md: "0" },
              }}
            >
              <CalculateIcon
                sx={{
                  height: { md: "10svh", xs: "20svh" },
                  width: { md: "10svh", xs: "20svh" },
                }}
              />
            </MenuButton>
            <Menu slots={{ listbox: Listbox }}>
              {links.map(({ path, name }) => (
                <Link
                  style={{ textDecoration: "none" }}
                  key={path}
                  to={path}
                  target={path.includes("http") ? "_blank" : ""}
                >
                  <CustomMenuItem>
                    {name}
                    {path.includes("http") && (
                      <LinkIcon style={{ paddingInline: "2px" }} />
                    )}
                  </CustomMenuItem>
                </Link>
              ))}
            </Menu>
          </Dropdown>
        </Box>
      </Container>
    </AppBar>
  );
}
