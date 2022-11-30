class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }

  setupBoard() {
    let list = this.el.createElement('ul');
    list.classList.add("grid_style");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let pos = [i,j];
        let li = document.createElement('li');
        li.classList.add("li-style");
        li['data-pos'] = pos;
        list.appendChild(li); // append also works
      }
    }
    this.el.appendChild(list);
    console.log('board loaded');
  }

  bindEvents() {

  }

  handleClick(e) {
    //this.li()
  }

  makeMove(square) {

  }

}

module.exports = View;
