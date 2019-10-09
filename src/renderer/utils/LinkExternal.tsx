import { shell } from 'electron';
import * as React from 'react';

const LinkExternal = ({ href, title }: { [key: string]: any }) => {
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
