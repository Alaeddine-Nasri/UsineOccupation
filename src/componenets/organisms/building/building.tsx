import React, { useState, useEffect } from "react";
import { BuildingType, Floor } from "../../../types/types";
import FloorPlan from "../../molecules/floorPlan/floorPlan";
import "./building.css";
import SimpleCard from "../../atoms/simpleCard/simpleCard";
import Dropdown from "../../atoms/dropList/dropList";
import OccupancyCircle from "../../molecules/occupancyCircle/occupancyCircle";
import SearchBar from "../../atoms/searchBar/searchBar";

interface BuildingProps {
  building: BuildingType;
  onFloorClick: (floor: Floor) => void;
}

const Building: React.FC<BuildingProps> = ({ building, onFloorClick }) => {
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [listMode, setListMode] = useState<boolean>(false);

  const handleFloorClick = (floor: Floor) => {
    console.log("Floor Clicked: " + floor.name);
    onFloorClick(floor);
    setSelectedFloor(floor.name);
    console.log("selected: " + selectedFloor);
  };

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    console.log("query" + query);
    setSearchQuery(query);
  };

  useEffect(() => {
    // Set the selected floor to the first floor when the component mounts
    if (building.children.length > 0) {
      setSelectedFloor(building.children[0].name);
    }
  }, [building]);

  return (
    <div className="building">
      <div className="floors-container">
        <div>
          <p className="title">All Floors</p>
        </div>
        {building.children.map((floor) => (
          <div key={floor.staticId} onClick={() => handleFloorClick(floor)}>
            <SimpleCard
              text={floor.name}
              isSelected={floor.name === selectedFloor}
              floor={floor}
            />
          </div>
        ))}
        {building.children.map((floor) => (
          <div className="circle" key={floor.staticId}>
            {floor.name === selectedFloor && <OccupancyCircle floor={floor} />}
          </div>
        ))}
      </div>
      <div className="floor-room">
        {building.children.map((floor) => (
          <React.Fragment key={floor.staticId}>
            {floor.name === selectedFloor ? (
              <div>
                <div className="mode-dropdown">
                  <div>
                    <p className="title">Floor : {floor.name}</p>
                    <p className="details">{floor.children.length} rooms</p>
                  </div>
                  <div className="filtres-search">
                    <SearchBar onSearch={handleSearch} />
                    <Dropdown
                      selectedOption={listMode ? "list" : "grid"}
                      options={["list", "grid"]}
                      onSelect={(option) => setListMode(option === "list")}
                    />
                  </div>
                </div>
                <FloorPlan
                  floor={floor}
                  listMode={listMode}
                  searchQuery={searchQuery}
                />
              </div>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Building;
