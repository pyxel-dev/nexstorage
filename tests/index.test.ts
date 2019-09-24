import { create, get, set, remove } from "../src/index";

test('create', () => {
  const key = 'test';
  const initValue = [];
  expect(create(key)).toEqual([]);
});

test('create 2', () => {
  const key = 'test';
  const value = [{name: 'John'}];
  create(key);
  set(key, value)
  expect(get(key)).toEqual([{name: 'John'}]);
});