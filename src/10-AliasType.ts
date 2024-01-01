(()=>{
 type UserId = string | number| boolean;// type palabra reservada de typscript
  let myUserId: UserId; // se agregan un tipado extra

// multiple asignacion
type Sizes = 'S' | 'M' | 'L' | 'XL' ; // creacion de variable de distintos tipos  (Tipado)
let ShirtZise: 'S' | 'M' | 'L' | 'XL' ;




// funcion que puede recibir un parametro numerico o de tipo string
function greeiting(myUserId:UserId, size:Sizes){
  if (typeof myUserId ==='string'){
    myUserId.toLowerCase(); // tyscript ya determina de que debe ser dtring y solo activa los metodos del tipo string
  }
 }






})();
