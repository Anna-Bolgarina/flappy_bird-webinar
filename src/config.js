class Config {
  gravity = 10;

  canvas = {
    id: "game",
    width: 480,
    height: 320,
  };

  sprite = {
    width: 606,
    height: 428,
    src: "sprite.png",
  };
 

  bird = {
    x: 50,
    y: 110,
    width: 34,
    height: 26,

    flapSpeed: 10,

    frames: [
      {
        x: 276,
        y: 112,
        w: 34,
        h: 26,
      },
      {
        x: 276,
        y: 139,
        w: 34,
        h: 26,
      },
      {
        x: 276,
        y: 164,
        w: 34,
        h: 26,
      },
      {
        x: 276,
        y: 139,
        w: 34,
        h: 26,
      },
    ],
  };
}
