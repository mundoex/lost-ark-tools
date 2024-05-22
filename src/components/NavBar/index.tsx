import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { Link } from "react-router-dom";
import { Listbox, MenuButton } from './styles';
import { MenuItem } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

const links = [
  {path:"item-level-calc", name:"Item Level Calculator"},
  {path:"stats-calc", name:"Stats Calculator"},
  {path:"raids-gold", name:"Raids Gold Calculator"},
  {path:"https://maxroll.gg/lost-ark/upgrade-calculator", name:"Upgrade Material Calculator"},
  {path:"https://lostark.meta-game.gg/ability-stone-calculator", name:"Ability Stone Calculator"},
  {path:"https://la-tools.com/crafting-calculator", name:"Stronghold Crafting Calculator"},
  {path:"https://loa-todo.com/engrave", name:"Engraving Calculator"},
];

export function NavBar() {
  return (
    <AppBar>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Dropdown>
            <MenuButton sx={{ my: 2, color: 'white', backgroundColor: '#1976d2', display: 'block', ":hover": "none" }}>Calculators</MenuButton>
            <Menu slots={{ listbox: Listbox }}>
              {links.map(({path,name})=>(<Link key={path} to={path} target={path.includes("http") ? "_blank" : ""}> 
                <MenuItem>
                  {name}
                  {path.includes("http") && <LinkIcon style={{paddingInline:"2px"}}/>}
                </MenuItem>
              </Link>))}
            </Menu>
          </Dropdown>
        </Box>
      </Container>
    </AppBar>
  );
}
