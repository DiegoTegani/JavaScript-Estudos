function calcularTriangulo(valor1, valor2, valor3){
    if(valor1 == valor2 & valor1 == valor3){
        console.log("Equilátero")
    } else if (valor1 == valor2 & valor1 != valor3 | valor2 == valor3 & valor1 != valor2){
        console.log("Isósceles")
    }else{
        console.log("Escaleno")
    }

}

console.log(calcularTriangulo(1,1,1))
console.log(calcularTriangulo(1,1,2))
console.log(calcularTriangulo(1,2,3))