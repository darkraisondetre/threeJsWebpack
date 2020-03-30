import * as THREE from "three";
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";
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
        this.camera.position.set(0.0000001, 0, 0);
        this.camera.lookAt(2, 0, 0);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        // this.controls.enableZoom = false;
        this.controls.rotateSpeed = 0.6;
        this.controls.screenSpacePanning = true;
        this.animate = this.animate.bind(this)
        window.addEventListener("resize", this.onWindowResize, false);
    }

    animate() {
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
}

export default SceneInit;