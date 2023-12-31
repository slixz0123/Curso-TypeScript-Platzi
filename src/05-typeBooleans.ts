// variables booleanas en ts

(()=>{
  let isEnable =  true; // forma inferida
  isEnable = false;


   let IsNew : boolean =  true; //forma con tipado

   console.log('is new', IsNew)



   const random = Math.random();
   console.log('random',random);

   IsNew= random >= 0.5 ? true: false; // flujos de booleano retorna verdadero o falso
   console.log('isNew',IsNew);
})
