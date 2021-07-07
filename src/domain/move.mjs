function Move() {}

Move.prototype.toIndex = function() {
  throw new Error('Can\'t move horizontally in this stage');
}

export { Move }
