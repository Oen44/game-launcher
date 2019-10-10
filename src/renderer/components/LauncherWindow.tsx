import * as React from 'react';

import TitleBar from '../utils/TitleBar';
import './LauncherWindow.scss';

const LauncherWindow = () => (
    <div>
        <TitleBar resize={true}/>
        <h1>Launcher Window</h1>
    </div>
);

export default LauncherWindow;
