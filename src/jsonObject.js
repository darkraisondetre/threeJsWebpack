import mRoom from "./res/objs/mBedroom";
import lRoom from "./res/objs/living";
import hRoom from "./res/objs/hall";

let point = document.querySelectorAll('.point');

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
          y: 0,
          z: -4
        },
        {
          x: -1,
          y: 0,
          z: -4
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
          x: 2,
          y: 0,
          z: 4
        },
        {
          x: -1,
          y: 0,
          z: -4
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
          x: 2,
          y: 0,
          z: 4
        },
        {
          x: -1,
          y: 0,
          z: -4
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
          x: 2,
          y: 0,
          z: 4
        },
        {
          x: -1,
          y: 0,
          z: -4
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
          x: 2,
          y: 0,
          z: 4
        },
        {
          x: -1,
          y: 0,
          z: -4
        }
      ]
    },
    {
      name: "livingRoom",
      secName: "one",
      src: lRoom.key1,
      rotatePos: Math.PI / 4,
      posX: 7,
      posY: 0,
      posZ: 0,
      point: point[1],
      buttons: [
        {
          x: 2,
          y: 0,
          z: 4
        },
        {
          x: -1,
          y: 0,
          z: -4
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
      posZ: 7,
      point: point[2],
      buttons: [
        {
          x: 2,
          y: 0,
          z: 4
        },
        {
          x: -1,
          y: 0,
          z: -4
        }
      ]
    }
  ],
  buttons: [
    {
      name: 'masterRoom'
    },
    {
      name: 'livingRoom'
    },
    {
      name: 'hallRoom'
    }
  ]
};

export default jsonObject;
