import { shell } from 'electron';
import * as React from 'react';

/**
 * LinkExternal component
 * @description Creates <a> element that opens links in default system browser
 * @param href  Link to open
 * @param title Text to show
 */
const LinkExternal = ({ href, title }: { href: string; title: string }) => {
  const openExternal = (e: React.MouseEvent) => {
    e.preventDefault();
    shell.openExternal(href);
  };
  return (
    <a href="#" className="linkExternal" onClick={openExternal}>
      {title}
    </a>
  );
};

export default LinkExternal;
