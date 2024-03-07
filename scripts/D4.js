/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  return l1 * l2
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  let total = 0
  int1 = Math.floor(n1)
  int2 = Math.floor(n2)
  if (int1 === int2) {
    total = (int1 + int2) * 3
    return total
  } else {
    total = int1 + int2
    return total
  }
}

console.log(
  crazySum(
    "Questo è un esempio con numeri di tipo float (entrambi i numeri vengono arrotondati per difetto) ",
    5.25,
    5.25
  )
)

console.log(
  "Questo è il risultato se i due numeri sono diversi: ",
  crazySum(3, 2)
)
console.log(
  "Questo è il risultato se i due numeri sono uguali: ",
  crazySum(2, 2)
)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (n1) {
  if (n1 > 19) {
    return Math.abs(n1 - 19) * 3
  } else {
    return Math.abs(n1 - 19)
  }
}

console.log("Con numero > 19", crazyDiff(20))
console.log("Con numero < 19", crazyDiff(5))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  int = Math.floor(n)

  if ((int >= 20 && int <= 100) || int === 400) {
    return true
  } else return false
}

console.log("Con numero compreso tra 20 e 100", boundary(50))
console.log("Con 400", boundary(400))
console.log(
  "Con numero non compreso tra 20 e 100, e diverso da 400 ",
  boundary(135)
)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (string) {
  if (string.search("EPICODE") >= 0) {
    return string
  } else {
    string = "Epicode " + string
    return string
  }
}

console.log("Risultato se la stringa contiene EPICODE:", epify("EPICODE"))
console.log("Risultato se la stringa NON contiene EPICODE:", epify("Alessio"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n) {
  positiveNumber = Math.abs(n)
  if (positiveNumber % 3 === 0 || positiveNumber % 7 === 0) {
    return true
  } else {
    return false
  }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
