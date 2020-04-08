import * as THREE from "three";
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";
import jsonObject from "./jsonObject.js";
class SceneInit {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    this.camera = new THREE.PerspectiveCamera(
      85,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );
    this.camera.position.set(0.0001, 0, 0);
    this.renderer = new THREE.WebGLRenderer();
    document.querySelector("canvas")
      ? null
      : document.body.appendChild(this.renderer.domElement);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.enableZoom = true;
    this.controls.rotateSpeed = 0.6;
    this.animate = this.animate.bind(this);
    window.addEventListener("resize", this.onWindowResize, false);
    this.mouse = new THREE.Vector2();
    document.addEventListener("click", this.onMouseMove(), false);
  }

  animate() {
    this.controls.update();
    requestAnimationFrame(this.animate);
    this.render();
  }

  onMouseMove() {
    document.addEventListener("click", () => {
      event.preventDefault();
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });
  }

  onMouseDown() {
    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(this.mouse, this.camera);
    let intersects = raycaster.intersectObjects(this.scene.children);
    if (intersects.length > 0) {
      for (let i = 0; i < intersects.length; i++) {
        if (intersects[i].object.name === "Arrow") {
          console.log(intersects[i].object.geometry.type);
          console.log(intersects[i].object.material);
          intersects[0].object.material.opacity = 0.5;
        }
      }
    }
  }

  render() {
    this.onMouseDown();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera = window.innerWidth / window.innerHeight;
  }

  onButtonClick() {
    let btnList = document.querySelectorAll(".button");
    btnList.forEach(btn => {
      btn.addEventListener("click", () => {
        this.camera.position.y = 0;
      });
    });
  }
}
export default SceneInit;
