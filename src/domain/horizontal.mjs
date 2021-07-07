import { Container } from './container.mjs';

function HorizontalCards(jsonEncoded) {
  Container.call(this);
  this.state = jsonEncoded;
}

export { HorizontalCards }
