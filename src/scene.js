import * as THREE from "three";
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";

class SceneInit {
  constructor(scene, camera, renderer, fov = 75, controls, enableZoom, enableDamping, rotateSpeed, screenSpacePanning) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.fov = fov;
    this.controls = controls;
    this.controls = enableZoom;
    this.controls = enableDamping;
    this.controls = rotateSpeed;
    this.controls = screenSpacePanning;
  }
  init() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.x = 0.001;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.enableZoom = false;
    this.controls.rotateSpeed = 0.6;
    this.controls.screenSpacePanning = true;

    //if window resizes
    window.addEventListener("resize", this.onWindowResize, false);
  }

  animate() {
    this.controls.update();
    requestAnimationFrame(this.animate.bind(this));
    this.render();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

export default SceneInit;