import { Container } from './container.mjs';

function HorizontalCards(jsonObject) {
  Container.call(this, jsonObject);
}

HorizontalCards.prototype = Object.create(Container.prototype);
HorizontalCards.prototype.constructor = HorizontalCards;

HorizontalCards.prototype.extractCard = function(cardObject) {
  return cardObject;
}

export { HorizontalCards }
