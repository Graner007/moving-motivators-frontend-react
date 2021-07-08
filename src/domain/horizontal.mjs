import { Container } from './container.mjs';
import { Move } from './move.mjs';

function HorizontalCards(jsonObject) {
  Container.call(this, jsonObject);
}

HorizontalCards.prototype = Object.create(Container.prototype);
HorizontalCards.prototype.constructor = HorizontalCards;

HorizontalCards.prototype.extractCard = function(cardObject) {
  return cardObject;
}

HorizontalCards.prototype.moveCard = function(cardName) {
  // TODO: error handling
  const index = this.state.cards.findIndex(x => x == cardName);
  return new HorizontalMove(cardName, index);
}

function HorizontalMove(cardName, index) {
  Move.call(this);
  this.cardName = cardName;
  this.index = index;
}

HorizontalMove.prototype = Object.create(Move.prototype);
HorizontalMove.prototype.constructor = HorizontalMove;

HorizontalMove.prototype.toIndex = function(index) {
  if (index === this.index) {
    return {'result': 'no-op'};
  }
  if (index <= 0 || index > 9) {
    throw Error(`index ${index} out of range`);
  }
  return {'result':'update',
          'message': {'from': this.index, 'to': index}};
}

export { HorizontalCards }
