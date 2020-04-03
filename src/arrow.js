import * as THREE from 'three';

export default class Arrow {
    constructor(scene, posX, posY, posZ) {
        this.scene = scene.scene;
        this.addArrow();
        this.moveArrow(posX, posY, posZ);
    }

    addArrow() {
        this.arrowGeometry = new THREE.PlaneGeometry(0.024, 0.006, 2);
        this.arrowMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide
        });
        this.arrowMesh = new THREE.Mesh(this.arrowGeometry, this.arrowMaterial);
        this.arrowMesh.rotateX(Math.PI / 2);
        this.arrowMesh.rotateY(Math.PI);
        this.arrowMesh.rotateZ(-Math.PI/ 4);
        this.scene.add(this.arrMesh);
        this.arrowMesh2 = this.arrMesh.clone();
        this.arrowMesh2.rotateZ(Math.PI/ 2);
        this.scene.add(this.arrowMesh2);
    }

    moveArrow(posX = 0, posY = 0, posZ = 0) {
        this.arrMesh.position.set(posX - 0.0065, posY, posZ);
        this.arrowMesh2.position.set(posX + 0.0065, posY, posZ);
    }

    get arrMesh() {
        return this.arrowMesh;
    }
}