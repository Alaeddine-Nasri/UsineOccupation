import React from "react";
import RoomCard from "../roomCard/roomCard";
import "./floorPlan.css";
import { Floor } from "../../../types/types";

interface FloorPlanProps {
  floor: Floor;
  listMode: boolean;
  searchQuery: string;
}

const FloorPlan: React.FC<FloorPlanProps> = ({
  floor,
  listMode,
  searchQuery,
}) => {
  const filteredRooms = floor.children.filter((room) =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="floor-plan">
      <div className="scrollable-area">
        <div className={`room-list ${listMode ? "list-mode" : "grid-mode"}`}>
          {filteredRooms.map((room) => (
            <RoomCard key={room.dynamicId} room={room} listMode={listMode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
