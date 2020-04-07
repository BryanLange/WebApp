import Phaser from 'phaser'

export default class Chunk {

    constructor(scene, x, y) {
        this.scene = scene;
		this.x = x;
		this.y = y;

		this.tiles = this.scene.add.group();
		this.isLoaded = false;
    }

    unload() {
	    if (this.isLoaded) {
	        this.tiles.clear(true, true);
	        this.isLoaded = false;
	    }
	}

	load() {
	    if (!this.isLoaded) {
	       	for(var x = 0; x < this.scene.chunkSize; x++) {
			    for(var y = 0; y < this.scene.chunkSize; y++) {
			        var tileX = (this.x * (this.scene.chunkSize * this.scene.tileSize)) + (x * this.scene.tileSize);
					var tileY = (this.y * (this.scene.chunkSize * this.scene.tileSize)) + (y * this.scene.tileSize);

					var value = Math.random() * (99 - 0) + 0;

					var key = "";	// image key
					var animationKey = ""; // optional animation key


					if (value < 1) {
					    key = "sprWater";
					    animationKey = "sprWater"; 
					}
					else if (value >= 1 && perlinValue < 40) {
					    key = "sprSand";
					}
					else if (value >= 40) {
					    key = "sprGrass";
					}

					var tile = new Tile(this.scene, tileX, tileY, key);
					if (animationKey !== "") {
					    tile.play(animationKey);
					}
					this.tiles.add(tile);
			    }
			} 
		} // if not loaded
		this.isLoaded = true;
	} // end load()
} // end Entities class


class Tile extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key) {
        super(scene, x, y, key);
        this.scene = scene;
        this.scene.add.existing(this);
        this.setOrigin(0);
    }
}