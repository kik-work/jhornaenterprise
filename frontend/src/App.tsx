// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "./components/layout/Dashboard";
import DailyCalculation from "./pages/DailyCalculation";
import CityLadger from "./pages/CityLadger";
import VillageLadger from "./pages/VillageLadger";
import StockCement from "./pages/StockCement";
import RegularLadger from "./pages/RegularLadger";
import React from "react";
import DailyCalculationBuySell from "./pages/dailycalculationfiles/DailyCalculationBuySell";
import CityLedgerDebitCredit from "./pages/cityledgerfiles/CityLedgerDebitCredit";
import VillageLedgerDebitCredit from "./pages/villageledgerfiles/VillageLedgerDebitCredit";

function App() {
  const [selectedDate, setSelectedDate] = React.useState<string | null>(null);

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/daily-calculation"
            element={
              selectedDate ? (
                <DailyCalculationBuySell
                  selectedDate={selectedDate}
                  onBack={() => setSelectedDate(null)}
                />
              ) : (
                <DailyCalculation onSelectDate={setSelectedDate} />
              )
            }
          />
          <Route
            path="/city-ladger"
            element={
              selectedDate ? (
                <CityLedgerDebitCredit
                  selectedDate={selectedDate}
                  onBack={() => setSelectedDate(null)}
                />
              ) : (
                <CityLadger onSelectcityledgerDate={setSelectedDate} />
              )
            }
          />
          <Route
            path="/village-ladger"
            element={
              selectedDate ? (
                <VillageLedgerDebitCredit
                  selectedDate={selectedDate}
                  onBack={() => setSelectedDate(null)}
                />
              ) : (
                <VillageLadger onSelectvillageledgerDate={setSelectedDate} />
              )
            }
          />
          <Route path="/regular-ladger" element={<RegularLadger />} />

          <Route path="/stock-cement" element={<StockCement />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
