import * as THREE from "three";
import arrowImg from "../dist/arrow.png";
import SceneInit from "./scene.js";

export default class Arrow extends SceneInit {
  constructor(scene, posX, posY, posZ) {
    super();
    this.scene = scene.scene;
    this.addArrow();
    this.moveArrow(posX, posY, posZ);
  }

  addArrow() {
    const arrImg = new THREE.TextureLoader().load(arrowImg);
    this.arrowGeometry = new THREE.PlaneGeometry(0.04, 0.06);
    this.arrowMaterial = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: arrImg,
      transparent: true
    });
    this.arrowMesh = new THREE.Mesh(this.arrowGeometry, this.arrowMaterial);
    this.arrowMesh.name = "Arrow";
    this.scene.add(this.arrowMesh);
  }

  moveArrow(posX = 0, posY = 0, posZ = 0) {
    this.arrowMesh.position.set(posX, posY, posZ);
  }
}
