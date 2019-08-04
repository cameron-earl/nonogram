import CellValue from '../models/CellValue';
import Puzzle from '../models/Puzzle';

export const mapCompletedClues = (clues: number[], vals: CellValue[]): boolean[] => {
  const generatedClues = Puzzle.cluesForLine(vals);

  if (generatedClues.length === clues.length && generatedClues.every((c, i) => c === clues[i])) {
    return clues.map(c => true);
  }

  const completed = clues.map(c => false);

  const fromStart = [0];

  for (let val of vals) {
    if (val === -1) break;
    if (val > 0) fromStart[fromStart.length - 1]++;
    if (val === 0 && fromStart[fromStart.length - 1]) fromStart.push(0);
  }

  for (let i = 0; i < fromStart.length; i++) {
    if (fromStart[i] === clues[i]) completed[i] = true;
  }

  const fromEnd = [0];

  for (let i = vals.length - 1; i >= 0; i--) {
    const val = vals[i];
    if (val === -1) break;
    if (val > 0) fromEnd[fromEnd.length - 1]++;
    if (val === 0 && fromEnd[fromEnd.length - 1]) fromEnd.push(0);
  }

  for (let i = 0; i < fromEnd.length; i++) {
    const flipI = clues.length - i - 1;
    if (fromEnd[i] === clues[flipI]) completed[flipI] = true;
  }

  return completed;
};
