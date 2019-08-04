import { CREATE_MODE } from '../components/Game/Game';
import CellValue from './CellValue';
import Coord from './Coord';
import Puzzle from './Puzzle';

export type GameArr = CellValue[][];

export const duplicateArr = (arr: GameArr): GameArr => arr.map(r => [...r]);

export const getColumn = (arr: GameArr, col: number) => arr.map(r => r[col]);

export const updateGameArrCell = (arr: GameArr, [r, c]: Coord, val: CellValue): GameArr => {
  const newArr = duplicateArr(arr);
  newArr[r][c] = val;
  return newArr;
};

export const updateGameArrRange = (arr: GameArr, coord1: Coord, coord2: Coord, val: CellValue): GameArr => {
  const [minR, maxR] = [coord1[0], coord2[0]].sort((a, b) => a - b);
  const [minC, maxC] = [coord1[1], coord2[1]].sort((a, b) => a - b);
  const newArr = duplicateArr(arr);
  for (let r = minR; r <= maxR; r++) {
    for (let c = minC; c <= maxC; c++) {
      if (arr[r][c] === CellValue.Unknown || val === CellValue.Unknown) {
        newArr[r][c] = val;
      }
    }
  }
  return newArr;
};

export const hasErrors = (arr: GameArr, puzzle: Puzzle): boolean => {
  if (CREATE_MODE) return true;
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[r].length; c++) {
      const val = arr[r][c];
      const pVal = puzzle.arr[r][c];
      if ((pVal === CellValue.Black || val === CellValue.Black) && val !== pVal) return true;
    }
  }
  return false;
};

export const blankGameArrForPuzzle = (puzzle: Puzzle): GameArr => puzzle.arr.map(r => r.map(c => CellValue.Unknown));

export const blankGameArrFromDimensions = (rows: number, cols: number): GameArr =>
  new Array(rows).fill(null).map(r => new Array(cols).fill(CellValue.Unknown));
