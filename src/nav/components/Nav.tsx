import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../styles/Nav.scss';
import NavLink from './NavLink';

export default function Nav() {
    const history = useHistory();
    const location = useLocation();

    const onClick = React.useCallback((route: string) => {
        if (history){
            history.push(route)
        }
    }, [history])

    return(
        <div className="wrapper">
        <div className="nav-bg"/>   
            <div className="navbar-container">
                <NavLink innerKey="home" linkTo="/" onClick={() => onClick('/')} active={location.pathname === '/'}>Home</NavLink>
                <NavLink innerKey="skills" linkTo="/skills" onClick={() => onClick('/skills')} active={location.pathname === '/skills'}>Skills</NavLink>
                <NavLink innerKey="ref" linkTo="/links" onClick={() => onClick('/links')} active={location.pathname === '/links'}>Projects</NavLink>
            </div> 
        </div>
    )
}