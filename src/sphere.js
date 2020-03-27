import * as THREE from 'three';
import SceneInit from "./scene";
import mRoom from "./res/objs/mBedroom";

export default class Sphere extends SceneInit{
    constructor(imgPath, imgLoader, sphGeometry, sphMaterial, sphereMesh) {
        super()
        this.imgPath = imgPath;
        this.imgLoader = imgLoader;
        this.sphGeometry = sphGeometry;
        this.sphMaterial = sphMaterial;
        this.sphereMesh = sphereMesh;
    }
    create() {
        this.imgPath = mRoom.key1;
        this.imgLoader = new THREE.TextureLoader().load(this.imgPath);
        this.sphGeometry = new THREE.SphereGeometry(1, 32, 32);
        this.sphMaterial = new THREE.MeshBasicMaterial({
            map: this.imgLoader,
            side: THREE.BackSide
        });
        console.log(this.sphGeometry);
        console.log(this.sphMaterial);
        // this.sphereMesh = THREE.Mesh(this.sphGeometry, this.sphMaterial);
    }
    get mesh() {
        // return  console.log(THREE.Mesh(sphGeometry, sphMaterial));
    }
}