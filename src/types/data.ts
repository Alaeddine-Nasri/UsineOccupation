import { BuildingType } from "../types/types";

// const buildingData: BuildingType = {
//   dynamicId: 19274064,
//   staticId: "SpinalNode-c4259f6d-f1b8-8883-1c43-e3971716417a-17a1eb70d70",
//   name: "Usine",
//   type: "geographicBuilding",
//   children: [
//     {
//       dynamicId: 19271424,
//       staticId: "SpinalNode-4004daa9-6037-bdaf-bfd6-9b050adb3d23-17a1eb70d76",
//       name: "RDC",
//       type: "geographicFloor",
//       children: [
//         {
//           dynamicId: 19436736,
//           staticId:
//             "SpinalNode-d8410a32-2cff-5f49-accb-e5e0c6b60011-17a1eb70d7c",
//           name: "1-Condensateur",
//           type: "geographicRoom",
//           children: [],
//           occupancy: true,
//         },
//         {
//           dynamicId: 19267808,
//           staticId:
//             "SpinalNode-54a91545-7da7-5e95-9200-2c759285b6c1-17a1eb70d8c",
//           name: "2-Transfo futur",
//           type: "geographicRoom",
//           children: [],
//           occupancy: true,
//         },
//         {
//           dynamicId: 19436736,
//           staticId:
//             "SpinalNode-d8410a32-2cff-5f49-accb-e5e0c6b60011-17a1eb70d7c",
//           name: "1-Condensateur",
//           type: "geographicRoom",
//           children: [],
//           occupancy: true,
//         },
//         {
//           dynamicId: 19267808,
//           staticId:
//             "SpinalNode-54a91545-7da7-5e95-9200-2c759285b6c1-17a1eb70d8c",
//           name: "2-Transfo futur",
//           type: "geographicRoom",
//           children: [],
//           occupancy: true,
//         },
//       ],
//     },
//     {
//       dynamicId: 19319088,
//       staticId: "SpinalNode-3c0b53ed-635a-bff7-f5aa-a0b7c7333936-17a1eb72182",
//       name: "Toiture",
//       type: "geographicFloor",
//       children: [
//         {
//           dynamicId: 39392640,
//           staticId:
//             "SpinalNode-a3708507-7246-6974-8697-98cefc791e42-17a1eb72186",
//           name: "74-Pièce",
//           type: "geographicRoom",
//           children: [],
//           occupancy: true,
//         },
//         {
//           dynamicId: 39398208,
//           staticId:
//             "SpinalNode-1c4604f4-9cf5-e78d-2309-560a0a4ec5ed-17a1eb72187",
//           name: "75-Pièce",
//           type: "geographicRoom",
//           children: [],
//           occupancy: true,
//         },
//       ],
//     },
//     {
//       dynamicId: 19327696,
//       staticId: "SpinalNode-3652dcbc-3247-086b-8236-4869bb83f4f3-17a1eb72411",
//       name: "Etage 1",
//       type: "geographicFloor",
//       children: [
//         {
//           dynamicId: 19345824,
//           staticId:
//             "SpinalNode-3c82dbd2-0b8a-84ee-7162-9da3a001c709-17a1eb72414",
//           name: "43-Mezzanine",
//           type: "geographicRoom",
//           children: [],
//           occupancy: true,
//         },
//         {
//           dynamicId: 39723440,
//           staticId:
//             "SpinalNode-6f185d12-fbab-26ea-9695-5a778968265f-17a1eb72417",
//           name: "44-Mezzanine 02",
//           type: "geographicRoom",
//           children: [],
//           occupancy: true,
//         },
//       ],
//     },
//   ],
// };

