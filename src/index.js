import _ from "lodash";
import SceneInit from "./scene";
import * as THREE from "three";
import Sphere from './sphere';
import Button from "./buttons";

class Init {
    constructor() {
        let scene = new SceneInit();
        scene.animate();
        this.addSpheres(scene);
        this.addButtons(scene);
        this.mapUsability();
        scene.onButtonClick();
    }

    addSpheres(scene) {
        let sphere1_1 = new Sphere(scene, 0, 0, 0);
        let sphere1_2 = new Sphere(scene, 2, 0, 0);
        let sphere1_3 = new Sphere(scene, 0, 0, 2);
    }

    addButtons(scene) {
        let btn1 = new Button(scene, 'masterRoom');
        btn1.click();
        let btn2 = new Button(scene, 'livingRoom');
        btn2.click();
        let btn3 = new Button(scene, 'hallRoom');
        btn3.click();
    }

    mapUsability() {
        let pointList = document.querySelectorAll('.point');
        let pointContainer = document.querySelector('.points');
        pointContainer.style.display = 'none';
        pointList[0].addEventListener('click', () => {
            pointList[1].style.background = 'url(./point.png)';
            pointList[2].style.background = 'url(./point.png)';
            pointList[0].style.background = 'url(./point-active.png)';
            return document.querySelector('#masterRoom').click();
        })

        pointList[1].addEventListener('click', () => {
            pointList[0].style.background = 'url(./point.png)';
            pointList[2].style.background = 'url(./point.png)';
            pointList[1].style.background = 'url(./point-active.png)';
            return document.querySelector('#livingRoom').click();
        })

        pointList[2].addEventListener('click', () => {
            pointList[0].style.background = 'url(./point.png)';
            pointList[1].style.background = 'url(./point.png)';
            pointList[2].style.background = 'url(./point-active.png)';
            return document.querySelector('#hallRoom').click();
        })
        let active = false;
        document.querySelector('.map').addEventListener('click', () => {
            if (active === false) {
                pointContainer.style.display = 'block';
                document.querySelector('.map').style = "width: 100%; height: 100%; zIndex: 999; right: 0; bottom: 0";
                return active = true
            } else if (active === true) {
                pointContainer.style.display = 'none';
                document.querySelector('.map').style = "width: 320px; height: 250px; zIndex: unset; right: 2%; bottom: 2%";
                return active = false;
            }
        })
    }
}

new Init();