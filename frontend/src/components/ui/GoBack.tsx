// src/components/GoBackButton.tsx
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function GoBackButton() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      className="mb-4 bg-background text-foreground hover:bg-background hover:text-red-500 cursor-pointer w-full justify-end"
    >
      ← Go Back
    </Button>
  );
}
