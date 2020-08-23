// Ejercicios Primer Trimestre Master
// 1.	Crear una función que dado un año determine si es un año bisiesto o no. Ej---> isLeap(2016) Resultado ----> true|
console.log("First quarter Exercises")
console.log(" ")
console.log("Exercise 1.- Leap Year")
function isLeap(year){
    return (year%400===0 || (year%4===0 && year%100!==0)) ? true : false
}
console.log('2016 is Leap ? ',isLeap(2016))
//Arrow
const leap = (year) =>(year%400===0 || (year%4===0 && year%100!==0)) ? true : false
const leapArrow = leap(2019)
console.log('2019 is Leap ? ',leapArrow)

// 2.	Crear una función que genere un numero aleatorio entre 1 y 10, esta función recibe un numero como parametro si el numero es igual al numero generado aleatoriamente regresara "Buen Trabajo" de lo contrario regresara "Intenta de nuevo". Ej ---> randomGuess(7) resultado ---> "Buen trabajo" o "Intenta de Nuevo"
console.log(" ")
console.log("Exercise 2.- Random Guess")
// let c = 0
// while(c!==-1){
//     c++
//     let randNum = Math.floor(Math.random()*10)
//     console.log(randNum)
//     if(randNum === 5){
//         console.log(1/c*100," %")
//         c=-1
//     } 
// }
const randomGuess = (number) =>(number === Math.floor(Math.random()*10)) ? console.log("Good Job"):console.log("Try Again")
randomGuess(5)

// 3.	Escribe una función que reciba un string como parametro y regrese el string con "Py" al principio, si el string ya tiene "Py" regresar el string original Ej ---> addPy("hola") resultado ---> "Pyhola"

console.log(" ")
console.log("Exercise 3.- Add Py")
const addPy = (str) => {
    if ( str[0]+str[1] != 'Py'){
        str = 'Py' + str
    }
    return str
}
const str = "thon"
console.log(str,"-",addPy(str))

// 4.	Escriba una funcion JavaScript para eliminar un carácter en la posición especificada de una cadena dada y devolver la nueva cadena Ej ---> removeChar("Hola",2) resultado --> "Hoa"
console.log(" ")
console.log("Exercise 4.- removeChar")
const removeChar = (str,ind) => {
    let finalStr = ''
    for (let index = 0; index < str.length; index++) {
        if(index !== ind){finalStr+=str[index]}
    }
    return finalStr
}
console.log(removeChar('Hola',2))

// 5.	Escriba un programa JavaScript para crear una nueva cadena a partir de una cadena dada cambiando la posición del primer y último carácter. La longitud de la cadena debe ser mayor o igual a 1. Ej ----> firstLast("Hola") resultado ---> "aolH"
console.log(" ")
console.log("Exercise 5.- firstLast")
const firstLast = (str) => {
    let finalStr = str[str.length-1]
    const i = str[0]
    for (let index = 1; index < str.length-1; index++) {
        finalStr+=str[index]
    }
    return finalStr+=i
}
console.log(firstLast('Hola'))

// 6.	Escriba un programa JavaScript para cambiar el uso de mayúsculas en todas las letras de una cadena determinada. Ej ---> changeMayus("ComoEstas") resultado ---> "cOMOeSTAS"
console.log(" ")
console.log("Exercise 6.- changeMayus")
const isMinus = (char) => (char===char.toLowerCase()) ? true:false
const changeMayus = (str) => {
    let changeMayusString = ''
    for(let char of str){
        (isMinus(char)) ? changeMayusString+=char.toUpperCase() : changeMayusString+=char.toLowerCase()
    }
    return changeMayusString
}

const str6 = "ComoEstas"
console.log(str6,"-",changeMayus(str6))

// 7.	Escriba una función de JavaScript para redondear un número a una cantidad específica de dígitos. Ej ---> roundNumber(2.3453467335,2) resultado -> 2.34
console.log(" ")
console.log("Exercise 7.- roundNumber")
const roundNumber = (num,dig) => {
    let numString = num.toString()
    let nStrFix = ''
    for (let i = 0; i < numString.length; i++) {
        nStrFix+=numString[i]
        if (numString[i]==='.'){
            i++
            for (let j = 0; j < dig; j++) {
                nStrFix+=numString[i]
                i++
            }
            return parseFloat(nStrFix)
        }    
    }
    return parseFloat(nStrFix)
}

