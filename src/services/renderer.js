import * as Pixi from 'pixi.js';

Pixi.utils.skipHello();

export default class Renderer {
  constructor() {
    Object.assign(this, {
      controller: null
    });
  }

  initialize(renderTargetElement) {
    this.controller = new Pixi.Application({
      view: renderTargetElement,
      transparent: true,
      antialias: true,
      autoStart: false
    });
  }

  reset() {
    this.stop();

    this.controller.destroy();

    this.controller = null;
  }

  start() {
    this.controller.start();
  }

  stop() {
    this.controller.stop();
  }
}
