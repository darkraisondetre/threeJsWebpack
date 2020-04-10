import Sphere from "./sphere";
import * as THREE from "three";
import jsonObject from "./jsonObject";

export default class Button extends Sphere{
  constructor(scene, name){
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
        for (let i = 0; i < 7; i++) {
          jsonObject.data.forEach(ell => {
            if (this.name === ell.name) {
              pointList[ell.id].id = "pointActive";
            }
          });
        }

        //очищаем сцену
        while (this.scene.children.length) {
          this.scene.remove(this.scene.children[0]);
        }

        jsonObject.data.forEach(el => {
          if (this.name === el.name) {
            this.imgPath = el.src;
            this.imgLoader = new THREE.TextureLoader().load(this.imgPath);
            this.add();
            this.move(el.posX, el.posY, el.posZ);
          }
        });
      });
    });
  }
}
