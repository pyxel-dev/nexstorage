/**
 * @export
 * @returns {boolean}
 */
export function canUseLocalStorage(): boolean {
  return localStorage !== undefined;
}

/**
 * @export
 * @template T
 * @param {string} key
 * @returns {T}
 */
export function createLocalStorage<T>(key: string): T {
  localStorage.removeItem(key);
  localStorage.setItem(key, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(key));
}

/**
 * @export
 * @template T
 * @param {string} key
 * @returns {T}
 */
export function getLocalStorage<T>(key: string): T {
  return JSON.parse(localStorage.getItem(key));
}

/**
 * @export
 * @param {string} key
 * @param {*} value
 */
export function setLocalStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * @export
 * @param {string} key
 */
export function removeLocalStorage(key: string): void {
  localStorage.removeItem(key);
}

/**
 * @export
 * @returns {boolean}
 */
export function canUseSessionStorage(): boolean {
  return sessionStorage !== undefined;
}

/**
 * @export
 * @template T
 * @param {string} key
 * @returns {T}
 */
export function createSessionStorage<T>(key: string): T {
  sessionStorage.removeItem(key);
  sessionStorage.setItem(key, JSON.stringify([]));
  return JSON.parse(sessionStorage.getItem(key));
}

/**
 * @export
 * @template T
 * @param {string} key
 * @returns {T}
 */
export function getSessionStorage<T>(key: string): T {
  return JSON.parse(sessionStorage.getItem(key));
}

/**
 * @export
 * @param {string} key
 * @param {*} value
 */
export function setSessionStorage(key: string, value: any): void {
  sessionStorage.setItem(key, JSON.stringify(value));
}

/**
 * @export
 * @param {string} key
 */
export function removeSessionStorage(key: string): void {
  sessionStorage.removeItem(key);
}
