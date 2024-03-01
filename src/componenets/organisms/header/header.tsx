// Header.tsx
import React from "react";
import "./header.css";
import { CircleUser, LayoutDashboard } from "lucide-react";

interface HeaderProps {
  userName: string;
  headername: string;
}

const Header: React.FC<HeaderProps> = ({ userName, headername }) => {
  return (
    <header className="main-header">
      <div className="solution-section">
        <LayoutDashboard className="logo" size={40} />
        <span className="solution-name">{headername}</span>
      </div>
      <div className="profile-section">
        <CircleUser className="logo" size={40} />
        <span className="user-name">{userName}</span>
      </div>
    </header>
  );
};

export default Header;
