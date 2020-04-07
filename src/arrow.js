import * as THREE from 'three';
import arrowImg from '../dist/arrow.png'
import SceneInit from './scene.js'

export default class Arrow extends SceneInit {
    constructor(scene, posX, posY, posZ) {
        super();
        this.scene = scene.scene;
        this.addArrow();
        this.moveArrow(posX, posY, posZ);
    }

    addArrow() {
        const group = new THREE.Group();
        const arrImg = new THREE.TextureLoader().load(arrowImg);
        this.arrowGeometry = new THREE.PlaneGeometry(0.04, 0.06);
        this.arrowMaterial = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
            map: arrImg,
            transparent: true
        });
        this.arrowMesh = new THREE.Mesh(this.arrowGeometry, this.arrowMaterial);
        this.arrowMesh.rotateX(Math.PI / 2);
        this.arrowMesh.rotateZ(Math.PI / 2);
        // this.arrowMesh.lookAt(this.camera)
        group.add(this.arrowMesh);
        // group.lookAt(4, 0, 0);
        this.scene.add(group);
    }

    moveArrow(posX = 0, posY = 0, posZ = 0) {
        this.arrMesh.position.set(posX, posY, posZ);
    }

    get arrMesh() {
        return this.arrowMesh;
    }
}