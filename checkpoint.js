// ----- IMPORTANTE -----

// IMPORTANTE!: Para este checkpoint se les brindarán las 
// implementaciones ya realizadas en las homeworks de 
// Queue, LinkedList y BinarySearchTree.
// Sobre dichas implementaciónes van a tener que agregar nuevos
// métodos o construir determinadas funciones explicados más abajo.
// Pero todos los métodos ya implementados en las homeowrks no es 
// necesario que los vuelvan a definir.

const {
    Queue,
    LinkedList,
    Node,
    BinarySearchTree
} = require('./DS.js');

// ----- Closures -----

// EJERCICIO 1
// Implementar la funcion 'exponencial' que recibe un parametro entero 'exp'
// y retorna una una funcion, nos referiremos a esta ultima como funcion hija,
// y a 'exponencial' como la funcion padre, la funcion hija debe de recibir 
// un parametro y retornar dicho parametro elevado al parametro 'exp' de 
// la funcion padre original 'exponencial'
// Ejemplo:
// > var sqrt = exponencial(2);
// > sqrt(2);
// < 4
// > sqrt(3);
// < 9
// > sqrt(4);
// < 16

function exponencial(exp) {

    return function (n) {
        return n ** exp
    }
}

// ----- Recursión -----

// EJERCICIO 2
// Crear la funcion 'direcciones':
// La funcion debe retornar un string de los movimientos Norte(N), Sur(S), Este(E), Oeste(O)
// que se deben realizar, para llegar al destino de un laberinto dado.
//
// Ejemplo: dado el siguiente laberinto:
// let laberintoExample = { // direccion = ""
//     N: 'pared',
//     S: { // direccion = "S"
//         N: 'pared',
//         S: 'pared',
//         E: { // direccion = "SE"
//             N: 'destino', // direccion = "SEN"
//             S: 'pared',
//             E: 'pared',
//             O: 'pared'
//         },
//         O: { // direccion = "SO"
//             N: 'pared',
//             S: 'pared',
//             E: 'pared',
//             O: 'pared'
//         }
//     },
//     E: 'pared',
//     O: 'pared'
// }
// El retorno de la funcion 'direcciones' debe ser 'SEN', ya que el destino se encuentra
// haciendo los movimientos SUR->ESTE->NORTE
// Aclaraciones: el segundo parametro que recibe la funcion ('direccion') puede ser pasado vacio (null)

let lab2 = {
    N: 'pared', S: 'pared', E: {
        N: 'pared', S: {
            N: 'pared', S: 'pared', E: 'pared', O: {
                N: {
                    N: 'pared', S: 'pared', E: 'pared', O: {
                        N: 'pared', S: {
                            N: 'pared', S: 'pared', E: 'destino', O: 'pared'
                        }, E: 'pared', O: 'pared'
                    }
                }, S: 'pared', E: 'pared', O: 'pared'
            }
        }, E: 'pared', O: 'pared'
    }, O: 'pared'
}
let lab3 = {
    N: 'pared', S: 'pared', E: {
        N: 'pared', S: {
            N: 'pared', S: 'pared', E: 'pared', O: {
                N: 'pared', S: {
                    N: 'pared', S: 'pared', E: {
                        N: 'pared', S: 'pared', E: 'destino', O: 'pared'
                    }, O: 'pared'
                }, E: 'pared', O: 'pared'
            }
        }, E: 'pared', O: 'pared'
    }, O: 'pared'
}

let lab1 = {
    N: 'pared',
    S: {
        N: 'pared', S: 'pared', E: 'pared', O: {
            N: 'pared', S: 'destino', E: 'pared', O: 'pared'
        }
    },
    E: 'pared',
    O: 'pared'
}
function direcciones(laberinto) {
    var strg = ''
    if (!laberinto) return ''
    for (clave in laberinto) {
        if (laberinto[clave] == "destino") return clave + strg
        if (typeof (laberinto[clave]) == "object")
            strg = clave + direcciones(laberinto[clave])
    }
    return strg
}

// it("Si no se le pasa un laberinto debe retornar ''", function () {
console.log(direcciones())//('');

