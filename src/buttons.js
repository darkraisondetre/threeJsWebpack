import Sphere from "./sphere";
import SceneInit from "./scene";
import TWEEN from '@tweenjs/tween.js';
import lRoom from "./res/objs/living";
import hRoom from './res/objs/hall';
import * as THREE from 'three';
export default class Button extends Sphere {
    constructor(scene, name) {
        super(scene);
        //create btn
        this.name = name;
        this.activePoint = false;
        this.createBtn = document.createElement('button');
        this.createBtn.classList = `${this.name} button`;
        this.createBtn.textContent = this.name;
        this.selector = document.querySelector('.buttons');
        this.selector.appendChild(this.createBtn);
        //create point
        this.createPoint = document.createElement('div');
        this.createPoint.classList = `point`;
        this.selectorPoint = document.querySelector('.points');
        this.selectorPoint.appendChild(this.createPoint);
        this.pointList = document.querySelectorAll('.point');
    }
    click() {
        document.querySelector(`.${this.createBtn.classList[0]}`).addEventListener('click', () => {
            this.preloader.style.display = 'flex';
            while (this.scene.children.length > 0) {
                this.scene.remove(this.scene.children[0]);
            }
            if (this.name === 'masterRoom') {
                this.scene.add(this.mesh);
                this.imgLoader = new THREE.TextureLoader().load(this.imgPath, () => {
                    return this.preloader.style.display = 'none'
                });
            } else if (this.name === 'livingRoom') {
                this.imgPath = lRoom.key1;
                this.imgLoader = new THREE.TextureLoader().load(this.imgPath, () => {
                    return this.preloader.style.display = 'none'
                });
                this.add();
            } else if (this.name === 'hallRoom') {
                this.imgPath = hRoom.key1;
                this.imgLoader = new THREE.TextureLoader().load(this.imgPath, () => {
                    return this.preloader.style.display = 'none'
                });
                this.add();
            }
        })
    }
}