// types/types.ts

interface Room {
  dynamicId: number;
  staticId: string;
  name: string;
  type: string;
  occupancy?: boolean | undefined;
  children?: Room[];
}

interface Floor {
  dynamicId: number;
  staticId: string;
  name: string;
  type: string;
  occupancy?: boolean | undefined;
  children: Room[];
}

interface BuildingType {
  dynamicId: number;
  staticId: string;
  name: string;
  type: string;
  occupancy?: boolean | undefined;
  children: Floor[];
}

export type { Room, Floor, BuildingType };
