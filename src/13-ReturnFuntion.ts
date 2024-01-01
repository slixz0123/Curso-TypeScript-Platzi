(() => {

  // funcion que retorna un valor number  => : number
const calcTotal =  (price:number[]) : number => { // se usa el :number para decir q va a retornar un valor numerico
  let total = 0;
  price.forEach((item) => {
    total += item
  });
  return total;
}
// funciones que retornan tipados
// funciones que no retornan nada es de tipo  void
 const printotal = (price:number[]) => {
 const rta = calcTotal(price);

 }
calcTotal([2,45,6,346,]);

})()
