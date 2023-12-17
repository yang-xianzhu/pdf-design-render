
export class Canvas {
  width: number
  height: number
  _canvas: HTMLCanvasElement|null
  scale: number
  _ctx: CanvasRenderingContext2D | null
  constructor({
    width, height, 
  }:{
    width: number
    height: number
  }) {
    this.width = width
    this.height = height
    this._canvas = null

    if (!this._canvas) {
      this._canvas = document.createElement('canvas')
    }
    this.scale = window.devicePixelRatio

    this._canvas.width = this.width * this.scale
    this._canvas.height = this.height * this.scale
    this._canvas.style.width = this.width + 'mm'
    this._canvas.style.height = this.height + 'mm'
    this._canvas!.getContext('2d')!.scale(this.scale, this.scale)
    this._ctx = this._canvas!.getContext('2d')
  }

  getCanvas(){
    return this._canvas
  }
}