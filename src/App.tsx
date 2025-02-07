import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import { ItemLeverCalculator } from "./components/ItemLevelCalculator";
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { RaidsInfo } from "./components/RaidsInfo";
import { AppGrid } from "./components/AppGrid";
import { CustomAppBar } from "./components/CustomAppBar";
import { JailCheck } from "./components/JailCheck";
import { MarketPrices } from "./components/GoldEfficiency/components/MarketPrices";
import { GoldEfficiency } from "./components/GoldEfficiency";
import { CubeAndGems } from "./components/CubeAndGems";

const routesObj = [
  { path: "", Component: AppGrid },
  { path: "/item-level-calc", Component: ItemLeverCalculator },
  { path: "/raids-gold", Component: RaidsInfo },
  { path: "/jail-check", Component: JailCheck },
  { path: "/market-prices", Component: MarketPrices },
  { path: "/gold-efficiency", Component: GoldEfficiency },
  { path: "/cubes-and-gems", Component: CubeAndGems },
];

const darkTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4dabf5', // Customize primary color
    },
    secondary: {
      main: '#ff4081', // Customize secondary color
    },
    background: {
      default: '#121212', // Dark background color
      paper: '#1d1d1d',   // Slightly lighter for paper elements
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 700 },
    h3: { fontSize: '1.75rem', fontWeight: 700 },
    body1: { fontSize: '1rem', color: '#ffffff' },
    body2: { fontSize: '0.875rem', color: '#b0b0b0' },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#333', // Darker AppBar
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded corners
          textTransform: 'none', // Prevent uppercase text
          padding: '8px 16px',
        },
        contained: {
          backgroundColor: '#4dabf5',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#1e88e5',
          },
        },
        outlined: {
          borderColor: '#4dabf5',
          color: '#4dabf5',
          '&:hover': {
            borderColor: '#1e88e5',
            backgroundColor: 'rgba(77, 171, 245, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1d1d1d',
          color: '#fff',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
          borderRadius: '12px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ffffff', // Default typography color in dark mode
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <HashRouter>
      <CustomAppBar/>
        <div style={{ minWidth: "100%" }}>
          <Routes>
            {routesObj.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
