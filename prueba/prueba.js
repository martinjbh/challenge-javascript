//  1) EJERCICIO UNO
// function exponencial(exp) {
//     return function (v) {
//         return v ** exp
//     }
// }

// let sqrt = exponencial(2);
// let e4 = exponencial(4);
// let e3 = exponencial(3);


// console.log(sqrt(2))  //(4);
// console.log(sqrt(3))//(9);
// console.log(sqrt(4))//(16);

// console.log(e4(2))//(16);
// console.log(e4(3))//(81);
// console.log(e4(4))//(256);



// 2) EJERCICIO DOS//////////////////////////////////////////////////////////////////////////////////////
// let lab1 = {
//     N: 'pared', S: {
//         N: 'pared', S: 'pared', E: 'pared', O: {
//             N: 'pared', S: 'destino', E: 'pared', O: 'pared'
//         }
//     }, E: 'pared', O: 'pared'
// }
// let lab2 = {
//     N: 'pared', S: 'pared', E: {
//         N: 'pared', S: {
//             N: 'pared', S: 'pared', E: 'pared', O: {
//                 N: {
//                     N: 'pared', S: 'pared', E: 'pared', O: {
//                         N: 'pared', S: {
//                             N: 'pared', S: 'pared', E: 'destino', O: 'pared'
//                         }, E: 'pared', O: 'pared'
//                     }
//                 }, S: 'pared', E: 'pared', O: 'pared'
//             }
//         }, E: 'pared', O: 'pared'
//     }, O: 'pared'
// }
// let lab3 = {
//     N: 'pared', S: 'pared', E: {
//         N: 'pared', S: {
//             N: 'pared', S: 'pared', E: 'pared', O: {
//                 N: 'pared', S: {
//                     N: 'pared', S: 'pared', E: {
//                         N: 'pared', S: 'pared', E: 'destino', O: 'pared'
//                     }, O: 'pared'
//                 }, E: 'pared', O: 'pared'
//             }
//         }, E: 'pared', O: 'pared'
//     }, O: 'pared'
// }

// function direcciones(laberinto) {
//     if (!laberinto) return ''


// }
// // xit("Si no se le pasa un laberinto debe retornar ''", function () {
// console.log(direcciones())//  ('');

// //xit("Si se le pasa un laberinto sin destino debe retornar ''", function () {
// console.log(direcciones({ N: 'pared', S: 'pared', E: 'pared', O: 'pared' }))//('');

// //xit("Debe encontrar el destino dentro del laberinto y retornar los movimientos", function () {
// console.log(direcciones(lab1))//)('SOS');
// console.log(direcciones(lab2))//('ESONOSE');
// console.log(direcciones(lab3))//('ESOSEE');


//3) EJERCICIO 3//////////////////////////////////////////////////////////////////////////////////

// // Dado que las comparaciones en javascript aveces son un problema como con el siguiente ejemplo:
// // [0,1,2] === [0,1,2] => false // puede probarlo en la consola
// // con objetos o arrays identicos surge la necesidad de comparar en 'profundidad' arrays u objetos
// // en este caso la funcion solo va a ser pensada para recibir arrays,
// // pero estos pueden tener multiples niveles de anidacion, y la funcion deepEqualArrays debe
// // comparar cada elemento, sin importar la profundidad en la que este
// // Ejemplos: 
// // deepEqualArrays([0,1,2], [0,1,2]) => true
// // deepEqualArrays([0,1,2], [0,1,2,3]) => false
// // deepEqualArrays([0,1,[[0,1,2],1,2]], [0,1,[[0,1,2],1,2]]) => true
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
// //xit('Debe hacer comparaciones superficiales', function () {
// console.log(deepEqualArrays([0, 1, 2], [0, 1, 2]))    //true;
// //xit('Debe comparar el tipo de cada elemento tambien', function () {
// console.log(deepEqualArrays([0, 1, 2], ['0', '1', '2']))  //false;
// // //xit('Debe comparar todos los elementos de ambos arrays', function () {
// console.log(deepEqualArrays([0, 1, 2], [0, 1, 2, 4]))     //false;
// // //it("Debe de hacer comparacion en 'profundidad'", function () {
// console.log(deepEqualArrays([0, 1, [[0, 1, 2], 1, 2]],
//     [0, 1, [[0, 1, 2], 1, 2]]))   //true;


//4) EJERCICIO CUATRO //////////////////////////////////////////////////


function LinkedList() {
    this._length = 0;
    this.head = null;
}

