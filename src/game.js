class Game {
  constructor() {
    this._config = new Config();

    this._canvas = document.getElementById(this._config.canvas.id);
    this._canvas.width = this._config.canvas.width;
    this._canvas.height = this._config.canvas.height;

    this.height = this._config.canvas.height;
    this.width = this._config.canvas.width;

    (this._drawEngine = new CanvasDrawEngine({ canvas: this._canvas })), //движок который рисует на канвасе
     (this._physicsEngine = new PhysicsEngine({
       gravity: this._config.gravity,
     })),
      (this._resourceLoader = new ResourceLoader()),
      (this._inputHandler = new MouseInputHandler({
        left: ({ x, y }) => {
          this._bird.flap();
        },
      }));
  }

  //асинхронный метод подготовки игры до запуска. загрузка исходных картинок
  async prepare() {
    this._sprite = this._resourceLoader.load({
      type: RESOURCE_TYPE.IMAGE,
      src: this._config.sprite.src,
      width: this._config.sprite.width,
      height: this._config.sprite.height,
    });
  }

  //сброс всех данных
  reset() {
    this._score = 0;
    this._bird = new Bird({
      x: this._config.bird.x,
      y: this._config.bird.y,
      width: this._config.bird.width,
      height: this._config.bird.height,
      frames: this._config.bird.frames,
      sprite: this._sprite,
      flapSpeed: this._config.bird.flapSpeed,
      physicsEngine: this._physicsEngine,
      drawEngine: this._drawEngine,
      game: this,
    });
  }
  //обновление каждый такт сущности
  update(delta) {
    this._bird.update(delta);
  }
  //после обновления нарисовать
  draw() {
    this._bird.draw();
  }

  _loop() {
    const now = Date.now();
    const delta = now - this._lastUpdate;

    this.update(delta / 1000.0);

    if (this._playing) {
      this._drawEngine.clear();
      this.draw();

      this._lastUpdate = now;

      requestAnimationFrame(this._loop.bind(this));
    }
  }

  //метод запуска игры
  start() {
    this._playing = true;
    this._inputHandler.subscribe();
    this._lastUpdate = Date.now();
    this.reset();
    this._loop();
  }

  gameOver() {
    this._playing = false;
    alert(`Game over: ${this._score}`);
  }
}
