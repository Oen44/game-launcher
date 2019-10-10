import { remote } from 'electron';
import * as React from 'react';

import './TitleBar.scss';

const TitleBar = ({ resize }: { resize: boolean }) => {
    React.useEffect(() => {
        let window = remote.getCurrentWindow();
        const minButtonElement = document.getElementById('min-button');
        const resizeButtonElement = document.getElementById('resize-button');
        const closeButtonElement = document.getElementById('close-button');

        if (minButtonElement) {
            minButtonElement.addEventListener('click', event => {
                window = remote.getCurrentWindow();
                window.minimize();
            });
        }

        if (resizeButtonElement) {
            resizeButtonElement.addEventListener('click', event => {
                window = remote.getCurrentWindow();
                if (window.isMaximized()) window.unmaximize();
                else window.maximize();
            });
        }

        if (closeButtonElement) {
            closeButtonElement.addEventListener('click', event => {
                window = remote.getCurrentWindow();
                window.close();
            });
        }
    });

    const minButton = <div className="button" id="min-button" />;
    let resizeButton;
    if (resize) resizeButton = <div className="button" id="resize-button" />;
    else resizeButton = <div className="button" id="resize-button" style={{ display: 'none' }} />;
    const closeButton = <div className="button" id="close-button" />;

    return (
        <header id="titlebar">
            <div id="drag-region">
                <div id="window-controls">
                    {minButton}
                    {resizeButton}
                    {closeButton}
                </div>
            </div>
        </header>
    );
};

export default TitleBar;