function Node(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function (value) {
    // Si el head no apuntara a nada (lista vacia)
    if (!this.head) {
        // Hago que el head apunte al nuevo nodo
        this.head = new Node(value);
        // retorno el nuevo largo
        return ++this._length;
    }
    // Si el head si apuntara a un nodo
    // Creo un cursor con el que recorrer la lista
    let cursor = this.head;
    // Mientras el cursor este apuntando a alguien
    while (cursor.next) {
        // Muevo el cursor al nodo apuntado
        cursor = cursor.next;
    }
    // Ahora que el cursor no apunta a otro nodo
    // Hago que el nodo del cursor apunte al nuevo nodo
    cursor.next = new Node(value);
    // retorno el nuevo largo
    return ++this._length;
}

LinkedList.prototype.remove = function (value) {
    // Si el head no apuntara a nada (lista vacia) retorno null
    if (!this.head) return null;
    // Si el head apuntara a un unico nodo
    if (!this.head.next) {
        // Me guardo ese unico nodo
        let unicoNodo = this.head;
        // Corto la conexion
        this.head = null
        // Bajo en 1 '_length'
        this._length--;
        // Y retorno el valor de ese unico nodo
        return unicoNodo.value;
    }
    // Si hubiera mas nodos
    // Creo un cursor con el que recorrer la lista
    let cursor = this.head;
    // Hasta encontrar el ante ultimo nodo
    while (cursor.next.next) {
        // Muevo el cursor al nodo apuntado
        cursor = cursor.next;
    }
    // Ahora que el cursor esta en el nodo ante ultimo
    // Me guardo el ultimo nodo
    let ultimoNodo = cursor.next;
    // y desconecto el ante ultimo nodo
    cursor.next = null;
    // Bajo en 1 '_length'
    this._length--;
    // y retorno el valor del que era el ultimo nodo
    return ultimoNodo.value;
}

LinkedList.prototype.search = function (check) {
    // Si el filtro fuera una funcion llamo a filter
    if (check instanceof Function) return this.filter(check);
    // Declaro un puntero que apunta al head
    let pointer = this.head;
    // Mientras el puntero apunte a algo
    while (pointer) {
        // Compruebo el filtro
        if (check === pointer.value) return pointer.value;
        // Si no se cumplieron los filtros paso al siguiente nodo
        pointer = pointer.next;
    }
    // Si ya recorri todos nodos retorno null
    return null;
}

LinkedList.prototype.filter = function (check) {
    // Declaro un puntero que apunta al head
    let pointer = this.head;
    // Mientras el puntero apunte a algo
    while (pointer) {
        // Compruebo el filtro
        if (check(pointer.value)) return pointer.value;
        // Si no se cumplieron los filtros paso al siguiente nodo
        pointer = pointer.next;
    }
    // Si ya recorri todos nodos retorno null
    return null;
}

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
    var cabeza = this.head
    var node = new Node(val)
    if (cabeza === null) {
        this.head = node
    }
    else if (cabeza.value < val) {
        node.next = cabeza
        this.head = node
    }
    else {
        while (cabeza.value > val && cabeza.next !== null) {
            var ExCabeza = cabeza
            cabeza = cabeza.next
        }
        if (cabeza.value > val) {
            node.next = cabeza.next
            cabeza.next = node
        }
        if (cabeza.value < val) {
            node.next = cabeza
            ExCabeza.next = node
        }
        return node
    }

}// < 'head --> 5--> 3 --> 1 --> null'


var ll = new OrderedLinkedList()

ll.add(4)
ll.add(5)
ll.add(3)
ll.add(1)

console.log(JSON.stringify(ll))
// //xit("debe agregar nodos a la OrderedLinkedList, despues de los nodos mayores al argumento", function () {
// ll.add(1)
// var ll2 = new OrderedLinkedList()
// ll2.head = new Node(5)
// ll2.head.next = new Node(1)
// console.log(ll)        //(ll2)

// //xit("debe agregar nodos a la OrderedLinkedList, antes de los nodos menores al argumento", function () {
// ll.add(4)
// var ll2 = new OrderedLinkedList()
// ll2.head = new Node(5)
// ll2.head.next = new Node(4)
// ll2.head.next.next = new Node(1)
// console.log(ll) //(ll2)

//7) EJERCICIO 7/////////////////////////////////////////////////////////////////////////////////////
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

// function multiCallbacks(cbs1, cbs2) {

// }
// // //escribe("EJERCICIO 7: multiCallbacks", function () {
// //     let arr = []
//     const cbs1 = [
//         { cb: () => (arr.push('1-1'), '1-1'), time: 2 },
//         { cb: () => (arr.push('1-2'), '1-2'), time: 3 }
//     ];
//     const cbs2 = [
//         { cb: () => (arr.push('2-1'), '2-1'), time: 1 },
//         { cb: () => (arr.push('2-2'), '2-2'), time: 4 }
//     ];
//     //xit("todas las funciones(callbacks) deben haber sido llamadas", function () {
//         arr = []
//         multiCallbacks([...cbs1], [...cbs2])
//         expect(arr.length).to.be.equal(4)
//     })
//     xit("las funciones deben haber sido llamadas en el orden correcto", function () {
//         arr = []
//         multiCallbacks([...cbs1], [...cbs2])
//         expect(arr).to.be.deep.equal(['2-1', '1-1', '1-2', '2-2'])
//     })
//     xit("la funcion 'multiCallbacks' debe retornar un array con los resultados en el orden correcto", function () {
//         expect(multiCallbacks([...cbs1], [...cbs2])).to.be.deep.equal(['2-1', '1-1', '1-2', '2-2'])
//     })
// })



////////////////////////////////////////////////

// function isPrimeNum(num) {
//     for (var i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     };
//     return true;
// }


// console.log(primalityTest(3))//true;


// function invertirDigitos(numero)
// {
//   var invertido = 0
//   var resto = numero
//   do {
//     invertido = invertido * 10 + (resto % 10)
//     resto = Math.floor(resto / 10)
//   } while ( resto > 0 )
//   return invertido
// }

// console.log(invertirDigitos(123456))
// console.log(invertirDigitos(321))