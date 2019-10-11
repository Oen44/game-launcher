import { shell } from 'electron';
import * as React from 'react';

/**
 * LinkExternal component
 *
 * Creates <a> element that opens links in default system browser.
 *
 * @param href  Link to open
 * @param title Text to show
 *
 * @author          Arkadiusz Lach
 * @version         1.0
 * @since           0.0.1
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
