function Container(jsonObject) {
  this.state = jsonObject
}

Container.prototype.getCardByIndex = function(index) {
  return this.extractCard(this.state.cards[index]);
};

export { Container }
