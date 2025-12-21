// src/pages/Dashboard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // If using React Router

export default function Dashboard() {
  const navigate = useNavigate();

  // Define your pages and labels
  const pages = [
    { name: "Daily Calculation", path: "/daily-calculation" },
    { name: "City Ledger", path: "/city-ladger" },
    { name: "Village Ledger", path: "/village-ladger" },
    { name: "Regular Ledger", path: "/regular-ladger" },
    { name: "Stock Cement", path: "/stock-cement" },
      { name: "Demo", path: "/Demo" },
  ];

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pages.map((page) => (
            <Button
              key={page.name}
              onClick={() => navigate(page.path)}
              className="w-full bg-fuchsia-700"
            >
              {page.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
