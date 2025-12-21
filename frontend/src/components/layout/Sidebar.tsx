// src/components/layout/Sidebar.tsx
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-card p-4 hidden md:block">
      <nav className="space-y-2">
        <NavLink
          to="/"
          className="block rounded-lg px-4 py-2 text-sm hover:bg-muted"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/settings"
          className="block rounded-lg px-4 py-2 text-sm hover:bg-muted"
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
