import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import jsonObject from "./jsonObject.js";
import Sphere from "./sphere.js";
class SceneInit {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );
    this.camera.position.set(0.0001, 0, 0);
    this.renderer = new THREE.WebGLRenderer();
    document.body.appendChild(this.renderer.domElement);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.enableZoom = true;
    this.controls.rotateSpeed = 0.6;
    this.animate = this.animate.bind(this);
    window.addEventListener("resize", this.onWindowResize, false);
    this.mouse = new THREE.Vector2();
    this.onClick = this.onClick.bind(this);
    this.raycaster = new THREE.Raycaster();
    this.raycaster.setFromCamera(this.mouse, this.camera);
    this.onMouseMove()
    document.addEventListener('click', this.onClick)
  }

  animate() {
    this.controls.update();
    requestAnimationFrame(this.animate);
    this.render();
  }

  onClick() {
    console.log(this.interId)
    setTimeout(() => {
      console.log(this.interId)
    }, 0);
  }

  onMouseMove() {
    document.addEventListener(
      "mousemove",
      event => {
        event.preventDefault();
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      }
    );
  }

  rayCast() {
    let intersects = this.raycaster.intersectObjects(this.scene.children);
      console.log(intersects && intersects.length && intersects.map((find) => (find.object.name)))
      this.interId = intersects[0];
  }

  render() {
    this.rayCast();
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
