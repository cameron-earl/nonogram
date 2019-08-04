import CellValue from '../models/CellValue';
import ClickType from '../models/ClickType';

const getNewVal = (currentVal: CellValue, clickType: ClickType): CellValue | null => {
  if (clickType !== ClickType.left && clickType !== ClickType.right) return null;
  let newVal: CellValue;
  if (clickType === ClickType.left) {
    newVal = currentVal === CellValue.Unknown ? CellValue.Black : CellValue.Unknown;
  } else {
    newVal = currentVal === CellValue.Unknown ? CellValue.Empty : CellValue.Unknown;
  }
  console.debug(clickType, currentVal, newVal);

  return newVal;
};

export default getNewVal;
