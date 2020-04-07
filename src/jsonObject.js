import mRoom from "./res/objs/mBedroom";
import lRoom from "./res/objs/living";
import hRoom from "./res/objs/hall";

let point = document.querySelectorAll(".point");

const jsonObject = {
  jsonPlacement: "./base.json",
  data: [
    {
      name: "masterRoom",
      secName: "one",
      src: mRoom.key1,
      rotatePos: Math.PI / 4,
      posX: 0,
      posY: 0,
      posZ: 0,
      point: point[0],
      buttons: [
        {
          x: 0,
          y: -0.07,
          z: 0.16
        },
        {
          x: 0,
          y: -0.07,
          z: -0.1
        },
        {
          x: 0.1,
          y: -0.07,
          z: 0
        },
        {
          x: -0.1,
          y: -0.07,
          z: 0
        }
      ]
    },
    {
      name: "masterRoom",
      secName: "two",
      src: mRoom.key2,
      rotatePos: Math.PI / 4,
      posX: 2,
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
      secName: "three",
      src: mRoom.key3,
      rotatePos: Math.PI / 4,
      posX: 0,
      posY: 0,
      posZ: 2,
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
      secName: "four",
      src: mRoom.key4,
      rotatePos: Math.PI / 4,
      posX: -2,
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
      secName: "five",
      src: mRoom.key5,
      rotatePos: Math.PI / 4,
      posX: 0,
      posY: 0,
      posZ: -2,
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
      name: "livingRoom",
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
    hRoom.key1
  ]
};

export default jsonObject;