//it("Si se le pasa un laberinto sin destino debe retornar ''", function () {
// console.log(direcciones({ N: 'pared', S: 'pared', E: 'pared', O: 'pared' }))//('');
//it("Debe encontrar el destino dentro del laberinto y retornar los movimientos", function () {

console.log(direcciones(lab1)) //('SOS');
// console.log(direcciones(lab2)) //('ESONOSE');
// console.log(direcciones(lab3)) //('ESOSEE');

// EJERCICIO 3
// Crea la funcion 'deepEqualArrays':
// Dado que las comparaciones en javascript aveces son un problema como con el siguiente ejemplo:
// [0,1,2] === [0,1,2] => false // puede probarlo en la consola
// con objetos o arrays identicos surge la necesidad de comparar en 'profundidad' arrays u objetos
// en este caso la funcion solo va a ser pensada para recibir arrays,
// pero estos pueden tener multiples niveles de anidacion, y la funcion deepEqualArrays debe
// comparar cada elemento, sin importar la profundidad en la que este
// Ejemplos: 
// deepEqualArrays([0,1,2], [0,1,2]) => true
// deepEqualArrays([0,1,2], [0,1,2,3]) => false
// deepEqualArrays([0,1,[[0,1,2],1,2]], [0,1,[[0,1,2],1,2]]) => true

function deepEqualArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] === arr2[i] && arr1.length === arr2.length) {

            return true
        }
        if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
            return deepEqualArrays(arr1[i], arr2[i])
        }
        return false
    }
    return false
}
// var arr1 = [0, 1, 1]
// var arr2 = [1, 0, 1]
// console.log(deepEqualArrays(arr1, arr2))


// function deepEqualArrays(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] === arr2[i] && arr1.length == arr2.length) {
//             return true
//         }
//         if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
//             return deepEqualArrays(arr1[i], arr2[i])
//         }
//     }
//     return false
// }
// ----- LinkedList -----

// Deben completar la siguiente implementacion 'OrderedLinkedList'(OLL)
// que es muy similar a las LinkedList vistas en clase solo que 
// los metodos son distintos y deben de estar pensados para conservar la lista
// ordenada de mayor a menor.
// ejemplos:
// head --> 5 --> 3 --> 2 --> null
// head --> 4 --> 3 --> 1 --> null
// head --> 9 --> 3 --> -1 --> null
// Las dos clases principales ya van a estar implementadas a continuacion:
function OrderedLinkedList() {
    this.head = null;
}
// notar que Node esta implementado en el archivo DS

// Y el metodo print que permite visualizar la lista:
OrderedLinkedList.prototype.print = function () {
    let print = 'head'
    let pointer = this.head
    while (pointer) {
        print += ' --> ' + pointer.value
        pointer = pointer.next;
    }
    print += ' --> null'
    return print
}
// EJERCICIO 4
// Crea el metodo 'add' que debe agregar nodos a la OLL de forma que la misma se conserve ordenada:
// Ejemplo:
// > LL.print()
// < 'head --> null'
// > LL.add(1)
// > LL.print()
// < 'head --> 1 --> null'
//    2       c
// > LL.add(5)
// > LL.print()
// < 'head --> 5 --> 1 --> null'
// > LL.add(4)
// > LL.print()
// < 'head --> 5 --> 3 --> 1 --> null'
//               4
OrderedLinkedList.prototype.add = function (val) {
    var nodo = new Node(val);
    var puntero = this.head;
    if (puntero === null) {
        this.head = nodo;
    } else if (puntero.value < val) {
        nodo.next = puntero;
        this.head = nodo;
    }
    else {
        while (puntero.value > val && puntero.next !== null) {
            var anterior = puntero;
            puntero = puntero.next;
        }
        if (puntero.value > val) {
            nodo.next = puntero.next;
            puntero.next = nodo;
        }
        if (puntero.value < val) {
            nodo.next = anterior.next;
            anterior.next = nodo;
        }
    }
    return nodo;
}
// EJERCICIO 5
// Crea el metodo 'removeHigher' que deve devolver el valor mas alto de la linked list 
// removiendo su nodo corresponidente:
// Ejemplo:
// > LL.print()
// < 'head --> 5 --> 4 --> 1 --> null'
// > LL.removeHigher()
// < 5
// > LL.removeHigher()
// < 4
// > LL.removeHigher()
// < 1
// > LL.removeHigher()
// < null
OrderedLinkedList.prototype.removeHigher = function () {
    var current = this.head
    if (this.head === null) return null
    if (current.next && current.value > current.next.value) {
        var aux = current.value
        this.head = current.next
    } else {
        aux = 1
        this.head = null
    }
    return aux
}


