// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "./components/layout/Dashboard";
import DailyCalculation from "./pages/DailyCalculation";
import CityLadger from "./pages/CityLadger";
import VillageLadger from "./pages/VillageLadger";
import StockCement from "./pages/StockCement";
import RegularLadger from "./pages/RegularLadger";


function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/daily-calculation" element={<DailyCalculation />} />
          <Route path="/city-ladger" element={<CityLadger />} />
          <Route path="/village-ladger" element={<VillageLadger />} />
           <Route path= "/regular-ladger" element={<RegularLadger />} />
         
          <Route path="/stock-cement" element={<StockCement />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
