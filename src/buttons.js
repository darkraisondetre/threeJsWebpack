import Sphere from "./sphere";
import SceneInit from "./scene";
import TWEEN from '@tweenjs/tween.js';
import lRoom from "./res/objs/living";
import hRoom from './res/objs/hall';
import * as THREE from 'three';
export default class Button extends Sphere {
    constructor(scene, name, camera) {
        super(scene, camera);
        this.name = name;
        this.createBtn = document.createElement('button');
        this.createBtn.className = 'button';
        this.createBtn.textContent = this.name;
        this.createBtn.id = this.name;
        this.selector = document.querySelector('.buttons');
        this.selector.appendChild(this.createBtn);
    }
    click() {
        document.querySelector(`#${this.createBtn.id}`).addEventListener('click', () => {
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
                console.log(this.camera)
                this.imgPath = hRoom.key1;
                this.imgLoader = new THREE.TextureLoader().load(this.imgPath, () => {
                    return this.preloader.style.display = 'none'
                });
                this.add();
                console.log(this.imgLoader);
            }
        })
    }
}