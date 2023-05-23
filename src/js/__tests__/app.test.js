import orderByProps from '../app';

test.each([
  ['normal sorted', {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  }, ['name', 'level'], [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]], ['sorted with key is not own property', {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  }, ['name', 'mana'], [
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
  ]],
])(
  ('should %s with name %s and type %s'),
  (option, obj, order, expected) => {
    const result = orderByProps(obj, order);
    expect(result).toEqual(expected);
  },
);
