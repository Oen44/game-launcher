import { remote } from 'electron';
import * as React from 'react';

import TitleBar from '../utils/TitleBar';
import './LauncherWindow.scss';

const LauncherWindow = () => {
  React.useEffect(() => {
    const window = remote.getCurrentWindow();
    window.setResizable(true);
    window.setSize(800, 600, true);
    window.center();
  });
  return (
    <div>
      <TitleBar resize={true} />
      <h1>Launcher Window</h1>
    </div>
  );
};

export default LauncherWindow;
