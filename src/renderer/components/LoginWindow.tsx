import { remote } from 'electron';
import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import gamelauncher_logoPng from '../images/gamelauncher_logo.png';
import LinkExternal from '../utils/LinkExternal';
import './LoginWindow.scss';

const LoginWindow = () => (
    <div>
        <header id="titlebar">
            <div id="drag-region">
                <div id="window-controls">
                    <div className="button" id="min-button" />
                    <div className="button" id="close-button" />
                </div>
            </div>
        </header>

        <div id="main">
            <img src={gamelauncher_logo} width="200" />

            <div className="topLabel">PLEASE LOG IN</div>

            <div className="inputs">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <div className="checkbox-container">
                    <label className="checkbox-label" htmlFor="rememberMe">
                        <input type="checkbox" id="rememberMe" />
                        <span className="checkbox-custom" />
                        <span className="input-title">Keep me logged in</span>
                    </label>
                </div>
                <button>Log in to Launcher</button>
            </div>
            <div className="line" />
            <LinkExternal title="Can't log in?" href="https://github.com/Oen44/game-launcher" />
            <LinkExternal
                title="Register new account"
                href="https://github.com/Oen44/game-launcher"
            />
            <LinkExternal title="Visit website" href="https://github.com/Oen44/game-launcher" />
            <small>v{remote.app.getVersion()}</small>
        </div>
    </div>
);

export default hot(LoginWindow);
