import _ from "lodash";
import SceneInit from "./scene";
import * as THREE from "three";
import mRoom from "./res/objs/mBedroom";
import Sphere from './sphere';
import Button from "./buttons";

class Init {
    constructor() {
        let scene = new SceneInit();
        // new Button(scene, 'masterRoom').click();

        // new Button(scene, 'bathRoom').click();
        // console.log(scene.scene.children)
        scene.animate();
        let sphere1_1 = new Sphere(scene, 0, 0, 0);
        let sphere1_2 = new Sphere(scene, 2, 0, 0);
        let sphere1_3 = new Sphere(scene, 0, 0, 2);
    }
}

new Init();




// scene.scene.add(sphere1_1.sphereMesh, sphere1_2.sphereMesh, sphere1_3.sphereMesh);