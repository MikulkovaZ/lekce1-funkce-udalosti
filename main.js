// tady je místo pro náš program

let ctverecek = document.querySelector(".ctverecek");


function pocitej() {
  
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
  
}

function zmenbarvu() {
  ctverecek.style.backgroundColor = 'green';
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
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  document.querySelector(".ctverecek").innerHTML = "Gratulace, právě jsi spustila tuto funkci!";
  ctverecek.style.lineHeight = "25px";
}


