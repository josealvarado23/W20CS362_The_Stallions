import { Entity } from "./Entity";

export class Flag extends Entity {
    constructor(scene:Phaser.Scene) {
        super(scene);
        this.sprite.name = 'flag';
        this.sprite.on('ninjahit', this.CheckHit, this);
        this.sprite.setSize(10,20);
        this.PlayAnimation('sway');
        this.sprite.body.offset.y += 6;
    }

    CheckHit() {
        this.scene.events.emit('touchflag');
    }
}