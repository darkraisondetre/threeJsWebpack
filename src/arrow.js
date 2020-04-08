import * as THREE from "three";
import arrowImg from "../dist/arrow.png";
import SceneInit from "./scene.js";

export default class Arrow {
  constructor(scene, arrPosX, arrPosY, arrPosZ) {
    this.scene = scene.scene;
    this.group = new THREE.Group();
    this.arrImg = new THREE.TextureLoader().load(arrowImg);
    this.addArrow();
    // this.moveArrow(arrPosX, arrPosY, arrPosZ);
    // this.addToScene()
  }

  moveArrow(arrPosX = 0, arrPosY = 0, arrPosZ = 0) {
     this.arrMesh.position.set(arrPosX, arrPosY, arrPosZ);
  }

  addArrow() {
    this.arrowGeometry = new THREE.PlaneGeometry(0.04, 0.06);
    this.arrowMaterial = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: this.arrImg,
      transparent: true
    });
    this.arrowMesh = new THREE.Mesh(this.arrowGeometry, this.arrowMaterial);
    this.arrMesh.name = "Arrow";
    // this.arrMesh.position.copy(new THREE)
    
    // this.arrMesh.lookAt(this.scene)
    // this.arrMesh.rotateX(Math.PI * 1.7);
    // this.arrMesh.rotateZ(Math.PI / 2);
    // this.scene.add(this.arrMesh);

  }

  addToScene(arrMesh) {
    return this.scene.add(arrMesh);
  }

  get arrMesh() {
    return this.arrowMesh;
  }
}
