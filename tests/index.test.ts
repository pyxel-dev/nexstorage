import { create, get, set, remove } from "../src/index";
const index = require('../src/index');

const key = 'test';
const value = [{name: 'John'}];

test('create', () => {
  expect(create(key)).toEqual([]);
});

test('set', () => {
  const spySet = jest.spyOn(index, 'set');
  set(key, value);
  expect(spySet).toHaveBeenCalled();
});

test('get', () => {
  expect(get(key)).toEqual(value);
});

test('remove', () => {
  const spyRemove = jest.spyOn(index, 'remove');
  remove(key);
  expect(spyRemove).toHaveBeenCalled();
});
