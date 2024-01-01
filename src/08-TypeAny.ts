(()=>{
  let myDinamyVar:any; // significa que esta variable es dinamica en la cual puede ser un numero y despues un string, etc
  myDinamyVar = 5;
  myDinamyVar="Hola";
  myDinamyVar = null;

  // en que ocaciones se usa el any {se aconseja que no se utilice el any}


   myDinamyVar = "HOLA 2 "
  // FORZAR ANY A STRING
  const rta = (myDinamyVar as string).toLowerCase; // estoy haciendo un cast para
  myDinamyVar = 2354 ;
  const rta2 = (<number>myDinamyVar).toFixed();

  console.log(rta2);
})

