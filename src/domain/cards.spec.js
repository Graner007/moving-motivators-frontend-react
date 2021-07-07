import { HorizontalCards } from './horizontal.mjs';
import { VerticalCards } from './vertical.mjs';

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
