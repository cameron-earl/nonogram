import React, { KeyboardEventHandler, useEffect, useState } from 'react';

import { randElement } from '../../helpers/helpers';
import { encodePuzzleArr } from '../../helpers/puzzleEncoder';
import { blankGameArrForPuzzle, blankGameArrFromDimensions, GameArr, hasErrors } from '../../models/GameArr';
import Puzzle, { PuzzleArr } from '../../models/Puzzle';
import puzzles from '../../resources/puzzles';
import CellGrid from '../CellGrid/CellGrid';
import ColClues from '../Clues/ColClues';
import RowClues from '../Clues/RowClues';
import GridPreview from '../GridPreview/GridPreview';
import styles from './Game.module.css';

export const CREATE_MODE = false;
const puzzle = CREATE_MODE
  ? new Puzzle(blankGameArrFromDimensions(15, 15) as PuzzleArr)
  : new Puzzle(randElement(puzzles));

// Timer, puzzle and puzzle selection?
const Game: React.FC = () => {
  const [gameArr, setGameArr] = useState(blankGameArrForPuzzle(puzzle) as GameArr);
  const isSolved = !hasErrors(gameArr, puzzle);
  // console.debug(gameArr);
  useEffect(() => {
    if (isSolved) {
      console.log(puzzle.name, 'SOLVED!');
    }
  }, [isSolved]);

  const handleKeyPress: KeyboardEventHandler = ev => {
    if (ev.key === '~' && gameArr) {
      console.log(encodePuzzleArr(gameArr));
    }
  };

  return (
    <div className={styles.Game} tabIndex={0} onKeyPress={handleKeyPress}>
      <GridPreview gameArr={gameArr} />
      <ColClues clues={puzzle.clues.colClues} />
      <RowClues clues={puzzle.clues.rowClues} />
      <CellGrid isSolved={isSolved} gameArr={gameArr} setGameArr={setGameArr} />
    </div>
  );
};

export default Game;
