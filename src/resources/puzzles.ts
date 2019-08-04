export type StoredPuzzle = {
  name: string;
  puzzle: string;
};

const p = (name: string, puzzle: string): StoredPuzzle => ({ name, puzzle });

const borrowed: StoredPuzzle[] = [
  p('pi', 'ƀƼƑƤƊƄƄ'),
  p('house', 'ſƐƶƹƶƄƄ'),
  p('heart', 'ƀƮƾƶƃƄƄ'),
  p('arrow', 'ſƐƆƳƃƄƄ'),
  p('skull', 'ſƺƼƞƩƄƄ'),
  p('plane', 'ſƒƾƱƍƄƄ'),
  p('cross', 'ſƺƛƜƭƄƄ'),
  p('tower', 'ƀƖƺƤƍƄƄ'),
  p('hourglass', 'ƀƼƐƆƞƄƄ'),
  p('shuriken', 'ƀƎƱƦƸƄƄ'),
  p('leaf', 'ſƾƄƓƴƤƙƔƸƗƦƽƇƐƝƋſƉƉ'),
  p('music', 'ſƎƆƃƐưƸƃƃƐƶƎƻƾưƥſƉƉ'),
  p('tapir', 'ƎƾƯſſƾſſƞƷſƎƽƗƂƸƽƀƼƮſƞƮƷƎƾƾƂƾƾƯƾƽƻƎƶƾƂƼƾƯƞƮƻƾƼƾƸƲƢƻƛƷƞƆƍƂưƲƟƻƛƷƎƦƮſƓƓ'),
];

const original: StoredPuzzle[] = [p('smiley', 'ſƨƏƇƭƄƄ'), p('vampire', 'ƆƺƾƥƘƦƦƞƢƯƣƇƇ')];

const puzzles = [...borrowed, ...original];

export default puzzles;
