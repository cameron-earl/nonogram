import { decodePuzzleArr } from '../helpers/puzzleEncoder';
import { StoredPuzzle } from '../resources/puzzles';
import CellValue from './CellValue';
import GameClues from './GameClues';

export type PuzzleArr = (CellValue.Empty | CellValue.Black)[][];

class Puzzle {
  arr: PuzzleArr;
  name: string;
  clues: GameClues;

  constructor(p: StoredPuzzle | PuzzleArr) {
    if (Array.isArray(p)) {
      this.arr = p;
      this.name = 'unknown';
    } else {
      this.arr = decodePuzzleArr(p.puzzle);
      this.name = p.name;
    }
    this.clues = Puzzle.buildClues(this.arr);
  }

  private static buildClues(arr: PuzzleArr): GameClues {
    const rowClues: number[][] = arr.map(row => Puzzle.cluesForLine(row));
    const colClues: number[][] = arr[0].map((_, i) => Puzzle.cluesForCol(arr, i));
    return { rowClues: rowClues, colClues: colClues };
  }

  private static cluesForCol(arr: PuzzleArr, col: number): number[] {
    let line: CellValue[] = [];
    for (let row = 0; row < arr.length; row++) {
      line.push(arr[row][col]);
    }
    return this.cluesForLine(line);
  }

  private static cluesForLine(line: CellValue[]) {
    const clues: number[] = [];

    for (let i = 0; i < line.length; i++) {
      let num = 0;
      while (!num && line[i] === CellValue.Empty) {
        i++;
      }
      while (line[i] === CellValue.Black) {
        num++;
        i++;
      }
      if (num) {
        clues.push(num);
      }
    }
    return clues;
  }
}

export default Puzzle;
