function Container() {}

Container.prototype.getCardByIndex = function(index) {
  return this.extractCard(this.state.cards[index]);
};

export { Container }
