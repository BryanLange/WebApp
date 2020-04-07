import Phaser from 'phaser'

import SceneMain from './SceneMain'
import Chunk from './Entities'

var config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 728,
    backgroundColor: "black",
    physics: {
        default: "arcade",
        arcade: {
            Gravity: { x: 0, y: 0 }
        }
    },
    scene: [SceneMain],
    pixelArt: true,
    roundPixels: true
};
var game = new Phaser.Game(config);