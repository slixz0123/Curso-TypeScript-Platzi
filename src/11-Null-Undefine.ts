(()=>{
let myNumber : number ;
let myString: string ;

let MyNull : null = null ;
let MyUndefined : undefined = undefined ;

// hacer que una variable no necesita inicializarse con un numero sino con null

 let  myNumber2 : number | null = null; //framewok en angular al momento de evaluar componentes
  myNumber =5;



  function hiV2 (name:string|null){
    let hello = 'hola';
    hello += name?.toLowerCase || 'Nobady' // por que me coloca el ? = SIGNIFICA QUE SI EL VALOR DE NAME NO EXISTE DEVUELVE OTRO VALOR OSEA NULLL (rEPRESENTA UN NULL)


  }
})();
