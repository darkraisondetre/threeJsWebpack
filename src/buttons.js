import Sphere from "./sphere";
import SceneInit from "./scene";

export default class Button extends SceneInit {
    constructor(scene, name) {
        super();
        this.scene = scene.scene;
        this.name = name;
        this.createBtn = document.createElement('button');
        this.createBtn.className = 'button';
        this.createBtn.textContent = this.name;
        this.createBtn.id = this.name;
        this.selector = document.querySelector('.buttons');
        this.selector.appendChild(this.createBtn);
        // console.log(this)
    }
    click() {
        document.querySelector(`#${this.createBtn.id}`).addEventListener('click', () => {
            console.log(`click on: ${this.createBtn.id}`);
            while (this.scene.children.length > 0) {
                this.scene.remove(this.scene.children[0]);
            }
            this.scene.add()
        })
    }
}