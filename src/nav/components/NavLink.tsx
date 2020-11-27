import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    linkTo: string;
    active?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
}

export default function NavLink({linkTo, onClick, active = false, children}: Props){

    const classNames = "nav-item" + (active ? " nav-item-active" : "");
    return(
        <div className={classNames}>
            <Link to={linkTo}  onClick={onClick}>{children}</Link>
        </div>
    )
}