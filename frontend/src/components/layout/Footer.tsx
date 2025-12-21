// src/components/layout/Footer.tsx
export function Footer() {
  return (
    <footer className="h-12 flex items-center justify-center border-t text-xs text-muted-foreground">
      © {new Date().getFullYear()} Jhorna Enterprise
    </footer>
  );
}
