import { Wave } from "./wave.js";

export class WaveGroup {
    constructor() {
        this.totalWaves = 4;
        this.totalPoints = 6;

        this.color = [
            "rgba(162, 155, 254,0.4)",
            "rgba(253, 121, 168,0.4)",
            "rgba(108, 92, 231,0.4)",
            "rgba(116, 185, 255,0.4)",
        ];
        this.waves = [];

        for (let i = 0; i < this.totalWaves; i++) {
            const wave = new Wave(i, this.totalPoints, this.color[i]);
            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}
