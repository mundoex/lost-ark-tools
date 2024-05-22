import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemLeverCalculator } from './components/ItemLevelCalculator';
import { StatsCalculator } from './components/StatsCalculator';
import { NavBar } from './components/NavBar';
import { RaidsInfo } from './components/RaidsInfo';

const routesObj=[
  {path: "/item-level-calc", Component: ItemLeverCalculator},
  {path: "/stats-calc", Component: StatsCalculator},
  {path: "/raids-gold", Component: RaidsInfo},
];

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <div style={{minWidth:"100%", padding:"48px"}}>
        <Routes>
          {routesObj.map(({path, Component})=> <Route key={path} path={path} element={<Component/>}/>)}
        </Routes>
      </div>

    </BrowserRouter>
    </>
  )
}

export default App
