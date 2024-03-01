// SimpleCard.tsx

import React from "react";
import "./simpleCard.css";
import { Building } from "lucide-react";
import { Floor } from "../../../types/types";

interface SimpleCardProps {
  text: string;
  isSelected: boolean;
  floor: Floor;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ text, isSelected, floor }) => {
  const occupiedRooms = floor.children
    ? floor.children.filter((room) => room.occupancy === true).length
    : 0;

  const totalRooms = floor.children ? floor.children.length : 0;

  const occupancyPercentage = totalRooms
    ? ((occupiedRooms / totalRooms) * 100).toFixed(0)
    : 0;

  const classNames = `simple-card ${isSelected ? "selected" : ""}`;

  return (
    <div className={classNames}>
      <div className="row">
        <Building color={isSelected ? "#FFF" : "#0F2554"} size={30} />
        <label className="custom-bold">{text}</label>
      </div>
      <div className="row">
        <label className="custom-details">{occupiedRooms} rooms occupied</label>
        <label className="pourcentage-container">{occupancyPercentage}%</label>
      </div>
    </div>
  );
};

export default SimpleCard;
