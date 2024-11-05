import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function CustomAppBar() {
  const navigate = useNavigate();
  const menuItems = ["Home", "Maxroll", "Lost Ark Nexus"];
  const links = ["https://maxroll.gg/lost-ark", "https://www.lostark.nexus/"];

  const onClickMenuItem = (item:string)=>{
    switch (item) {
      case "Maxroll":
        window.open(links[0], "_blank");
        break;
      case "Lost Ark Nexus":
        window.open(links[1], "_blank");
        break;
      case "Home":
      default:
        navigate("/");
        break;
  }
}

  return (
    <AppBar position="static" sx={{ bgcolor: 'black', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', gap: 4 }}>
          {menuItems.map((item, index) => (
            <Box
              key={index}
              onClick={()=>onClickMenuItem(item)}
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: 'white',
                fontSize: '0.9rem',
                '&:hover': {
                  color: '#4dabf5',
                },
              }}
            >
              <Typography>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
