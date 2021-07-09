import { HorizontalCards } from './horizontal.mjs';
import { VerticalCards } from './vertical.mjs';

function fromJsonObject(jsonObject) {
  switch (jsonObject.stage) {
  case 'vertical':
    return new VerticalCards(jsonObject);
  case 'horizontal':
    return new HorizontalCards(jsonObject);
  default:
    throw new Error(`Unknown cardView stage: {jsonObject.stage}`);
  }
}

export { fromJsonObject }
