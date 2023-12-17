
export  type Params = {
  options:Options[]
}
export  type Options = {
  pageWidth:number;
  pageHeight:number;
  element: PDF_Element[]
}
export  interface PDF_Element {
  type: string;
  style?:PDF_Element_Style;
  props?: PDF_Element_Props
}

interface PDF_Element_Style {
  width?: number;
  height?:number;
  
}

interface PDF_Element_Props{

}