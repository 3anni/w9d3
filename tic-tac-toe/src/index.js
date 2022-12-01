const View = require ('./ttt-view.js');// require appropriate file
const Game = require ('../ttt_node/game.js')// require appropriate file




document.addEventListener("DOMContentLoaded", () => {
  // Your code here


  let game = new Game();
  let el = document.querySelector('.ttt'); // this is going to be the figure 'ttt'
  let view = new View(game, el);



});

// document.addEventListener("DOMContentLoaded", () => {
