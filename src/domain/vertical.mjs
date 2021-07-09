import { Container } from './container.mjs';

function VerticalCards(jsonObject) {
  Container.call(this, jsonObject);
}

VerticalCards.prototype = Object.create(Container.prototype);
VerticalCards.prototype.constructor = VerticalCards;

VerticalCards.prototype.extractCard = function(cardObject) {
  return cardObject.name;
};


export { VerticalCards }
