import { WaveGroup } from "./wave_group.js";

class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        window.addEventListener("resize", this.resize.bind(this), false);

        //웨이브 객체 생성
        this.WaveGroup = new WaveGroup();
        //초기사이즈를 기준으로 resize 함수 실행
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    //사이즈가 변했을 때 실행될 콜백
    resize() {
        // 레티나 디스플레이(픽셀 수가 2배)를 위한 설정
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;

        //canvas에서 픽셀 크기를 2배로 늘림
        this.ctx.scale(2, 2);

        //웨이브에도 resize 적용되도록 함
        this.WaveGroup.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {
        //clear
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        //애니메이션이 실행되면 웨이브가 그려짐
        this.WaveGroup.draw(this.ctx);
        //this가 window를 가리키지 않도록 bind함
        requestAnimationFrame(this.animate.bind(this));
    }
}

//window 로드되면 App 객체 생성
window.onload = () => {
    new App();
};
