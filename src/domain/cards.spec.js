import { HorizontalCards } from './horizontal.mjs';
import { VerticalCards } from './vertical.mjs';
import * as CardView from './cardView.mjs';

const example_horizontal = {
  'stage':'horizontal',
  'cards': [
    'acceptance', 'curiosity', 'freedom', 'goal', 'honor',
    'mastery', 'order', 'power', 'relatedness', 'status'
  ]
}

const example_vertical = {
  'stage': 'vertical',
  'cards': [
    {
      'name': 'order',
      'position': 'middle'
    },
    {
      'name': 'acceptance',
      'position': 'high'
    },
    {
      'name': 'curiosity',
      'position': 'middle'
    },
    {
      'name': 'freedom',
      'position': 'middle'
    },
    {
      'name': 'goal',
      'position': 'middle'
    },
    {
      'name': 'honor',
      'position': 'middle'
    },
    {
      'name': 'mastery',
      'position': 'middle'
    },
    {
      'name': 'power',
      'position': 'high'
    },
    {
      'name': 'relatedness',
      'position': 'middle'
    },
    {
      'name': 'status',
      'position': 'low'
    }
  ]
}

it('can create horizontal container from JSON', () => {
  const container = new HorizontalCards(example_horizontal);
  expect(container).toBeDefined();
});

it('can get card name by index in horizontal container', () => {
  const container = new HorizontalCards(example_horizontal);
  expect(container.getCardByIndex(0)).toBe('acceptance');
});

it('can get card name by index in vertical container', () => {
  const container = new VerticalCards(example_vertical);
  expect(container.getCardByIndex(0)).toBe('order');
});

it('can create the proper view object', () => {
  const vertical = CardView.fromJsonObject(example_vertical);
  const horizontal = CardView.fromJsonObject(example_horizontal);
  expect(horizontal.getCardByIndex(0)).toBe('acceptance');
  expect(vertical.getCardByIndex(0)).toBe('order');
});

it('can move horizontally in horizontal container', () => {
  const horizontal = CardView.fromJsonObject(example_horizontal);
  expect(horizontal.moveCard('order').toIndex(5))
    .toStrictEqual({'result': 'update', 'message': {'from': 6, 'to': 5}});
});

it('won\'t move without change', () => {
  const horizontal = CardView.fromJsonObject(example_horizontal);
  expect(horizontal.moveCard('order').toIndex(6))
    .toStrictEqual({'result': 'no-op'});
});

it('can\'t move vertically in first stage', () => {
  const horizontal = CardView.fromJsonObject(example_horizontal);
  const matcher = /Can't move vertically/;
  expect(() => horizontal.moveCard('order').up())
    .toThrow(matcher);
  expect(() => horizontal.moveCard('order').down())
    .toThrow(matcher);
});
