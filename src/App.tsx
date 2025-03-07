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
import { Planner } from "./components/Planner";
import { CritCalculator } from "./components/CritCalculator";

const routesObj = [
  { path: "", Component: AppGrid },
  { path: "/item-level-calc", Component: ItemLeverCalculator },
  { path: "/raids-gold", Component: RaidsInfo },
  { path: "/jail-check", Component: JailCheck },
  { path: "/market-prices", Component: MarketPrices },
  { path: "/gold-efficiency", Component: GoldEfficiency },
  { path: "/cubes-and-gems", Component: CubeAndGems },
  { path: "/planner/:playerName?", Component: Planner },
  { path: "/crit-calc", Component: CritCalculator },
];

const darkTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light blue for primary
    },
    secondary: {
      main: '#f48fb1', // Light pink for secondary
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e',   // Slightly lighter for paper elements
    },
    text: {
      primary: '#ffffff',  // White for primary text
      secondary: '#b3b3b3', // Light gray for secondary text
    },
    divider: 'rgba(255, 255, 255, 0.12)', // Subtle divider color
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 700 },
    h3: { fontSize: '1.75rem', fontWeight: 700 },
    body1: { fontSize: '1rem', color: '#ffffff' },
    body2: { fontSize: '0.875rem', color: '#b3b3b3' },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#1e1e1e', // Darker AppBar
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
          backgroundColor: '#90caf9', // Primary color for contained buttons
          color: '#121212', // Dark text for contrast
          '&:hover': {
            backgroundColor: 'rgba(0, 79, 143, 0.08)', // Slightly lighter on hover
          },
        },
        outlined: {
          borderColor: '#ffffff', // Primary color for outlined buttons
          color: '#ffffff', // Primary color for text
          '&:hover': {
            borderColor: 'rgba(255, 255, 255, 0.5)', // Slightly lighter on hover
            backgroundColor: 'rgba(147, 157, 165, 0.1)', // Subtle hover background
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e', // Dark background for cards
          color: '#ffffff', // White text for cards
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)', // Subtle shadow
          borderRadius: '12px', // Rounded corners
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
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255, 255, 255, 0.12)', // Subtle divider color
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <HashRouter>
        <CustomAppBar />
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
