
import { Canvas } from './canvas';
import {Options} from './types'

export class VarPdf {
  options: Options[];
  constructor(options){
    this.options = options
  }
  createTemplates():(HTMLCanvasElement)[]{
    const {options}=this
    const canvasPages:(HTMLCanvasElement)[]=[]
    for (let i = 0; i < options.length; i++) {
      const {pageWidth:width,pageHeight:height} = options[i];
      canvasPages.push(new Canvas({width,height}).getCanvas() as HTMLCanvasElement )
    }
    return canvasPages.filter(Boolean)
  }
}