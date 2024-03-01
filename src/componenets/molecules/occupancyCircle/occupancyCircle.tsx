// OccupancyCircle.tsx
import React from "react";
import "./occupancyCircle.css";
import { Floor } from "../../../types/types";

interface OccupancyCircleProps {
  floor: Floor;
}

const OccupancyCircle: React.FC<OccupancyCircleProps> = ({ floor }) => {
  const occupiedRooms = floor.children
    ? floor.children.filter((room) => room.occupancy === true).length
    : 0;

  const totalRooms = floor.children ? floor.children.length : 0;

  const occupancyPercentage = totalRooms
    ? parseInt(((occupiedRooms / totalRooms) * 100).toFixed(0), 10)
    : 0;

  // Ensure occupancyPercentage is between 0 and 100
  const normalizedPercentage = Math.min(100, Math.max(0, occupancyPercentage));

  // Calculate the stroke-dashoffset based on the occupancyPercentage
  const dashOffset = 283 - normalizedPercentage * 2.83;

  return (
    <div className="occupancy-circle">
      <svg
        className="circle-svg"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
      >
        <circle className="circle-background" cx="50" cy="50" r="45" />
        <circle
          className="circle-progress"
          cx="50"
          cy="50"
          r="45"
          style={{ strokeDasharray: 283, strokeDashoffset: dashOffset }}
        />
      </svg>
      <div className="progress-text">{normalizedPercentage}% Occupied</div>
    </div>
  );
};

export default OccupancyCircle;
