import _ from "lodash";
import SceneInit from "./scene";
import * as THREE from "three";
import Sphere from "./sphere";
import Button from "./buttons";
import jsonObject from "./jsonObject";
import mRoom from "./res/objs/mBedroom";
import lRoom from "./res/objs/living";
import hRoom from "./res/objs/hall";
import json from "./json";
import Arrow from "./arrow";

const images = [
  mRoom.key1,
  mRoom.key2,
  mRoom.key3,
  mRoom.key4,
  mRoom.key5,
  lRoom.key1,
  lRoom.key2,
  lRoom.key3,
  hRoom.key1
]

class Init {
  constructor() {
    this.loader = new THREE.TextureLoader();
    this.preloader = document.querySelector('#loader');
    this.preloader.style.display = 'flex';
    let scene = new SceneInit();
    scene.animate();
    this.initPreload(scene)
    this.mapUsability();
    scene.onButtonClick();
    new Arrow(scene, 0, -0.06, 0.14)
  }

  initPreload(scene) {
    this._preload().then(this._create(scene)).then(this.preloader.style.display = 'none');
  }

  _preload() {
    return Promise.all(images.map(url => {
      return new Promise(resolve => this._loadImage(url, resolve))
    }))
  }

  _loadImage(url, callback) {
    this.loader.load(url, callback);
  }

  _create(scene) {
    this.addButtons(scene);
    this.addSpheres(scene);
    
  }

  addSpheres(scene) {
    jsonObject.data.forEach(el => {
      if(el.name === 'masterRoom') {
        new Sphere(scene, el.src, el.posX, el.posY, el.posZ);
      }
    });
  }

  addButtons(scene) {
    jsonObject.buttons.forEach(el => {
      new Button(scene, el.name).click();
    });
  }

  mapUsability() {
    let active = false;
    document.querySelector(".map").addEventListener("click", () => {
      const points = document.querySelector(".points");
      const map = document.querySelector(".map");
      if (active === false) {
        points.style.pointerEvents = "unset";
        map.style =
          "width: 100%; height: 100%; right: 0; bottom: 0; z-index: 999";
        return (active = true);
      } else if (active === true) {
        points.style.pointerEvents = "none";
        map.style =
          "width: 320px; height: 250px; right: 2%; bottom: 10%; z-index: unset";
        return (active = false);
      }
    });
  }
}

new Init();
