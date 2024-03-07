// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  const arrayOfRandomNumber = []

  for (let i = 0; i < n; i++) {
    randomNumber = Math.floor(Math.random() * 11)
    arrayOfRandomNumber.push(randomNumber)
  }
  return arrayOfRandomNumber
}

const checkArray = function (array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      console.log(array[i], "è maggiore di 5")
      sum += array[i]
    } else {
      console.log(array[i], "è minore o uguale di 5")
    }
  }
  return sum
}

console.log(checkArray(giveMeRandom(5)))

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
  (obj1 = {
    price: 4,
    name: "sapone",
    id: 1,
    quantity: 10,
  }),
  (obj2 = {
    price: 10,
    name: "detersivo",
    id: 2,
    quantity: 50,
  }),
  (obj3 = {
    price: 7,
    name: "dentifricio",
    id: 3,
    quantity: 25,
  }),
]

const shoppingCartTotal = function (array = []) {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    total += array[i].price * array[i].quantity
  }
  return total
}

console.log(shoppingCartTotal(shoppingCart))

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const addToShoppingCart = function (obj = {}) {
  if (obj.price && obj.name && obj.id && obj.quantity) {
    shoppingCart.push(obj)
  }
  return shoppingCart.length
}

objNew = {
  price: 25,
  name: "pollo",
  id: 4,
  quantity: 5,
}

console.log(addToShoppingCart(objNew))
console.log(shoppingCart)

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const maxShoppingCart = function (array = []) {
  let max = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i].price > max) {
      max = array[i].price
    }
  }
  return max
}

console.log("Il prezzo più alto è:", maxShoppingCart(shoppingCart))

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const latestShoppingCart = function (array = []) {
  if (array.length > 0) {
    return array[array.length - 1]
  }
}

console.log("Questo è l'ultimo elemento:", latestShoppingCart(shoppingCart))

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const loopUntil = function (num) {
  index = 0
  randomNumber = 0
  int = Math.floor(num)
  if (num > 0 && num < 10) {
    while (index < 3) {
      randomNumber = Math.floor(Math.random() * 10)
      console.log("Random number:", randomNumber)
      if (randomNumber > num) {
        index += 1
        console.log("index", index)
      } else {
        index = 0
      }
    }
  }
}

loopUntil(4)

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const average = function (array = []) {
  let notNumber = 0
  let sum = 0
  let average = 0

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      notNumber += 1
    } else {
      sum += array[i]
    }
  }
  let minus = array.length - notNumber
  average = sum / minus
  return average
}

let array = [0, 2, 7, "Pippo", true, 5, 8, "Pop", false, 70]
console.log(average(array))

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const longest = function (array = []) {
  longLenght = 0
  longString = ""
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      if (array[i].length > longLenght) {
        longLenght = array[i].length
        longString = array[i]
      }
    }
  }
  return longString
}

const array2 = [10, "Pippo", "Tommaso", true, "Cristiano"]
console.log(longest(array2))

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
