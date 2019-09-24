export function create(key: string): any {
  localStorage.removeItem(key);
  localStorage.setItem(key, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(key));
}

export function get(key: string): any {
  return JSON.parse(localStorage.getItem(key));
}

export function set(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function remove(key: string): void {
  localStorage.removeItem(key);
}