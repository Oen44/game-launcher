import { remote } from 'electron';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './global.scss';

import LoginWindow from './components/LoginWindow';

(function handleWindowControls() {
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
            init();
        }
    };

    function init() {
        let window = remote.getCurrentWindow();
        const minButton = document.getElementById('min-button');
        const maxButton = document.getElementById('max-button');
        const restoreButton = document.getElementById('restore-button');
        const closeButton = document.getElementById('close-button');

        if (minButton) {
            minButton.addEventListener('click', event => {
                window = remote.getCurrentWindow();
                window.minimize();
            });
        }

        if (maxButton) {
            maxButton.addEventListener('click', event => {
                window = remote.getCurrentWindow();
                window.maximize();
                toggleMaxRestoreButtons();
            });
        }

        if (restoreButton) {
            restoreButton.addEventListener('click', event => {
                window = remote.getCurrentWindow();
                window.unmaximize();
                toggleMaxRestoreButtons();
            });
        }

        if (closeButton) {
            closeButton.addEventListener('click', event => {
                window = remote.getCurrentWindow();
                window.close();
            });
        }

        toggleMaxRestoreButtons();
        window.on('maximize', toggleMaxRestoreButtons);
        window.on('unmaximize', toggleMaxRestoreButtons);

        function toggleMaxRestoreButtons() {
            if (maxButton && restoreButton) {
                window = remote.getCurrentWindow();
                if (window.isMaximized()) {
                    maxButton.style.display = 'none';
                    restoreButton.style.display = 'flex';
                } else {
                    restoreButton.style.display = 'none';
                    maxButton.style.display = 'flex';
                }
            }
        }
    }
})();

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

// Render components
const render = (Component: () => JSX.Element) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        mainElement
    );
};

render(LoginWindow);
