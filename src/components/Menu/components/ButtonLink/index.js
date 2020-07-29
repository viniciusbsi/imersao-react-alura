import React from 'react';

function ButtonLink(props) {
    //props => { className: "O que for passado", href: "/"}

    return (
        <a herf={props.herf} className={props.className} href="/">
            {props.children}
        </a>
    );
}
export default ButtonLink