const num = 2.3453467335
console.log(num," - ",roundNumber(num,2))

// 8.	Escriba una función de de JavaScript para crear una nueva cadena a partir de una cadena dada con el primer carácter de la cadena dada agregado al principio y al final. Ej --> addFisrt("Hola") resultado ---> "HHolaH"
console.log(" ")
console.log("Exercise 8.- addFirst")
const addFirst = (str) => (str[0]+str+str[0])

console.log("Hola",addFirst("Hola"))

// 9.	Escriba una función deJavaScript para verificar si dos valores enteros dados están en el rango 50..99 (inclusive). Devuelve verdadero si alguno de ellos está en dicho rango. Ej --> inRange(55,47) resultado ---> true
console.log(" ")
console.log("Exercise 9.- inRange")
const inRange = (num1,num2) => ((num1>=50&&num1<=99 || num2>=50&&num2<=99) ? true:false)

console.log('(55,47)',inRange(55,47))

// 10.	Escriba una función de JavaScript para contar el número de vocales en una cadena dada.
console.log(" ")
console.log("Exercise 10.- vowelCount")
const vowelCount = (str) => {
    let count=0
    for(let char of str){
        (char==='a'||char==='e'||char==='i'||char==='o'||char==='u'||char==='A'||char==='E'||char==='I'||char==='O'||char==='U') ? count++:count
    }
    return count
}

console.log('abecedario',vowelCount("abecedario"))

// 11.	Escriba una función de Javascript que convierta un numero a formato moneda Ej ---> convertExchange(2000) resultado --> "$2,000.00"
console.log(" ")
console.log("Exercise 11.- convertExchange")
const convertExchange = (num) => {
    const numStringDec = num.toString().split('.')
    const numString = numStringDec[0]
    let exchangeL=numString.slice(0,numString.length%3)||''
    let exchangeR=numString.slice(numString.length%3)||''
    if(exchangeR>=3&&exchangeL){exchangeL+=','}
    strTmp=''
    let c=0
    for(let ch of exchangeR){
        strTmp+=ch
        c++
        if(c%3===0 && (exchangeR.length-c)>0){strTmp+=','}
    }
    exchangeR=strTmp
    return '$'+exchangeL+exchangeR+'.'+(numStringDec[1]||'00')
}
const numExchange = [1.15,12,123.15,1234,12345,123456,1234567.0,12345678,123456789,1234567890.10]
for(let n of numExchange){
    console.log(n,"=",convertExchange(n))
}

// 12.	Hay dos matrices con valores individuales, escriba un programa JavaScript para calcular la suma de cada valor de índice individual de las matrices dadas Ej. sumIndex([1,0,2,3,4],[3,5,6,7,8,13]) salida --> [4, 5, 8, 10, 12, 13]
console.log(" ")
console.log("Exercise 12.- sumVector")
//Suma de  matrices
// const sumMatrix = (matrixA,matrixB) => {
//     let matrixSum = []    
//     for (let i = 0; i < matrixA.length; i++) {
//         let rowSum = []
//         for (let j = 0; j < matrixA[i].length; j++) {
//             rowSum[j]=matrixA[i][j]+matrixB[i][j]
//         }
//         matrixSum+=rowSum       
//     }
//     return matrixSum
// }
const sumVector = (vectorA,vectorB) =>{
    const vectorLength = (vectorA.length>vectorB.length) ? vectorA.length:vectorB.length
    let vectorSum=[]
    for (let i = 0; i < vectorLength; i++) {
        vectorSum[i]=(vectorA[i]||0)+(vectorB[i]||0)
    }
    return vectorSum
}

console.log(sumVector([1,0,2,3,4],[3,5,6,7,8,13]))

// 13.	Escriba una función de JavaScript para encontrar la diferencia de dos matrices. 
//Ej difference([1, 2, 3], [100, 2, 1, 10]) 
//Resultado --> ["3", "10", "100"]
console.log(" ")
console.log("Exercise 13.- difVector")
const repeatCheck = (vectorA,vectorB) =>{
    let vectorDif=[]
    for (let i = 0; i < vectorA.length; i++) {
        let repeat=0
        for(let element of vectorB){
            if(vectorA[i]===element){repeat++}
        }
        if(repeat===0){vectorDif.push(vectorA[i])}
    }
    return vectorDif
}
const difVector = (vectorA,vectorB) =>{
    let vectorDif = []
    for (let element of repeatCheck(vectorA,vectorB)){vectorDif.push(element)}
    for (let element of repeatCheck(vectorB,vectorA)){vectorDif.push(element)}
    return vectorDif.sort((a, b) => a - b)
}

