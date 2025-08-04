import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dom = ['.com', '.es', '.eu', '.ol'];
const arreg = [pronoun, adj, noun,, dom]

// const mix = arreg => {
//   const index = Math.floor(Math.random()*arreg.length)
//   return index
// } 
for (let p of pronoun) {
    for (let a of adj) {
        for (let n of noun) {
          for (let d of dom) {
            console.log(p + a + n + d);
          }
        }
    }
}