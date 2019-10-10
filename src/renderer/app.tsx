import { useRoutes } from 'hookrouter';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './global.scss';

import LauncherWindow from './components/LauncherWindow';
import LoginWindow from './components/LoginWindow';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);
document.addEventListener('dragover', event => event.preventDefault());
document.addEventListener('drop', event => event.preventDefault());

const routes = {
    '/': () => <LoginWindow />,
    '/launcher': () => <LauncherWindow />
};

const App = () => {
    const routeResult = useRoutes(routes);
    return <AppContainer>{routeResult}</AppContainer>;
};

ReactDOM.render(<App />, mainElement);
