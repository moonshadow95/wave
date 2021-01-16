export class Point {
    constructor(index, x, y) {
        this.x = x;
        this.y = y;
        //중심 y값
        this.fixedY = y;
        this.speed = 0.07;
        this.cur = index;
        this.max = Math.random() * 100 + 120;
    }

    update() {
        //speed값 만큼 cur 값이 더해진다
        this.cur += this.speed;
        //계속 커지는 cur에 sin 함수를 적용하여 -1 ~ 1 사이로 움직이게 한다
        //-1 ~ 1인 cur에 150~250 사이의 값을 곱해준다
        this.y = this.fixedY + Math.sin(this.cur) * this.max;
    }
}
