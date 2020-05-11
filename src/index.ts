export function canUseLocalStorage(): boolean {
  return localStorage !== undefined;
}

export function createLocalStorage<T>(key: string): T {
  localStorage.removeItem(key);
  localStorage.setItem(key, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(key));
}

export function getLocalStorage<T>(key: string): T {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeLocalStorage(key: string): void {
  localStorage.removeItem(key);
}

export function canUseSessionStorage(): boolean {
  return sessionStorage !== undefined;
}

export function createSessionStorage<T>(key: string): T {
  sessionStorage.removeItem(key);
  sessionStorage.setItem(key, JSON.stringify([]));
  return JSON.parse(sessionStorage.getItem(key));
}

export function getSessionStorage<T>(key: string): T {
  return JSON.parse(sessionStorage.getItem(key));
}

export function setSessionStorage(key: string, value: any): void {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function removeSessionStorage(key: string): void {
  sessionStorage.removeItem(key);
}
