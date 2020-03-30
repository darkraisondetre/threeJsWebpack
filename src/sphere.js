import * as THREE from 'three';
import mRoom from "./res/objs/mBedroom";

export default class Sphere {
    constructor(scene, posX, posY, posZ) {
        this.scene = scene.scene;
        // this.preloader = document.querySelector('#loader');
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
        this.add();
        // this.preloader.style.display = 'none';
    }

    add() {
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

    // move(moveX, moveY, moveZ) {
    //     this.mesh.translateOnAxis(moveX, moveY, moveZ);
    // }

    move(moveX, moveY, moveZ) {
        this.mesh.translateX(moveX);
        this.mesh.translateX(moveY);
        this.mesh.translateX(moveZ);
    }

    get mesh() {
        return this.sphereMesh;
    }
}