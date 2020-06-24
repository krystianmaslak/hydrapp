import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

// powiązania elementów z HTML
const glassCounter = document.querySelector(".glass__counter--js");
const buttonAdd = document.querySelector(".button--add--js");
const buttonRemove = document.querySelector(".button--remove--js");

// Wartość szklanek przechowywana w LOCALSTORAGE pod kluczem z dzisiejszą datą - Zapisuje / Nie zeruje
// const key = new Date().toISOString().slice(0, 10);
const key = new Date().toLocaleString().slice(0, 10); /* Local - strefa czasowa  */

// stan - zmienna : przechowujący liczbę szklanek
let currentGlassCounter = 0;

//          Sprawdzenie czy coś pod kluczem jest
// Pobieranie aktualnej wartości z LocalStorage
const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
  // jeśli coś tam jest
  currentGlassCounter = localStorageValue;
} else {
  // gdy jest pusto
  localStorage.setItem(key, 0); // - wstawienie 0 - DOMYŚLNIE
}

glassCounter.innerHTML = currentGlassCounter;  //wstawienie wartości do html z pamięci

//-------------------------------------------------------------------------------------------------
buttonAdd.addEventListener("click", () => {
  currentGlassCounter++; //zwiększenie wartości
    // currentGlassCounter = parseInt(currentGlassCounter + 1); //lub 2gi sposbów
  glassCounter.innerHTML = currentGlassCounter;  //wstawienie wartości do html
  localStorage.setItem(key, currentGlassCounter); //aktualizacja wartości po kliknięciu z z pamięci
});

buttonRemove.addEventListener("click", () => {
  if (currentGlassCounter > 0) {
    //minimum 0
    currentGlassCounter--; //zwiększenie wartości
  }
  glassCounter.innerHTML = currentGlassCounter; //wstawienie wartości do html
  localStorage.setItem(key, currentGlassCounter); //aktualizacja wartości po kliknięciu z z pamięci
});