// let ll = new OrderedLinkedList()
// ll.head = new Node(5)
// ll.head.next = new Node(4)
// ll.head.next.next = new Node(1)
// console.log(ll.removeHigher())//(5)
// console.log(ll.removeHigher())//4
// console.log(ll.removeHigher())//1
// console.log(ll.head)//(null)

// EJERCICIO 6
// Crea el metodo 'removeLower' que deve devolver el valor mas bajo de la linked list 
// removiendo su nodo corresponidente:
// Ejemplo:
// > LL.print()
// < 'head --> 5 --> 4 --> 1 --> null'
// > LL.removeHigher()
// < 1
// > LL.removeHigher()
// < 4
// > LL.removeHigher()
// < 5
// > LL.removeHigher()
// < null

OrderedLinkedList.prototype.removeLower = function () {
    if (this.head === null) return null
    let current = this.head
    while (current.next) {
        var anterior = current
        current = current.next
        var valor = current.value
    }
    if (this.head.next === null) {
        let val = this.head.value
        this.head = null
        return val
    }
    anterior.next = null
    return valor
}

// let ll = new OrderedLinkedList()
// ll.head = new Node(5)
// ll.head.next = new Node(4)
// ll.head.next.next = new Node(1)
// console.log(ll.removeLower())//(1)
// console.log(ll.removeLower())//(4)
// console.log(ll.removeLower())//(5)
// console.log(ll.head)//(null)

// ----- QUEUE -----

// EJERCICIO 7
// Implementar la funcion multiCallbacks:
// la funcion multiCallbacks recibe dos arrays de objetos cuyas propiedades son dos,
// 'cb' que es una funcion, y 'time' que es el tiempo estimado de ejecucion de dicha funcion 
// este ultimo representado con un integer como se muestra acontinuacion:
// let cbsExample = [
//     {cb:function(){}, time: 2},
//     {cb:function(){}, time: 3}
// ]
// De manera que lo que nuestra funcion 'multiCallbacks' debe de ir ejecutando las funciones 
// sin pasarle parametros pero debe ir alternando las funciones de cbs1 y cbs2 
// segun cual de estas se estima que tarde menos, retornando un arreglo de resultados
// de las mismas en el orden que fueron ejecutadas
// Ejemplo:
// > let cbs1 = [
//       {cb:function(){return '1-1'}, time: 2},
//       {cb:function(){return '1-2'}, time: 3}
//   ];
// > let cbs2 = [
//       {cb:function(){return '2-1'}, time: 1},
//       {cb:function(){return '2-2'}, time: 4}
//   ];
// > multiCallbacks(cbs1, cbs2);
// < ["2-1", "1-1", "1-2", "2-2"];

function multiCallbacks(cbs1, cbs2,) {
    var arr;
    var respuesta = []
    arr = cbs1.concat(cbs2)
    arr.sort((a, b) => a.time - b.time)
    arr.map((val, i) => {
        respuesta.push(val.cb())
    })
    return respuesta
}

// var arr = []
// let callbacks = cbs1.concat(cbs2);

// let max = Math.max(...callbacks.map((ele) => ele.time));

// for (let i = 1; i <= max; i++) {
//     let callback = callbacks.find((callback) => callback.time === i);
//     arr.push(callback.cb());
// }

// return arr;
// }

// console.log(arr.length)//(4)

// ----- BST -----