const buildingData: BuildingType = {
  dynamicId: 19274064,
  staticId: "SpinalNode-c4259f6d-f1b8-8883-1c43-e3971716417a-17a1eb70d70",
  name: "Usine",
  type: "geographicBuilding",
  children: [
    {
      dynamicId: 19271424,
      staticId: "SpinalNode-4004daa9-6037-bdaf-bfd6-9b050adb3d23-17a1eb70d76",
      name: "RDC",
      type: "geographicFloor",
      children: [
        {
          dynamicId: 19436736,
          staticId:
            "SpinalNode-d8410a32-2cff-5f49-accb-e5e0c6b60011-17a1eb70d7c",
          name: "1-Condensateur",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 19267808,
          staticId:
            "SpinalNode-54a91545-7da7-5e95-9200-2c759285b6c1-17a1eb70d8c",
          name: "2-Transfo futur",
          type: "geographicRoom",
          children: [],
          occupancy: false,
        },
        {
          dynamicId: 19375056,
          staticId:
            "SpinalNode-15974baa-ae1b-6238-d949-cd614af91a52-17a1eb70d8d",
          name: "4-Local électrique",
          type: "geographicRoom",
          children: [],
          occupancy: false,
        },
        {
          dynamicId: 35153632,
          staticId:
            "SpinalNode-f2f199c9-a10b-2b1c-60f0-5dd1b1975b4b-17a1eb70d8f",
          name: "5-Local",
          type: "geographicRoom",
          children: [],
          occupancy: false,
        },
        {
          dynamicId: 27583840,
          staticId:
            "SpinalNode-dc868a92-92f0-94b3-8318-16f9eb5f7fed-17a1eb70d8f",
          name: "6-Local électrique",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 36006368,
          staticId:
            "SpinalNode-4e12d72a-2dd9-c0a6-1257-64e77b01fe0b-17a1eb70d8f",
          name: "7-Local",
          type: "geographicRoom",
          children: [],
          occupancy: false,
        },
        {
          dynamicId: 35465472,
          staticId:
            "SpinalNode-772913de-ec07-6c38-7c26-13e48a1ed771-17a1eb70d8f",
          name: "8-Stock",
          type: "geographicRoom",
          children: [],
          occupancy: false,
        },
        {
          dynamicId: 36309536,
          staticId:
            "SpinalNode-48554489-9d6f-4305-f240-5a5fe4669b3e-17a1eb70d90",
          name: "12-Local Eaux",
          type: "geographicRoom",
          children: [],
          occupancy: false,
        },
        {
          dynamicId: 36597520,
          staticId:
            "SpinalNode-e4af3bcb-ff7f-46d1-4725-69a65d8d64e5-17a1eb70d90",
          name: "13-SAS",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 22718496,
          staticId:
            "SpinalNode-a4837953-3baf-bcb5-ba95-730703fb13dc-17a1eb70d91",
          name: "14-Entrepôt",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 21809840,
          staticId:
            "SpinalNode-b8e4f863-771b-645e-2c7e-ed40e5862a11-17a1eb70d91",
          name: "16-Local technique",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 31891664,
          staticId:
            "SpinalNode-a8c177bd-bbd2-032c-433d-a4812e4dd3f5-17a1eb70d91",
          name: "18-Bureau",
          type: "geographicRoom",
          children: [],
          occupancy: false,
        },
        {
          dynamicId: 27146768,
          staticId:
            "SpinalNode-560abb37-25da-15f2-9c66-42e47970729a-17a1eb70d91",
          name: "20-Local technique",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 34639456,
          staticId:
            "SpinalNode-8d706be2-57b9-41e8-17e5-5083f425ea76-17a1eb70d92",
          name: "21-Salle de pause",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 27048688,
          staticId:
            "SpinalNode-18240960-55cc-918d-781d-a141f9eda57d-17a1eb70d92",
          name: "22-Accueil",
          type: "geographicRoom",
          children: [],
          occupancy: false,
        },
        {
          dynamicId: 34774512,
          staticId:
            "SpinalNode-893810d5-ebeb-3b12-a166-be7d8980c341-17a1eb70d92",
          name: "23-Circulation",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 29348016,
          staticId:
            "SpinalNode-d5bfa0d7-cebc-c85c-9024-03ee5ed47102-17a1eb70d93",
          name: "24-WC",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 29745760,
          staticId:
            "SpinalNode-c72f09a6-01f5-34c9-5905-3912d0053316-17a1eb70d94",
          name: "25-WC",
          type: "geographicRoom",
          children: [],
          occupancy: false,
        },
        {
          dynamicId: 19258736,
          staticId:
            "SpinalNode-ff0a407c-232b-6ff5-d2a0-438477ce770c-17a1eb70d94",
          name: "26-DGT",
          type: "geographicRoom",
          children: [],
          occupancy: false,
        },
        {
          dynamicId: 30118272,
          staticId:
            "SpinalNode-19df1f5f-d0e7-f646-d47a-2de86e739a7d-17a1eb70d94",
          name: "27-Vestiaire",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 31016096,
          staticId:
            "SpinalNode-793a535e-c3bb-1caf-663c-2e9aff43292a-17a1eb70d94",
          name: "28-Vestiaire",
          type: "geographicRoom",
          children: [],
          occupancy: false,
        },
        {
          dynamicId: 32476864,
          staticId:
            "SpinalNode-10694f09-ad2e-1f8c-93d3-df5a1d4945f0-17a1eb70d94",
          name: "34-Local technique",
          type: "geographicRoom",
          children: [],
          occupancy: false,
        },
        {
          dynamicId: 32800352,
          staticId:
            "SpinalNode-dfcd581a-cda4-3588-fc52-9486cdbdd986-17a1eb70d94",
          name: "35-Processus A",
          type: "geographicRoom",
          children: [],
          occupancy: false,
        },
        {
          dynamicId: 33105728,
          staticId:
            "SpinalNode-9d9d70eb-4f11-2955-ea55-871b76de024f-17a1eb70d95",
          name: "36-Processus B",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 33394480,
          staticId:
            "SpinalNode-d4f8f037-609f-1570-b129-d1dfd76de36f-17a1eb70d95",
          name: "37-Processus C",
          type: "geographicRoom",
          children: [],
          occupancy: false,
        },
        {
          dynamicId: 32195552,
          staticId:
            "SpinalNode-9b582919-5e02-331e-82f7-c9d8e3e78743-17a1eb70d95",
          name: "39-Bureau",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 33731648,
          staticId:
            "SpinalNode-d4d2a209-d5fb-590d-c875-9771b672673e-17a1eb70d95",
          name: "40-SAS",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },

        {
          dynamicId: 36894672,
          staticId:
            "SpinalNode-804755d2-29b2-4bdc-995b-dd2b4d239e54-17a1eb70d96",
          name: "42-Local info",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 36938944,
          staticId:
            "SpinalNode-2c5767ab-fb13-2116-15ad-15a00e34a551-17a1eb70d96",
          name: "49-Rue centrale",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 22360880,
          staticId:
            "SpinalNode-3f514a8d-290a-203e-d978-be1fe1ec4687-17a1eb70d97",
          name: "52-Annexe chaufferie",
          type: "geographicRoom",
          children: [],
        },
        {
          dynamicId: 36983216,
          staticId:
            "SpinalNode-24ced144-c57c-ed44-75b2-7d302f8828ca-17a1eb70d97",
          name: "57-Local technique",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 37286496,
          staticId:
            "SpinalNode-5911a189-e82d-e784-98fd-14f024fb9ece-17a1eb70d98",
          name: "58-Pièce",
          type: "geographicRoom",
          children: [],
        },
        {
          dynamicId: 37330768,
          staticId:
            "SpinalNode-950a89f6-a715-670d-6fc3-5e1dd5d3e879-17a1eb70d98",
          name: "59-Pièce",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 37392784,
          staticId:
            "SpinalNode-62743737-8756-d9cb-e221-4f1b92bf1f7f-17a1eb70d98",
          name: "60-Pièce",
          type: "geographicRoom",
          children: [],
        },
        {
          dynamicId: 37437056,
          staticId:
            "SpinalNode-09b7e3fc-94f0-f882-4417-a1d77c97787d-17a1eb70d99",
          name: "61-Pièce",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 37481328,
          staticId:
            "SpinalNode-89fa5d22-8d9f-c24a-df61-35afabaadc26-17a1eb70d99",
          name: "62-Pièce",
          type: "geographicRoom",
          children: [],
        },
        {
          dynamicId: 37525600,
          staticId:
            "SpinalNode-14a6276f-a999-3189-516f-7de9e0d4ca9a-17a1eb70d99",
          name: "63-Pièce",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 37569872,
          staticId:
            "SpinalNode-359aacee-5aca-63d0-496b-e686fb433c17-17a1eb70d99",
          name: "64-Pièce",
          type: "geographicRoom",
          children: [],
        },
        {
          dynamicId: 35777888,
          staticId:
            "SpinalNode-cd3ac52c-9b68-c4b7-f9b8-d4bc7c50b48f-17a1eb70d9a",
          name: "65-Pièce",
          type: "geographicRoom",
          children: [],
        },
        {
          dynamicId: 34922496,
          staticId:
            "SpinalNode-5b7e12b5-5595-6f2c-0e46-5a76bc12f9fc-17a1eb70d9a",
          name: "66-Pièce",
          type: "geographicRoom",
          children: [],
        },
        {
          dynamicId: 35051776,
          staticId:
            "SpinalNode-01db279c-6fdb-bbd6-ac2f-a72e5d3819f1-17a1eb70d9b",
          name: "67-Pièce",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 37614144,
          staticId:
            "SpinalNode-db9eadf1-9790-de66-2f10-1029d575b57a-17a1eb70d9b",
          name: "68-Pièce",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 22165120,
          staticId:
            "SpinalNode-cc640ae1-6282-53ba-bcd1-595c0bbc5559-17a1eb70d9b",
          name: "69-Pièce",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 23599712,
          staticId:
            "SpinalNode-943ca0e9-5071-c335-56df-d97f44618122-17a1eb70d9c",
          name: "70-Pièce",
          type: "geographicRoom",
          children: [],
        },
        {
          dynamicId: 24381424,
          staticId:
            "SpinalNode-850ad560-cf84-1fc7-fefa-1f20aae29616-17a1eb70d9c",
          name: "71-Pièce",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 24602432,
          staticId:
            "SpinalNode-4611e52b-0862-ffbd-fcd0-35b18ca95bcb-17a1eb70d9c",
          name: "72-Pièce",
          type: "geographicRoom",
          children: [],
        },
        {
          dynamicId: 24039616,
          staticId:
            "SpinalNode-d64a61d7-2486-4a83-115e-85e93a7e2435-17a1eb70d9d",
          name: "73-Pièce",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 24317040,
          staticId:
            "SpinalNode-5683b59a-12eb-4c7f-f4a5-352747d8d1e9-17a1eb70d9d",
          name: "78-Pièce",
          type: "geographicRoom",
          children: [],
        },
        {
          dynamicId: 24554464,
          staticId:
            "SpinalNode-30211c55-0510-7cb7-1275-20dc4cfdca2a-17a1eb70d9d",
          name: "79-Pièce",
          type: "geographicRoom",
          children: [],
        },
        {
          dynamicId: 24052080,
          staticId:
            "SpinalNode-2bb4fdad-cddb-293f-d9c5-7949fd788777-17a1eb70d9e",
          name: "81-Pièce",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 20400848,
          staticId:
            "SpinalNode-ef7df57a-e885-9dac-cc89-ed417841bb34-17a1eb70fc4",
          name: "82-Pièce",
          type: "geographicRoom",
          children: [],
        },
        {
          dynamicId: 25161600,
          staticId:
            "SpinalNode-faced406-436e-4961-c5dc-2f4480131efb-17a1eb70fc5",
          name: "83-Pièce",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 20468432,
          staticId:
            "SpinalNode-8a229623-5d3d-8f8a-9cd3-9eb29d61748d-17a1eb70fc6",
          name: "84-Pièce",
          type: "geographicRoom",
          children: [],
        },
        {
          dynamicId: 21373472,
          staticId:
            "SpinalNode-3f552765-3d67-dcdc-3fb0-0fce487c3c73-17a1eb70fcb",
          name: "85-Pièce",
          type: "geographicRoom",
          children: [],
        },
        {
          dynamicId: 25846896,
          staticId:
            "SpinalNode-54360be1-80b4-54dc-cea8-a7b9cf3d78aa-17a1eb70fcb",
          name: "86-Pièce",
          type: "geographicRoom",
          children: [],
        },
        {
          dynamicId: 25455328,
          staticId:
            "SpinalNode-b4f46a78-887e-eb9a-09bc-5650fa9873af-17a1eb70fcc",
          name: "87-Pièce",
          type: "geographicRoom",
          children: [],
        },
        {
          dynamicId: 20888464,
          staticId:
            "SpinalNode-e175ed3b-ffa2-3bfe-37a9-023a72fd637f-17a1eb70fcc",
          name: "88-Pièce",
          type: "geographicRoom",
          children: [],
        },
      ],
    },
    {
      dynamicId: 19319088,
      staticId: "SpinalNode-3c0b53ed-635a-bff7-f5aa-a0b7c7333936-17a1eb72182",
      name: "Toiture",
      type: "geographicFloor",
      children: [
        {
          dynamicId: 39392640,
          staticId:
            "SpinalNode-a3708507-7246-6974-8697-98cefc791e42-17a1eb72186",
          name: "74-Pièce",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 39398208,
          staticId:
            "SpinalNode-1c4604f4-9cf5-e78d-2309-560a0a4ec5ed-17a1eb72187",
          name: "75-Pièce",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 39472288,
          staticId:
            "SpinalNode-4767e035-e2e6-1497-b282-269e7bfc4962-17a1eb72188",
          name: "76-Pièce",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 39599936,
          staticId:
            "SpinalNode-d85eba7d-09d7-9226-946a-d32d40b1bee8-17a1eb72188",
          name: "77-Pièce",
          type: "geographicRoom",
          children: [],
          occupancy: false,
        },
      ],
    },
    {
      dynamicId: 19327696,
      staticId: "SpinalNode-3652dcbc-3247-086b-8236-4869bb83f4f3-17a1eb72411",
      name: "Etage 1",
      type: "geographicFloor",
      children: [
        {
          dynamicId: 19345824,
          staticId:
            "SpinalNode-3c82dbd2-0b8a-84ee-7162-9da3a001c709-17a1eb72414",
          name: "43-Mezzanine",
          type: "geographicRoom",
          children: [],
          occupancy: true,
        },
        {
          dynamicId: 39723440,
          staticId:
            "SpinalNode-6f185d12-fbab-26ea-9695-5a778968265f-17a1eb72417",
          name: "44-Mezzanine 02",
          type: "geographicRoom",
          children: [],
          occupancy: false,
        },
      ],
    },
  ],
};

export default buildingData;
