export function cleanKeys<T extends Record<string, any>>(item: T): T {
  for (const key in item) {
    if (['', 'undefined', 'null', null, undefined].includes(item[key])) {
      delete item[key];
    }
  }

  return item;
}
