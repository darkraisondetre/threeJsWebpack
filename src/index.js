import _ from "lodash";
import SceneInit from "./scene";
import * as THREE from "three";
import mRoom from "./res/objs/mBedroom";
import Sphere from './sphere';
import Button from "./buttons";

class Init {
    constructor() {
        let scene = new SceneInit();
        scene.animate();
        let pointList = document.querySelectorAll('.point');
        let sphere1_1 = new Sphere(scene, 0, 0, 0);
        let sphere1_2 = new Sphere(scene, 2, 0, 0);
        let sphere1_3 = new Sphere(scene, 0, 0, 2);
        let btn1 = new Button(scene, 'masterRoom');
        btn1.click();
        let btn2 = new Button(scene, 'livingRoom');
        btn2.click();
        let btn3 = new Button(scene, 'hallRoom');
        btn3.click();

        pointList[0].addEventListener('click', (btn2) => {
            pointList[1].style.background = 'url(./point.png)';
            pointList[2].style.background = 'url(./point.png)';
            pointList[0].style.background = 'url(./point-active.png)';
            return document.querySelector('#masterRoom').click();
        })

        pointList[1].addEventListener('click', (btn2) => {
            pointList[0].style.background = 'url(./point.png)';
            pointList[2].style.background = 'url(./point.png)';
            pointList[1].style.background = 'url(./point-active.png)';
            return document.querySelector('#livingRoom').click();
        })

        pointList[2].addEventListener('click', (btn2) => {
            pointList[0].style.background = 'url(./point.png)';
            pointList[1].style.background = 'url(./point.png)';
            pointList[2].style.background = 'url(./point-active.png)';
            return document.querySelector('#hallRoom').click();
        })
    }
}

const init = new Init();