import React, { useState } from "react";
import { BuildingType, Floor, Room } from "../../../types/types";
import buildingData from "../../../types/data";
import "./home.css";
import Building from "../../organisms/building/building";
import Header from "../../organisms/header/header";

const Home: React.FC = () => {
  const initialBuilding: BuildingType = buildingData;
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
  const [showAll, setShowAll] = useState<boolean>(true);

  const userName = "Ala eddine";
  const headername = "Occupancy Usine"; //

  const handleFloorClick = (floor: Floor) => {
    setSelectedFloor(floor);
    setShowAll(false);
  };

  return (
    <div className="home">
      <Header userName={userName} headername={headername} />
      <Building building={initialBuilding} onFloorClick={handleFloorClick} />
    </div>
  );
};

export default Home;