// EJERCICIO 8
// Implementar el metodo 'toArray' en el prototype del BinarySearchTree
// que devuelva los valores del arbol en una array ordenado
// Ejemplo:
//     32
//    /  \
//   8   64
//  / \
// 5   9
// resultado:[5,8,9,32,64]



BinarySearchTree.prototype.toArray = function () {
    function cb(n) { arry.push(n) }
    var arry = []
    this.depthFirstForEach(cb, "in-order")
    return arry
}

// var arbol = new BinarySearchTree(10)
// arbol.insert(3)
// arbol.insert(7)
// arbol.insert(65)
// arbol.insert(4)
// // console.log(arbol)
// console.log(arbol.toArray())


//     var arry = []
//     current = this.left
//     arry.push(this.value)
//     while (current !== null) {
//         arry.push(current.value)
//         current = current.left
//     }
//     current = this.left
//     while (current !== null) {
//         arry.push(current.value)
//         current = current.right
//     }
//     current = this.right
//     while (current !== null) {
//         arry.push(current.value)
//         current = current.right
//     }
//     var ress = []
//     arry.forEach((element) => {
//         if (!ress.includes(element)) {
//             ress.push(element)
//         }
//     })
//     return ress.sort((a, b) => a - b)
// }

// console.log()
// const BST = new BinarySearchTree(32)
// const arr = [8, 64, 5, 9];
// arr.forEach(e => BST.insert(e))
// console.log(BST.toArray())

// ----- Algoritmos -----

// Ejercicio 9
// Implementar la funcion 'primalityTest' que dado un valor numerico entero
// debe de retornar true or false dependiendo de si este es primo o no.
// Puede que este es un algoritmo que ya hayan implementado pero entenderan
// que es un algoritmo que segun la implementacion puede llegar a ser muy costoso
// para numeros demasiado grandes, asi que vamos a implementarlo mediante un metodo
// derivado de Trial Division como el que se muestra aca:
// https://en.wikipedia.org/wiki/Primality_test
// Si bien esta no es la mejor implementacion existente, con que uds puedan 
// informarse sobre algoritmos, leerlos de un pseudocodigo e implemnterlos alcanzara

function primalityTest(n) {
    if (n < 2) return false
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    };
    return true;
}

// EJERCICIO 10
// Implementa el algoritmo conocido como 'quickSort', que dado un arreglo de elemntos
// retorn el mismo ordenado de 'mayor a menor!'
// https://en.wikipedia.org/wiki/Quicksort

function quickSort(array) {
    if (array.length <= 1) return array;
    let pivot = array[Math.floor(Math.random() * array.length)];
    let left = [];
    let right = [];
    let equal = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        }
        else if (array[i] > pivot) {
            right.push(array[i])
        }
        else {
            equal.push(array[i])
        }
    }
    return quickSort(right).concat(equal).concat(quickSort(left));
}

// QuickSort ya lo conocen solo que este 
// ordena de mayor a menor
// para esto hay que unir como right+mid+left o cambiar el 
// signo menor en la comparacion con el pivot

// ----- EXTRA CREDIT -----

// EJERCICIO 11
// Implementa la función 'reverse', que recibe un numero entero como parametro
// e invierte el mismo.
// Pero Debería hacer esto sin convertir el número introducido en una cadena, o un array
// Ejemplo:
// > reverse(123);
// < 321
// > reverse(95823);
// < 32859

function reverse(num) {
    var invertido = 0
    var resto = num
    do {
        invertido = invertido * 10 + (resto % 10)
        resto = Math.floor(resto / 10)
    } while (resto > 0)
    return invertido
}
// la grandiosa resolucion de Wilson!!!
// declaran una variable donde 
// almacenar el el numero invertido
// y van multiplicando por 10 la 
// porcion del numero que ya invirtieron
// deforma que esta se corra hacia la izq
// para agregar el ultimo numero de la 
// porcion no revertida
// y luego le quitan a la porcion 
// no revertida el ultimo numero

module.exports = {
    exponencial,
    direcciones,
    deepEqualArrays,
    OrderedLinkedList,
    multiCallbacks,
    primalityTest,
    quickSort,
    reverse,
    Queue,
    LinkedList,
    Node,
    BinarySearchTree
}