console.log(difVector([1, 2, 3], [100, 2, 1, 10]))

// 14.	Escriba una función de JavaScript para eliminar. Valores 'nulo', '0', '""', 'falso', 'indefinido' y 'NaN' de una matriz. Ej removeFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]) resultado ----> [15, -22, 47]
console.log(" ")
console.log("Exercise 14.- removeFalsy")
const removeFalsy = (arr)=> {
    let arrFiltered = []
    for(let element of arr){
        if(element){arrFiltered.push(element)}
    }
    return arrFiltered
}
const arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]
console.log(removeFalsy(arr))

// 15.	Escriba una función de JavaScript para ordenar la siguiente matriz de objetos por valor de título. let library = [ { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} ];
console.log(" ")
console.log("Exercise 15.- sortBooks")
const sortBookByTitle = (obj) => {
    obj.sort((a,b) =>{
        var x = a.title.toLowerCase();
        var y = b.title.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0
    })
    return obj
}

let library = [ 
    { 
        author: 'Bill Gates',
        title: 'The Road Ahead', 
        libraryID: 1254
    }, 
    { 
        author: 'Steve Jobs',
        title: 'Walter Isaacson', 
        libraryID: 4264
    }, 
    { 
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245
    } 
]
console.log(library)
console.log('By title - ',sortBookByTitle(library))

// 16.	Escriba un programa JavaScript para encontrar un par de elementos (índices de los dos números) de una matriz dada cuya suma sea igual a un número objetivo específico. Ej findPairs([10,20,10,40,50,60,70],50) resultado --> 2,3
console.log(" ")
console.log("Exercise 16.- findPairs")
const findPairs = (arr,sum) => {
    let pairs=[]
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if(arr[i]+arr[j]===sum){pairs.push([i,j])}
        }
    }
    return pairs
}
let arr16=[10,20,10,40,50,60,70]
console.log(arr16,' - ',findPairs(arr16,50))

// 17.	Escriba una función de JavaScript que devuelva una cadena pasada con letras en orden alfabético. Ej orderWord("webmaster") resultado ---> "abeemrstw"
console.log(" ")
console.log("Exercise 17.- orderWord")
const orderWord = (word) => {
    word = word.split('')
    word.sort()
    return word.join('')
}
let word = 'webmaster'
console.log(word,' - ',orderWord(word))

// 18.	Escriba una función de JavaScript que acepte una cadena como parámetro y busque la palabra más larga dentro de la cadena. Ej. largeWord("Web Development Tutorial") resultado ---> 'Development'
console.log(" ")
console.log("Exercise 18.- largestWord")
const largestWord = (str) => {
    str = str.split(' ')
    let largest = ''
    for(let word of str){
        if(word.length>largest.length){largest=word}
    }
    return largest
} 

const string = "Web Development Tutorial"
console.log(string,' - ',largestWord(string));

// 19.	Escribe una función de JavaScript para convertir una cantidad en monedas. Ej amountTocoins(46, [10, 5, 2, 1]) Resultado --> 10,10,10,10,5,1
console.log(" ")
console.log("Exercise 19.- amountToBills")
const sumBills = (bills) => {
    let sum = 0
    for(let bill of bills){sum+=bill}
    return sum
}
const amountToBills = (amount,billTypes) => {
    let bills = []
    for(let bill of billTypes){
        while((sumBills(bills)+bill)<=amount){bills.push(bill)}
    }
    return bills
}

console.log(amountToBills(46,[10,5,2,1]))

// 20.	Escriba una función de JavaScript para generar una matriz entre dos enteros de 1 paso de longitud. Ej. rangeBetwee(4, 7) resultado --> [4, 5, 6, 7] rangeBetwee(-4, 7) resultado --> [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
console.log(" ")
console.log("Exercise 20.- rangeBetween")
const rangeBetween = (a,b) => {
    const range = []
    for (let i=a; i<=b; i++) {
        range.push(i)
    }
    return range
}
const range = [-4,7]
console.log(range,' - ',rangeBetween(range[0],range[1]))
