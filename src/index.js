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
      jsonObject.data.forEach(el => {
          new Sphere(scene, el.src, el.posX, el.posY, el.posZ);
      })
  }

  addButtons(scene) {
    //   jsonObject.data.forEach(el => {
    //       new Button
    //   });
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
          "width: 100%; height: 100%; right: 0; bottom: 0";
          document.querySelector('.buttons').style.zIndex = -1;
        return (active = true);
      } else if (active === true) {
        document.querySelector(".map").style =
          "width: 320px; height: 250px; right: 2%; bottom: 10%";
        document.querySelector('.buttons').style.zIndex = 0;
        return (active = false);
      }
    });
  }
}

new Init();
