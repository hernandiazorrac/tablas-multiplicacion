let num = prompt("Ingrese un número para saber su tabla de multiplicación.")

if(!isNaN(num)){ //si la variable num es un número (no es un NaN)
    for(let i=0; i<=10; i+=1){
        if(num==null || num=="" || num==" "){ //si el usuario oprime esc o no escribe nada, rompe el ciclo
            document.write('<h1>¡Ingrese un número!</h1>');
            console.error('¡Ingrese un número!');
            break;
        }

        document.write((num) + " x " + (i) + " = " + num*i + "<br>"); //muestra las multiplicaciones en el documento
        console.log((num) + " x " + (i) + " = " + num*i); //muestra las multiplicaciones en la consola   
    }
}else{
    document.write('<h1>¡Ingrese un número!</h1>');
    console.error('¡Ingrese un número!');
}

function refreshPage() { //botón para refrescar la página
    location.reload();
}
