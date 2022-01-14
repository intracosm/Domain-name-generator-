/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io", ".org"];
  console.log("Hello Rigo from the console!");

  let domains = [];

  for (let pronoun of pronoun) {
    for (let adj of adj) {
      for (let noun of noun) {
        for (let extensions of extensions) {
          document.querySelector(
            "#domain-list"
          ).innerHTML += `<li> ${pronoun}${adj}${noun}${extensions}</li>`;
        }
      }
    }
  }
  console.log(domains);
};
