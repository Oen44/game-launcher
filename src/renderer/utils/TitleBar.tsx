import { remote } from 'electron';
import * as React from 'react';

import './TitleBar.scss';

/**
 * TitleBar component
 *
 * Adds custom title bar at the top
 * with the ability to drag window
 * and use custom control buttons.
 *
 * @param title     (optional) text to show on the top bar
 * @param minimize  if true, minimize button will be visible
 * @param resize    if true, resize button will be visible
 * @param close     if true, close button will be visible
 *
 * @author          Arkadiusz Lach
 * @version         1.0
 * @since           0.0.1
 */
const TitleBar = ({
  title,
  minimize,
  resize,
  close,
}: {
  title?: string;
  minimize?: boolean;
  resize?: boolean;
  close?: boolean;
}) => {
  const window = remote.getCurrentWindow();
  let maxed = false;

  function minimizeButtonClicked() {
    window.minimize();
  }

  function resizeButtonClicked() {
    if (maxed) {
      window.unmaximize();
      maxed = false;
    } else {
      window.maximize();
      maxed = true;
    }
  }

  function closeButtonClicked() {
    window.close();
  }

  let minimizeButton;
  if (minimize) {
    minimizeButton = (
      <div className="button minimize" onClick={minimizeButtonClicked} />
    );
  }
  let resizeButton;
  if (resize) {
    resizeButton = (
      <div className="button resize" onClick={resizeButtonClicked} />
    );
  }
  let closeButton;
  if (close) {
    closeButton = <div className="button close" onClick={closeButtonClicked} />;
  }

  let titleElement;
  if (title) {
    titleElement = (
      <div id="window-title">
        <span>{title}</span>
      </div>
    );
  }

  return (
    <header className="titlebar">
      {titleElement}
      <div className="window-controls">
        {minimizeButton}
        {resizeButton}
        {closeButton}
      </div>
    </header>
  );
};

export default TitleBar;
