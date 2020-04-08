import _ from "lodash";
import SceneInit from "./scene";
import * as THREE from "three";
import Sphere from "./sphere";
import Button from "./buttons";
import jsonObject from "./jsonObject";
import Arrow from "./arrow";

class Init {
  constructor() {
    this.loader = new THREE.TextureLoader();
    this.preloader = document.querySelector("#loader");
    let scene = new SceneInit();
    scene.animate();
    this.initPreload(scene);
    this.mapUsability();
    scene.onButtonClick();
  }

  initPreload(scene) {
    this.preloader.style.display = "flex";
    this._preload().then(this._create(scene));
  }

  _preload() {
    return Promise.all(
      jsonObject.images.map(url => {
        return new Promise(resolve => this._loadImage(url, resolve));
      })
    );
  }

  _loadImage(url, callback) {
    this.loader.load(url, () => (this.preloader.style.display = "none"));
  }

  _create(scene) {
    this.addButtons(scene);
    this.addSpheres(scene);
    this.addArrows(scene);
  }

  addSpheres(scene) {
    jsonObject.data.forEach(el => {
      if (el.name === "masterRoom") {
        new Sphere(scene, el.src, el.posX, el.posY, el.posZ);
      }
    });
  }

  addButtons(scene) {
    jsonObject.buttons.forEach(el => {
      new Button(scene, el.name).click();
    });
    document.querySelectorAll(".button").forEach(el => {
      el.addEventListener("click", () => {
        this.preloader.style.display = "flex";
        return this._preload();
      });
    });
  }

  addArrows(scene) {
    jsonObject.data.forEach(arrow => {
      if (arrow.name === "masterRoom" && arrow.secName === "one") {
        for (let i = 0; i < arrow.buttons.length; i++) {
          let arr = new Arrow(
            scene,
            arrow.buttons[i].x,
            arrow.buttons[i].y,
            arrow.buttons[i].z
          );
          let grp = new THREE.Group();
          arr.arrMesh.lookAt(scene.camera.position);
          arr.arrMesh.rotateX(Math.PI * 1.7);
          arr.arrMesh.rotateZ(Math.PI / 2);
          grp.add(arr.arrMesh);
          arr.addToScene(grp);
        }

      }
    });
  }
  mapUsability() {
    let active = false;
    document.querySelector(".map").addEventListener("click", () => {
      const points = document.querySelector(".points");
      const map = document.querySelector(".map");
      if (active === false) {
        points.classList.remove("PEadd");
        points.classList.add("PEnone");
        map.classList.remove("mapActive");
        map.classList.add("mapNonactive");
        return (active = true);
      } else if (active === true) {
        points.classList.remove("PEnone");
        points.classList.add("PEadd");
        map.classList.remove("mapNonactive");
        map.classList.add("mapActive");
        return (active = false);
      }
    });
  }
}

new Init();
