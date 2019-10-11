import { remote } from 'electron';
import * as React from 'react';

import icon from '../images/gamelauncher_icon.png';
import TitleBar from '../utils/TitleBar';
import './LauncherWindow.scss';

const LauncherWindow = () => {
  React.useEffect(() => {
    const window = remote.getCurrentWindow();
    window.setResizable(true);
    window.setSize(1000, 800);
    window.setMinimumSize(1000, 800);
    window.center();
  });
  return (
    <div className="launcherWindow">
      <TitleBar minimize resize close />
      <div className="topMenu">
        <img src={icon} width="64" />
        <ul>
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </div>
      <div className="mainContent">
        <div className="leftMenu">
          <img src="https://via.placeholder.com/48" />
          <img src="https://via.placeholder.com/48" />
          <img src="https://via.placeholder.com/48" />
          <img src="https://via.placeholder.com/48" />
        </div>
        <div className="content">
          <img src="https://via.placeholder.com/480x280" />
        </div>
      </div>
    </div>
  );
};

export default LauncherWindow;
