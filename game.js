// Create Game Scene
let gameScene = new Phaser.Scene('Game');

let config = {
    type: Phaser.AUTO,
    width: 320,
    height: 320, 
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
}

// Preload Assets
function preload() {
    this.load.image('Test_Map1', 'assets/Test_Map01.png');
    this.load.spritesheet('Test_Character01', 'assets/Test_Character01.png', {frameWidth: 16, frameHeight: 16})
}

function create() {
    let bgSprite = this.add.sprite(0, 0, 'Test_Map1');
    bgSprite.setPosition(330/2, 312/2);
    console.log(bgSprite)

    this.player = this.physics.add.image(64, 64, 'Test_Character01', 24);
    this.player.setDepth(2);
    console.log(this.player);

    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    this.player.setVelocityX(0);
    
    if (this.cursors.left.isDown) {
        this.player.setVelocityX(-100);
    } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(100);
    } else if (this.cursors.down.isDown) {
        this.player.setVelocityY(-100);
    } else if (this.cursors.up.isDown) {
        this.player.setVelocityY(100);
    } else {
    }
}

let game = new Phaser.Game(config);