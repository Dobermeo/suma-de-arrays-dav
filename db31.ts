function sumar(...valores:number[]) {
    let suma=0;
    for(let x=0;x<valores.length;x++)
      suma+=valores[x];
    return suma;
  }
  
  console.log(sumar(10, 2, 44, 3));
  console.log(sumar(1, 2));
  console.log(sumar());

  //pasar a funcion flecha
  let sumand = (valores:number[]) => {
    let sum=0;
    for(let x=0;x<valores.length;x++)
      sum+=valores[x];
    return sum;
  }

  //pasar a funcion anonima 
  document.getElementById("ejemplo")!.addEventListener("click", function(){
    console.log("ejemplo clicked");
  })