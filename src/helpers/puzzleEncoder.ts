import CellValue from '../models/CellValue';
import { GameArr } from '../models/GameArr';
import { PuzzleArr } from '../models/Puzzle';

const nToSymbol = (n: number): string => String.fromCharCode(n + 383);
const symbolToN = (s: string): number => s.charCodeAt(0) - 383;

const splitToLen = (str: string, len: number): string[] => {
  const regExp = new RegExp(`.{1,${len}}`, 'g');
  const arr = str.match(regExp);
  return arr || [str];
};

const binTo64 = (b: string): string => {
  if (b.length > 6) {
    throw new Error(`String "${b}" is more than 6 digits, cannot parse to num 0-63.`);
  }
  return nToSymbol(parseInt(b, 2));
};

const toSixBitBinary = (n: number): string => {
  if (n < 0 || n >= 64) {
    throw new Error('Number must be 0 - 63');
  }
  return n.toString(2).padStart(6, '0');
};

const fromBin = (bin: string) => {
  const len = bin.length;
  const nearest6 = Math.ceil(len / 6) * 6;
  const fullBin = bin.padStart(nearest6, '0');
  const encoded = splitToLen(fullBin, 6)
    .map(binTo64)
    .join('');

  return encoded;
};

export const encodePuzzleArr = (binArr: GameArr): string => {
  const rows = binArr.length;
  const cols = binArr[0].length;
  const binStr = binArr
    .map(arr => arr.map(val => (val === CellValue.Unknown ? CellValue.Empty : val)).join(''))
    .join('');
  return fromBin(binStr) + nToSymbol(rows) + nToSymbol(cols);
};

export const decodePuzzleArr = (b64: string): PuzzleArr => {
  const [rows, cols] = b64
    .slice(-2)
    .split('')
    .map(symbolToN);
  const str = b64
    .slice(0, b64.length - 2)
    .split('')
    .map(c => toSixBitBinary(symbolToN(c)))
    .join('')
    .slice(-1 * rows * cols);
  return splitToLen(str, cols).map(s => s.split('').map(n => +n as (0 | 1)));
};
