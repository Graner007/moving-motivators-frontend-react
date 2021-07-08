function Move() {}

Move.prototype.toIndex = function() {
  throw new Error('Can\'t move horizontally in this stage');
}

function noVertical() {
  throw new Error('Can\'t move vertically in this stage');
}

Move.prototype.up = function() {
  noVertical();
}

Move.prototype.down = function() {
  noVertical();
}

export { Move }
