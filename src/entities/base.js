class Entity {
  constructor({ x, y, width, height, frames, sprite, drawEngine, game }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.falling = false;

    this._frames = frames;
    this._frameIdx = 0;
    this._sprite = sprite;
    this._drawEngine = drawEngine;
    this._game = game;
  }

  // рисуем сущность
  draw() {
    this._drawEngine.drawImage({
      sprite: this._sprite,
      image: this._frames[this._frameIdx],
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    });
  }

  //анимация, обновление фрейма
  update(delta) {
    this._frameIdx = (this._frameIdx + Math.ceil(delta)) % 4;
    //console.log(this._frames);
  }
}
