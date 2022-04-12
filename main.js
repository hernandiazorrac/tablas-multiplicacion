let num = prompt("Ingrese un número para saber su tabla de multiplicación.")

if(!isNaN(num)){
    for(let i=0; i<=10; i+=1){
        document.write((num) + " x " + (i) + " = " + num*i + "<br>");
        console.log((num) + " x " + (i) + " = " + num*i);
    }
}else{
    document.write('<h1>¡Ingrese un número!</h1>');
    console.error('¡Ingrese un número!');
}


