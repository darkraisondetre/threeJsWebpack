import _ from "lodash";
import SceneInit from "./scene";
import * as THREE from "three";
import mRoom from "./res/objs/mBedroom";
import Sphere from './sphere';
import Button from "./buttons";

let scene = new SceneInit();
let btn1 = new Button('masterRoom');
btn1.click();

let btn2 = new Button('bathRoom');
btn2.click();
console.log(scene.scene.children)
scene.animate();
scene.scene.addEventListener('change', () => {
    console.log('change');
    scene.animate();
})

let sphere1_1 = new Sphere(0, 0, 0);
let sphere1_2 = new Sphere(2, 0, 0);
let sphere1_3 = new Sphere(0, 0, 2);
scene.scene.add(sphere1_1.sphereMesh, sphere1_2.sphereMesh, sphere1_3.sphereMesh);