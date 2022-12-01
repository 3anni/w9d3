class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.bindEvents();
  }

  setupBoard() {
    console.log('at top of board setup');
    let list = document.createElement('ul');
    list.classList.add("grid_style");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let pos = [i,j];
        let li = document.createElement('li');
        li.classList.add("li-style");
        // li['data-pos'] = pos;
        li.setAttribute('data-pos',pos)
        list.appendChild(li); // append also works
      }
    }
    this.el.appendChild(list);
    console.log('board loaded');
  }

  bindEvents() {
    // this.el.addEventListener('click',(e) => console.log("click on target"));
    // let abc = document.querySelector(".li-style");
    this.el.addEventListener('click', (e) => this.handleClick(e)) // console.log(`${this.el['grid-pos']}`)
  }

  handleClick(e) {
    //this.li()
    // console.log('in the click handler');
    // e.target.addEventListener('click', console.log("click on target"));
    // console.log(e);
    // console.log(e.target);
    // let pos = e.target['grid-pos'];
    
    // Get Position
    let posString = e.target.getAttribute('data-pos');
    let pos = posString.split(',').map(el => parseInt(el));
    
    try {
      this.game.playMove(pos);
      this.makeMove(e.target); 
    } catch {
      alert('invalid move');
    }
  }

  makeMove(square) {
    let mark = this.game.currentPlayer;
    square.innerText = mark;
    square.classList.add("mark");
  }

}

module.exports = View;
