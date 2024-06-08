import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import { ItemLeverCalculator } from "./components/ItemLevelCalculator";
import { StatsCalculator } from "./components/StatsCalculator";
import { RaidsDamageCalculator } from "./components/RaidsCaptainCalculator";
import { NavBar } from "./components/NavBar";
import { RaidsInfo } from "./components/RaidsInfo";

const routesObj = [
  { path: "/item-level-calc", Component: ItemLeverCalculator },
  { path: "/stats-calc", Component: StatsCalculator },
  { path: "/raids-gold", Component: RaidsInfo },
  { path: "/raids-dmg-calc", Component: RaidsDamageCalculator },
];

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <div style={{ minWidth: "100%" }}>
          <Routes>
            {routesObj.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
