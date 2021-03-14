// tady je místo pro náš program

let ctverecek = document.querySelector(".ctverecek");


function pocitej() {
  ctverecek.style.backgroundColor = 'green';
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
  alert("Gratulace, právě jsi spustila tutu funkci!");
  console.log("Gratulace, právě jsi spustila tuut funkci!");
  document.querySelector(".ctverecek").innerHTML = "Gratulace, právě jsi spustila tutu funkci!";
  ctverecek.style.lineHeight = "25px";
}

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
}
