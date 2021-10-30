import './link.css';

import React from 'react';

function Link(props) {
    const { title, url } = { ...props.lnk };
    return (
        <a className="navLink" href={url}>
            {title}
        </a>
    )
}

export default Link
