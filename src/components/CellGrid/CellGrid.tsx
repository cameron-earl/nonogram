import classNames from 'classnames';
import React, { MouseEventHandler, useEffect, useState } from 'react';

import getNewVal from '../../helpers/getNewVal';
import { isWithin } from '../../helpers/helpers';
import CellValue from '../../models/CellValue';
import Coord from '../../models/Coord';
import Edge from '../../models/Edge';
import { GameArr, updateGameArrRange } from '../../models/GameArr';
import Cell from '../Cell/Cell';
import styles from './CellGrid.module.css';

type CellGridProps = {
  gameArr: GameArr;
  setGameArr: (arg0: GameArr) => void;
  isSolved: boolean;
};

// puzzle solution progress
const CellGrid = ({ gameArr, setGameArr, isSolved }: CellGridProps) => {
  const [mouseDown, setMouseDown] = useState(null as (Coord | null));
  const [mouseOver, setMouseOver] = useState(null as Coord | null);
  const [newVal, setNewVal] = useState(null as CellValue | null);
  console.time('blah');
  useEffect(() => {
    console.timeEnd('blah');
  });

  const handleMouseDown = (ev: React.MouseEvent, coord: Coord): void => {
    if (isSolved) return;
    // console.debug('down', coord, ev.target);
    setMouseDown(coord);
    setNewVal(getNewVal(gameArr[coord[0]][coord[1]], ev.button));
  };

  const handleMouseUp: MouseEventHandler = ev => {
    if (newVal !== null && mouseDown !== null) {
      const newArr = updateGameArrRange(gameArr, mouseDown, mouseOver || mouseDown, newVal);
      setGameArr(newArr);
    }
    setMouseDown(null);
    setMouseOver(null);
  };

  const handleMouseOver = (ev: React.MouseEvent, coord: Coord): void => {
    if (!mouseDown) return;
    setMouseOver(coord);
    console.debug('over', coord);
  };

  const isSelected = ([row, col]: Coord): boolean => {
    if (!mouseDown) return false;
    if (!mouseOver) return row === mouseDown[0] && col === mouseDown[1];
    return isWithin(mouseDown[0], mouseOver[0], row) && isWithin(mouseDown[1], mouseOver[1], col);
  };

  const getSelectedEdges = ([row, col]: Coord): Edge[] => {
    let edges: Edge[] = [];
    if (!mouseDown || !isSelected([row, col])) return edges;
    const [topRow, leftCol, bottomRow, rightCol] = mouseOver
      ? [
          Math.min(mouseDown[0], mouseOver[0]),
          Math.min(mouseDown[1], mouseOver[1]),
          Math.max(mouseDown[0], mouseOver[0]),
          Math.max(mouseDown[1], mouseOver[1]),
        ]
      : [mouseDown[0], mouseDown[1], mouseDown[0], mouseDown[1]];
    if (row === topRow) edges.push(Edge.top);
    if (col === leftCol) edges.push(Edge.left);
    if (row === bottomRow) edges.push(Edge.bottom);
    if (col === rightCol) edges.push(Edge.right);
    return edges;
  };

  const cells = gameArr.map((r, ri) => (
    <div className={styles.row} key={r.toString() + ri}>
      {r.map((c, ci) => (
        <Cell
          coord={[ri, ci]}
          newVal={newVal}
          clickable={!isSolved}
          handleMouseDown={handleMouseDown}
          handleMouseOver={handleMouseOver}
          value={isSolved && c === CellValue.Empty ? CellValue.Unknown : c}
          selected={getSelectedEdges([ri, ci])}
          key={`${ri},${ci}`}
        />
      ))}
    </div>
  ));

  return (
    <div
      className={classNames({ [styles.CellGrid]: true, [styles.isSolved]: isSolved })}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {cells}
    </div>
  );
};

export default CellGrid;
