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
    // this.onMouseMove();
    // this.onMouseDown();
    // document.addEventListener('click', this.onMouseDown(), false)
  }

  animate() {
    this.onMouseDown();
    this.controls.update();
    requestAnimationFrame(this.animate);
    this.render();
  }

  onMouseDown() {
    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(this.mouse, this.camera);
    let intersects = raycaster.intersectObjects(this.scene.children);
    intersects.forEach(el => {
      addEventListener("click", () => {
        if (el.object.geometry.type === "PlaneGeometry") {
          console.log("click");
          el.object.material.transparent = true;
          el.object.material.color.set(0xff0000);
        }
      });
    });
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
