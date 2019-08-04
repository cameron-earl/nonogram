import React from 'react';

import styles from './App.module.css';
import Game from './components/Game/Game';

// overall structure, including header, footer, website stuff
const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>Nonograms</header>
      <Game />
    </div>
  );
};

export default App;
