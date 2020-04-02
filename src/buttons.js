import Sphere from "./sphere";
import SceneInit from "./scene";
import TWEEN from "@tweenjs/tween.js";
import lRoom from "./res/objs/living";
import hRoom from "./res/objs/hall";
import * as THREE from "three";
import jsonObject from "./jsonObject";

export default class Button extends Sphere {
  constructor(scene, name) {
    super(scene);
    //create btns
    this.name = name;
    const createBtn = document.createElement("button");
    createBtn.classList = `${this.name} button`;
    createBtn.textContent = this.name;
    const buttonsSelector = document.querySelector(".buttons");
    buttonsSelector.appendChild(createBtn);
    //create map points
    const createMapPoint = document.createElement("div");
    createMapPoint.classList = `${this.name} point`;
    const selectorMapPoint = document.querySelector(".points");
    selectorMapPoint.appendChild(createMapPoint);
  }
  click() {
    document.querySelectorAll(".point")[0].id = "pointActive";
    document.querySelectorAll(`.${this.name}`).forEach(name => {
      name.addEventListener("click", () => {
        const pointList = document.querySelectorAll(".point");
        pointList.forEach(points => {
          points.id = "nonActive";
        });
        //инициализируем прелоадер
        this.preloader.style.display = "flex";
        //очищаем сцену
        while (this.scene.children.length > 0) {
          this.scene.remove(this.scene.children[0]);
        }
        if (this.name === "masterRoom") {
          pointList[0].id = "pointActive";
          this.imgLoader = new THREE.TextureLoader().load(this.imgPath, () => {
            return (this.preloader.style.display = "none");
          });
          this.add();
        } else if (this.name === "livingRoom") {
          pointList[1].id = "pointActive";
          this.imgPath = jsonObject.data[5].src;
          this.imgLoader = new THREE.TextureLoader().load(this.imgPath, () => {
            return (this.preloader.style.display = "none");
          });
          this.add();
        } else if (this.name === "hallRoom") {
          pointList[2].id = "pointActive";
          this.imgPath = jsonObject.data[6].src;
          this.imgLoader = new THREE.TextureLoader().load(this.imgPath, () => {
            return (this.preloader.style.display = "none");
          });
          this.add();
        }
      });
    })
  }
}
