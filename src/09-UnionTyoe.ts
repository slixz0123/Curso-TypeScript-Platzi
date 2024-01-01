(()=>{
//union type  siginifica hacer que un a variable pueda tener

let myUserId : string | number ; // esto quiere decir que una variable puede recivir un dato de string o de numero
myUserId = 1221;
myUserId = "sdgsgf"

// funcion que puede recibir un parametro numerico o de tipo string
function greeiting(MyText:string | number){
 if (typeof MyText ==='string'){
  MyText.toLowerCase(); // tyscript ya determina de que debe ser dtring y solo activa los metodos del tipo string
 }else{

 }
}

greeiting("hola");
greeiting(3235);


})();
