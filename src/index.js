import _ from "lodash";
import SceneInit from "./scene";
import * as THREE from "three";
import mRoom from "./res/objs/mBedroom";
import Sphere from './sphere';

let scene = new SceneInit();
scene.init();
scene.animate();

// let sphere1 = new Sphere();
let sphere1 = new Sphere();
sphere1.create();
// sphere1.mesh();
// let meshS = sphere1.mesh();
// scene.scene.add(meshS);

// let imgPath = mRoom.key4;
// let imgLoader = new THREE.TextureLoader().load(imgPath); 
// let sphGeometry = new THREE.SphereGeometry(1, 32, 32);
// let sphMaterial = new THREE.MeshBasicMaterial({
//     map: imgLoader,
//     side: THREE.BackSide
// });
// let sphMesh = new THREE.Mesh(sphGeometry, sphMaterial);
// scene.scene.add(sphMesh);
