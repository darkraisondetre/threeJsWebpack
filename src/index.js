import _ from "lodash";
import SceneInit from "./scene";
import * as THREE from "three";
import Sphere from "./sphere";
import Button from "./buttons";
import jsonObject from "./jsonObject";
import mRoom from "./res/objs/mBedroom";

class Init {
  constructor() {
    let scene = new SceneInit();
    scene.animate();
    this.addButtons(scene);
    this.addSpheres(scene);
    this.mapUsability();
    scene.onButtonClick();
  }

  addSpheres(scene) {
    let sphere1_1 = new Sphere(scene, jsonObject.data[0].src, 0, 0, 0);
    let sphere1_2 = new Sphere(scene, jsonObject.data[1].src, 2, 0, 0);
    let sphere1_3 = new Sphere(scene, jsonObject.data[2].src, 0, 0, 2);
    let sphere1_4 = new Sphere(scene, jsonObject.data[3].src, -2, 0, 0);
    let sphere1_5 = new Sphere(scene, jsonObject.data[4].src, 0, 0, -2);
  }

  addButtons(scene) {
    let btn1 = new Button(scene, "masterRoom");
    btn1.click();
    let btn2 = new Button(scene, "livingRoom");
    btn2.click();
    let btn3 = new Button(scene, "hallRoom");
    btn3.click();
  }

  mapUsability() {
    let active = false;
    document.querySelector(".map").addEventListener("click", () => {
      if (active === false) {
        document.querySelector(".map").style =
          "width: 100%; height: 100%; zIndex: 999; right: 0; bottom: 0";
        return (active = true);
      } else if (active === true) {
        document.querySelector(".map").style =
          "width: 320px; height: 250px; zIndex: unset; right: 2%; bottom: 2%";
        return (active = false);
      }
    });
  }
}

new Init();
