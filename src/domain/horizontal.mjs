import { Container } from './container.mjs';

function HorizontalCards(jsonEncoded) {
  Container.call(this);
  this.state = jsonEncoded;
}

HorizontalCards.prototype = Object.create(Container.prototype);
HorizontalCards.prototype.constructor = HorizontalCards;

HorizontalCards.prototype.extractCard = function(cardObject) {
  return cardObject;
}

export { HorizontalCards }
