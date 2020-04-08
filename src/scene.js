import * as THREE from "three";
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";
import jsonObject from "./jsonObject.js";
import Sphere from "./sphere.js";
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
    this.onMouseMove();
  }

  animate() {
    this.controls.update();
    requestAnimationFrame(this.animate);
    this.render();
  }

  onMouseMove() {
    window.addEventListener(
      "mouseup",
      event => {
        event.preventDefault();
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      },
      false
    );
  }

  onMouseDown() {
    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(this.mouse, this.camera);
    let intersects = raycaster.intersectObjects(this.scene.children);
    if (
      intersects.length > 0 &&
      intersects.some(obj => obj.object.name === "Arrow")
    ) {
      intersects[0].object.material.opacity = 1;
      let interId = intersects[0].object.id;
      console.log(interId);
      if (interId === 19) {
        this.scene.children.forEach(sc => {
          if (sc.name === "Sphere" && sc.id === 54) {
            sc.position.set(0, 0, 0);
          }
        });
      } else if (interId === 27) {
        this.scene.children.forEach(sc => {
          if (sc.name === "Sphere" && sc.id === 52) {
            sc.position.set(0, 0, 0);
          }
        });
      } else if (interId === 35) {
        this.scene.children.forEach(sc => {
          if (sc.name === "Sphere" && sc.id === 55) {
            sc.position.set(0, 0, 0);
          }
        });
      } else if (interId === 43) {
        this.scene.children.forEach(sc => {
          if (sc.name === "Sphere" && sc.id === 53) {
            sc.position.set(0, 0, 0);
          }
        });
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
