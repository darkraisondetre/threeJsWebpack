import mRoom from "./res/objs/mBedroom";
import lRoom from "./res/objs/living";
import hRoom from "./res/objs/hall";
import tRoom from "./res/objs/toilet";
import bRoom from "./res/objs/balcony";
import f1 from "./res/r6/f1.jpg";
import d1 from "./res/r7/d1.jpg";

let point = document.querySelectorAll(".point");

const jsonObject = {
  jsonPlacement: "./base.json",
  data: [
    {
      name: "masterRoom",
      id: 0,
      secId: 0,
      secName: "one",
      src: mRoom.key1,
      rotatePos: Math.PI / 4,
      posX: 0,
      posY: 0,
      posZ: 0,
      point: point[0],
      buttons: [
        {
          bId: 0,
          x: 0,
          y: -0.01,
          z: 0.4
        },
        {
          bId: 1,
          x: 0,
          y: -0.01,
          z: -0.4
        },
        {
          bId: 2,
          x: 0.4,
          y: -0.01,
          z: 0
        },
        {
          bId: 3,
          x: -0.4,
          y: -0.01,
          z: 0
        }
      ]
    },
    {
      name: "masterRoom",
      id: 0,
      secId: 1,
      secName: "two",
      src: mRoom.key2,
      rotatePos: Math.PI / 4,
      posX: 5,
      posY: 0,
      posZ: 0,
      buttons: [
        {
          x: 0,
          y: -0.05,
          z: 0.14
        },
        {
          x: 0.02,
          y: -0.05,
          z: -0.14
        }
      ]
    },
    {
      name: "masterRoom",
      id: 0,
      secId: 2,
      secName: "three",
      src: mRoom.key3,
      rotatePos: Math.PI / 4,
      posX: 0,
      posY: 0,
      posZ: 5,
      buttons: [
        {
          x: 0,
          y: -0.05,
          z: 0.14
        },
        {
          x: 0.02,
          y: -0.05,
          z: -0.14
        }
      ]
    },
    {
      name: "masterRoom",
      id: 0,
      secId: 3,
      secName: "four",
      src: mRoom.key4,
      rotatePos: Math.PI / 4,
      posX: -5,
      posY: 0,
      posZ: 0,
      buttons: [
        {
          x: 0,
          y: -0.05,
          z: 0.14
        },
        {
          x: 0.02,
          y: -0.05,
          z: -0.14
        }
      ]
    },
    {
      name: "masterRoom",
      id: 0,
      secId: 4,
      secName: "five",
      src: mRoom.key5,
      rotatePos: Math.PI / 4,
      posX: 0,
      posY: 0,
      posZ: -5,
      buttons: [
        {
          x: 0,
          y: -0.08,
          z: 0.14
        },
        {
          x: 0.02,
          y: -0.08,
          z: -0.14
        }
      ]
    },
    {
      name: "livingRoom",
      id: 1,
      secName: "one",
      src: lRoom.key1,
      rotatePos: Math.PI / 4,
      posX: 0,
      posY: 0,
      posZ: 0,
      point: point[1],
      buttons: [
        {
          x: 0,
          y: -0.05,
          z: 0.14
        },
        {
          x: 0.02,
          y: -0.05,
          z: -0.14
        }
      ]
    },
    {
      name: "hallRoom",
      id: 2,
      secName: "one",
      src: hRoom.key1,
      rotatePos: Math.PI / 4,
      posX: 0,
      posY: 0,
      posZ: 0,
      point: point[2],
      buttons: [
        {
          x: 0,
          y: -0.05,
          z: 0.14
        },
        {
          x: 0.02,
          y: -0.05,
          z: -0.14
        }
      ]
    },
    {
      name: "Bathroom",
      id: 3,
      secName: "one",
      src: tRoom.key1,
      rotatePos: Math.PI / 4,
      posX: 0,
      posY: 0,
      posZ: 0,
      point: point[2],
      buttons: [
        {
          x: 0,
          y: -0.05,
          z: 0.14
        },
        {
          x: 0.02,
          y: -0.05,
          z: -0.14
        }
      ]
    },
    {
      name: "Balcony",
      id: 4,
      secName: "one",
      src: bRoom.key1,
      rotatePos: Math.PI / 4,
      posX: 0,
      posY: 0,
      posZ: 0,
      point: point[2],
      buttons: [
        {
          x: 0,
          y: -0.05,
          z: 0.14
        },
        {
          x: 0.02,
          y: -0.05,
          z: -0.14
        }
      ]
    },
    {
      name: "Foyer",
      id: 5,
      secName: "one",
      src: f1,
      rotatePos: Math.PI / 4,
      posX: 0,
      posY: 0,
      posZ: 0,
      point: point[2],
      buttons: [
        {
          x: 0,
          y: -0.05,
          z: 0.14
        },
        {
          x: 0.02,
          y: -0.05,
          z: -0.14
        }
      ]
    },
    {
      name: "Dinning",
      id: 6,
      secName: "one",
      src: d1,
      rotatePos: Math.PI / 4,
      posX: 0,
      posY: 0,
      posZ: 0,
      point: point[2],
      buttons: [
        {
          x: 0,
          y: -0.05,
          z: 0.14
        },
        {
          x: 0.02,
          y: -0.05,
          z: -0.14
        }
      ]
    }
  ],
  buttons: [
    {
      name: "masterRoom"
    },
    {
      name: "livingRoom"
    },
    {
      name: "hallRoom"
    },
    {
      name: "Bathroom"
    },
    {
      name: "Balcony"
    },
    {
      name: "Foyer"
    },
    {
      name: "Dinning"
    }
  ],
  images: [
    mRoom.key1,
    mRoom.key2,
    mRoom.key3,
    mRoom.key4,
    mRoom.key5,
    lRoom.key1,
    lRoom.key2,
    lRoom.key3,
    hRoom.key1,
    tRoom.key1,
    bRoom.key1,
    d1,
    f1
  ]
};

export default jsonObject;
