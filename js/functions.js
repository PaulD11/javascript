function saludo(){
    alert("Hola mundo esto es JavaScript")
}

function suma(){
    var A;
    var B;
    var SUMA;

    alert("Este sistema realiza una suma con dos valores ingresados por el usuario");

    A = parseInt(prompt("Por favor ingrese el primer valor: "));
    B = parseInt(prompt("Por favor ingrese el segundo valor: "));

    SUMA = A + B;

    alert("El resultado de la suma es: " + SUMA)
}

function SumaRestaMultiplicacionDivision(){
    var A;
    var B;
    var SUMA;
    var RESTA;
    var MULTIPLICACION;
    var DIVISION;

    alert("Este sistema realiza las cuatro operaciones basicas con dos valores ingresados por el usuario");

    A = parseInt(prompt("Por favor ingrese el primer valor: "));
    B = parseInt(prompt("Por favor ingrese el segundo valor: "));

    SUMA = A + B;
    RESTA = A - B;
    MULTIPLICACION = A * B
    DIVISION = A / B

    alert("El resultado de la suma es: " + SUMA + "\nEl resultado de la resta es: " + RESTA + 
    "\nEl resultado de la multiplicacion es: " + MULTIPLICACION + "\nEl resultado de la division es: " + DIVISION)
    
}

function MayordeDosNumeros(){
    var A;
    var B;

    alert("Este sistema muestra el mayor de dos numeros ingresados por el usuario");
    A = parseInt(prompt("Por favor ingrese el primer numero: "));
    B = parseInt(prompt("Por favor ingrese el segundo numero: "));

    if( A > B ){
    alert("El mayor de los dos numeros es: " + A)
    } else alert("El mayor de los dos numeros es: " + B)

}

function MenordeTresNumeros(){
    var A;
    var B;
    var C;

    alert("Este sistema muestra el menor de tres numeros ingresados por el usuario");
    A = parseInt(prompt("Por favor ingrese el primer numero: "));
    B = parseInt(prompt("Por favor ingrese el segundo numero: "));
    C = parseInt(prompt("Por favor ingrese el tercer numero: "));

    if( A < B ){
    alert("El menor de los tres numeros es: " + A)
    } else if ( B < A ) {
    alert("El menor de los tres numeros es: " + B)
    } else alert("El menor de los tres numeros es: " + C)
    
}

function NumeroParoImpar(){
    var A;

    alert("Este sistema muestra si un numero es Par o Impar");
    A = parseInt(prompt("Por favor escribe un numero: "));

    if( A % 2 == 0){
    alert( A + " Es Par") 
    } else if ( A % 2 != 0) {
    alert( A + " Es Impar")
    }
}

function CuadradodeunNumero(){
    var A;
    var C;

    alert("Este sistema muestra el cuadrado de un numero");
    A = parseInt(prompt("Por favor escribe un numero: "));

    C = A * A
    alert("El cuadrado del numero ingresado es: " + C)

}

function AreaTriangulo(){
    var A;
    var B;
    var H;

    alert("Este sistema muestra el area de un triangulo");
    B = parseInt(prompt("Por favor ingresa el valor de la Base del Triangulo: "));
    H = parseInt(prompt("Por favor ingresa el valor de la Altura del Triangulo; "));

    A = (B*H)/2
    alert("El area del triangulo es: " + A)

}

function ConvertirPulgadas(){
    var P;
    var Cm;
    var M;
    var Km;

    alert("Este sistema muestra los valores en Centimetros, Metros y Kilometros dados en pulgadas");
    P = parseInt(prompt("Por favor ingresa un valor dado en pulgadas: "));

    Cm = P * 2.54
	M = Cm / 100
	Km = M / 1000

    alert("El valor en Centimetros es: " + Cm + "\nEl valor en Metros es: "  + M +
     "\nEl valor en Kilometros es: " + Km );

}

function AñoNacimiento(){
    var E;
    var A;
    var B;
    var C;

    alert("Este sistema muestra el año de nacimiento de una persona segun su edad");
    E = parseInt(prompt("Por favor ingresa tu edad: "));
    
    B = 2022
    A = B - E
    alert("Usted nacio en el año: " + A );
}

function CapitalBancario(){
    var C;
    var A;
    var G;
    var M;
    var T;
    var P;

    alert("Este sistema muestra el Capital bancario ganado segun la cantidad de años");
    C = parseInt(prompt("Por favor ingrese el monto a invertir: "));
    A = parseInt(prompt("Por favor ingrese la cantidadd de años para saber sus ganancias: "));

    M = A * 12
    P = M + 2.3
    G = (C * P)/100
    T = G + C

    alert("Las ganancias generadas en: " + A + "\naños, por un porcentaje mensual de 2.3% son de: "  + G +
     "\nEl valor total para ese moementp seria de: " + T );

}

function PromedioMateria(){
    var C1;
    var C2;
    var C3;
    var C4;
    var C5;
    var Promedio;

    alert("Este sistema muestra el promedio de una materia, para determinar si aprobo o no");
    C1 = parseInt(prompt("Por favor ingresa tu primera calificacion: "));
    C2 = parseInt(prompt("Por favor ingresa tu segunsa calificacion: "));
    C3 = parseInt(prompt("Por favor ingresa tu tercera calificacion: "));
    C4 = parseInt(prompt("Por favor ingresa tu cuarta calificacion: "));
    C5 = parseInt(prompt("Por favor ingresa tu quinta calificacion: "));

    Promedio = (C1 + C2 + C3 + C4 + C5)/5 
    if(Promedio <= 29 ){
    alert("Su promedio es: " + Promedio + " No aprobaste la materia:(")
    } else{
    alert("Su promedio es: " + Promedio + " Aprobaste la materia:)")
    }

}

function DescuentoManzanas(){
    var K;
    var T;
    var TD; 
    var TN; 

    alert("Este sistema permite saber cuanto debe pagra un cliente por un compra con descuento");
    K = parseInt(prompt("Por favor ingresa el Kilo de manzanas que compro: "));

    if( K <= 2 ){
    T = K * 4500
    alert("El descuento de su compra es del 0% y el total a pagar seria: " + T )
    } else if( K >= 3 & K <= 5 ){
    TN = K * 4500
    TD = TN * 0.10
    T = TN - TD
    alert("El descuento de su compra es del 10% $" + TD + "\n y el valor total a pagar seria de: $" + T)
    } else if( K >= 6 & K < 10 ){
    TN = K * 4500
    TD = TN * 0.15
    T = TN - TD
    alert("El descuesto de su compra es del 15% $" + TD + "\n y el valor total a pagar seria de: $" + T)
    } else if( K >= 10 ){
    TN = K * 4500
    TD = TN * 0.20
    T = TN - TD
    alert("El descuesto de su compra es del 20% $" + TD + "\n y el valor total a pagar seria de: $" + T)
}
}
