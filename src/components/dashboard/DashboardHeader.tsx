import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-6 w-6" />
          <span className="font-bold">Guardian IO</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-4">
          <Link to="/" className="text-sm font-medium">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};