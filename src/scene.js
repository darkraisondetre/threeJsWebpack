import * as THREE from "three";
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";
import jsonObject from "./jsonObject.js";
class SceneInit {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0.0001, 0, 0);
    this.camera.lookAt(2, 0, 0);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.enableZoom = true;
    this.controls.rotateSpeed = 0.6;
    this.controls.screenSpacePanning = true;
    this.animate = this.animate.bind(this);
    window.addEventListener("resize", this.onWindowResize, false);
    this.mouse = new THREE.Vector2();
    this.onMouseMove();
  }

  animate() {
    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(this.mouse, this.camera);
    let intersects = raycaster.intersectObjects(this.scene.children);
    // for(let i = 0; g)
    this.controls.update();
    requestAnimationFrame(this.animate);
    this.render();
  }

  render() {
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

  onMouseMove() {
    document.body.addEventListener("mousemove", event => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = (event.clientY / window.innerHeight) * 2 + 1;
    });
  }
}

export default SceneInit;
