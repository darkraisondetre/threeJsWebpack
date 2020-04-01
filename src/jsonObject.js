import mRoom from "./res/objs/mBedroom";
import lRoom from "./res/objs/living";
import hRoom from "./res/objs/hall";



const jsonObject = {
    jsonPlacement: './base.json',
    data: [{
        name: 'masterRoom',
        secName: 'one',
        src: mRoom.key1,
        rotatePos: Math.PI / 4,
        buttons: [{
            x: 0,
            y: 0,
            z: -4
        }]
    },
    {
        name: 'masterRoom',
        secName: 'two',
        src: mRoom.key2,
        rotatePos: Math.PI / 4,
        buttons: [{
            x: 2,
            y: 0,
            z: 4
        },
        {
            x: -1,
            y: 0,
            z: -4
        }]
    }]
}