import * as THREE from 'three';
import mRoom from "./res/objs/mBedroom";

export default class Sphere {
    constructor(scene, posX, posY, posZ, sphGeometry, sphMaterial, sphereMesh) {
        this.scene = scene.scene;
        // this.preloader = document.querySelector('#loader');
        // this.preloader.style.display = 'flex';
        this.imgPath = mRoom.key1;
        this.imgLoader = new THREE.TextureLoader().load(this.imgPath);
        this.sphGeometry = sphGeometry;
        this.sphMaterial = sphMaterial;
        this.sphereMesh = sphereMesh;
        this.add();
        this.move(posX, posY, posZ);
        // this.preloader.style.display = 'none';
    }

    add() {
        this.sphGeometry = new THREE.SphereGeometry(1, 32, 32);
        this.sphMaterial = new THREE.MeshBasicMaterial({
            map: this.imgLoader,
            side: THREE.BackSide
        });
        this.sphereMesh = new THREE.Mesh(this.sphGeometry, this.sphMaterial);
        this.scene.add(this.mesh);
    }

    remove() {
        this.scene.remove(this.mesh);
    }

    hide() {
        this.mesh.visible = false;
    }

    visible() {
        this.mesh.visible = true;
    }

    rotate(rotateY) {
        this.mesh.rotateY(rotateY);
    }

    move(x = 0, y = 0, z = 0) {
        this.mesh.position.set(x, y, z)
    }

    get mesh() {
        return this.sphereMesh;
    }
}