import React from "react";
import { Room } from "../../../types/types";
import "./roomCard.css";

interface RoomCardProps {
  room: Room;
  listMode: Boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, listMode }) => {
  const classNames = `room-card ${
    room.occupancy ? "occupied" : "not-occypide"
  } ${listMode ? "listmode" : "gridmode"}`;

  return listMode ? (
    <div className={classNames}>
      <div>
        <p>{room.name}</p>
        <p>Type : {room.type}</p>
      </div>
      <div>
        {room.occupancy ? (
          <p>Occupancy : Occupied</p>
        ) : !room.occupancy ? (
          <p>Occupancy : Free</p>
        ) : (
          <p>Occupancy : Nobody knows</p>
        )}
      </div>
    </div>
  ) : (
    <div className={classNames}>
      <p>{room.name}</p>
    </div>
  );
};

export default RoomCard;
