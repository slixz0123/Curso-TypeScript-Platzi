// este es el modelado de los datos
// creacion de tipos  y exportacion para que se pueda unsar en demas clases
// se usa la palabra export para que reconzcan desde otras clases
export type Sizes = 'S'|'M'|'L'
export type Product = {
  title : string,
  creatAt: Date,
  stock:number,
  Size? : Sizes
}
