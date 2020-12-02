import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useWindowSize } from '../../global/hooks/useWindowSize';
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
        <div className="navbg"/>   
            <div className="navbar-container">
                <NavLink linkTo="/" onClick={() => onClick('/')} active={location.pathname === '/'}>Home</NavLink>
                <NavLink linkTo="/skills" onClick={() => onClick('/skills')} active={location.pathname === '/skills'}>Skills</NavLink>
                <NavLink linkTo="/references" onClick={() => onClick('/references')} active={location.pathname === '/references'}>References</NavLink>
            </div> 
        </div>
    )
}