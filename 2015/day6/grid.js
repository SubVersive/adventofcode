class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.cells = [];
    for (let x = 0; x < this.width; x++) {
      this.cells.push([]);
      for (let y = 0; y < this.height; y++) {
        this.cells[x].push(false);
      }
    }
  }

  isOn(x, y) {
    return this.cells[x][y] === true;
  }

  litCount() {
    let count = 0;
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        if (this.isOn(x, y)) {
          count++;
        }
      }
    }

    return count;
  }

  everyCell(from, to, fn) {
    for (let { x } = from; x <= to.x; x++) {
      for (let { y } = from; y <= to.y; y++) {
        this.cells[x][y] = fn(this.cells[x][y]);
      }
    }
  }

  turnOn(from, to) {
    this.everyCell(from, to, () => true);
  }

  turnOff(from, to) {
    this.everyCell(from, to, () => false);
  }

  toggle(from, to) {
    this.everyCell(from, to, (value) => !value);
  }
}

const makeGrid = (width, height) => {
  const grid = new Grid(width, height);
  return grid;
};

module.exports = makeGrid;
