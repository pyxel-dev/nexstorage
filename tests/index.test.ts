import { canUseLocalStorage, createLocalStorage, getLocalStorage, setLocalStorage, removeLocalStorage, canUseSessionStorage, createSessionStorage, getSessionStorage, setSessionStorage, removeSessionStorage } from "../src/index";
const index = require('../src/index');

const key = 'test';
const value = [{foo: 'bar'}];

describe('Local Storage', () => {
  test('canUse', () => {
    expect(canUseLocalStorage).toBeTruthy();
  });

  test('create', () => {
    expect(createLocalStorage(key)).toEqual([]);
  });

  test('set', () => {
    const spySet = jest.spyOn(index, 'setLocalStorage');
    setLocalStorage(key, value);
    expect(spySet).toHaveBeenCalled();
  });

  test('get', () => {
    expect(getLocalStorage(key)).toEqual(value);
  });

  test('remove', () => {
    const spyRemove = jest.spyOn(index, 'removeLocalStorage');
    removeLocalStorage(key);
    expect(spyRemove).toHaveBeenCalled();
  });
});

describe('Session Storage', () => {
  test('canUse', () => {
    expect(canUseSessionStorage).toBeTruthy();
  });

  test('create', () => {
    expect(createSessionStorage(key)).toEqual([]);
  });

  test('set', () => {
    const spySet = jest.spyOn(index, 'setSessionStorage');
    setSessionStorage(key, value);
    expect(spySet).toHaveBeenCalled();
  });

  test('get', () => {
    expect(getSessionStorage(key)).toEqual(value);
  });

  test('remove', () => {
    const spyRemove = jest.spyOn(index, 'removeSessionStorage');
    removeSessionStorage(key);
    expect(spyRemove).toHaveBeenCalled();
  });
});
