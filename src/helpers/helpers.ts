export const isWithin = (lim1: number, lim2: number, n: number): boolean =>
  lim1 < lim2 ? lim1 <= n && n <= lim2 : lim2 <= n && n <= lim1;

export const randInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randElement = <T>(a: T[]): T => a[randInt(0, a.length - 1)];
