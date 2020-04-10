import * as THREE from "three";
import arrowImg from "../dist/arrow.png";
export default class Arrow {
  constructor(scene, arrPosX, arrPosY, arrPosZ) {
    this.group = new THREE.Group();
    this.scene = scene.scene;
    this.camera = scene.camera;
    this.arrImg = new THREE.TextureLoader().load(arrowImg);
    this.addArrow();
    //after moving or lookAt object removed from pull
    this.moveArrow(arrPosX, arrPosY, arrPosZ);
  }

  moveArrow(arrPosX = 0, arrPosY = 0, arrPosZ = 0) {
    this.group.position.set(arrPosX, arrPosY, arrPosZ);
  }

  addArrow() {
    this.arrowGeometry = new THREE.PlaneGeometry(0.12, 0.24, 32, 32);
    this.arrowMaterial = new THREE.MeshBasicMaterial({
      map: this.arrImg,
      side: THREE.DoubleSide,
      transparent: true
    });
    this.arrowMesh = new THREE.Mesh(this.arrowGeometry, this.arrowMaterial);
    this.arrowMesh.name = "Arrow";
    this.group.add(this.arrMesh);
    this.group.updateMatrix()
  }

  addToScene() {
    this.scene.add(this.group);
  }

  look() {
    this.arrowMesh.lookAt(this.camera.position)
    this.arrowMesh.rotateX(Math.PI * 1.63);
    this.arrowMesh.rotateZ(Math.PI / 2);
  }

  get arrMesh() {
    return this.arrowMesh;
  }
}
