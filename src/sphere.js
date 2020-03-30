import * as THREE from 'three';
import SceneInit from "./scene";
import mRoom from "./res/objs/mBedroom";

export default class Sphere {
    constructor(posX, posY, posZ) {
        this.preloader = document.querySelector('#loader');
        // this.preloader.style.display = 'flex';
        this.imgPath = mRoom.key1;
        this.imgLoader = new THREE.TextureLoader().load(this.imgPath);
        this.sphGeometry = new THREE.SphereGeometry(1, 32, 32);
        this.sphMaterial = new THREE.MeshBasicMaterial({
            map: this.imgLoader,
            side: THREE.BackSide
        });
        this.sphereMesh = new THREE.Mesh(this.sphGeometry, this.sphMaterial);
        this.sphereMesh.position.x = posX;
        this.sphereMesh.position.y = posY;
        this.sphereMesh.position.z = posZ;
        // this.preloader.style.display = 'none';
    }

    get mesh() {
        return this.sphereMesh;
    }
}