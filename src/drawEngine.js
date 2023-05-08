class DrawEngine {
  drawImage({ sprite, image, x, y, width, height }) {}
  clear() {}
}

class CanvasDrawEngine extends DrawEngine {
  constructor({ canvas }) {
    super();
    this._canvas = canvas;
    this._context = canvas.getContext("2d");
  }

  drawImage({ sprite, image, x, y, width, height }) {
    super.drawImage({ sprite, image, x, y, width, height });
    // this._context.drawImage(
    //   sprite,
    //   image.x,
    //   image.y,
    //   image.w,
    //   image.h,
    //   x,
    //   y,
    //   width,
    //   height
    // );
    if (!sprite.complete) {
      sprite.onload = () => {
        this._context.drawImage(
          sprite,
          image.x,
          image.y,
          image.w,
          image.h,
          x,
          y,
          width,
          height
        );
      };
    } else {
      this._context.drawImage(
        sprite,
        image.x,
        image.y,
        image.w,
        image.h,
        x,
        y,
        width,
        height
      );
    }
  }

  //очистить поле
  clear() {
    super.clear();
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
}
