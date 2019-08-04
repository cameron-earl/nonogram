import classNames from 'classnames';
import React, { MouseEventHandler } from 'react';

import CellValue from '../../models/CellValue';
import Coord from '../../models/Coord';
import Edge from '../../models/Edge';
import X from '../X';
import styles from './Cell.module.css';

type CellProps = {
  handleMouseDown: (ev: React.MouseEvent, coord: Coord) => void;
  handleMouseOver: (ev: React.MouseEvent, coord: Coord) => void;
  coord: Coord;
  selected: Edge[];

  newVal: CellValue | null;

  clickable: boolean;
  value: CellValue;
};

const Cell = React.memo(
  ({ coord, clickable, value, handleMouseDown, handleMouseOver, selected, newVal }: CellProps) => {
    const newValClass = newVal !== null ? styles['select' + CellValue[newVal]] : '';
    const cellClassNames = classNames(
      { [styles.clickable]: clickable },
      newValClass,
      selected.map(e => styles[Edge[e]]),
      styles.Cell
    );

    const handleContextMenu: MouseEventHandler = ev => {
      ev.preventDefault();
      handleMouseDown(ev, coord);
    };

    return (
      <div draggable={false} className={cellClassNames}>
        <div
          onDragStart={e => e.preventDefault()}
          draggable={false}
          className={styles[CellValue[value]]}
          onMouseDown={ev => handleMouseDown(ev, coord)}
          onMouseOver={ev => handleMouseOver(ev, coord)}
          onContextMenu={handleContextMenu}
        >
          {value === CellValue.Empty && <X />}
        </div>
      </div>
    );
  }
);

export default Cell;
