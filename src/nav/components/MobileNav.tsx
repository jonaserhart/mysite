import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Trail from '../../global/components/Trail';
import NavLink from './NavLink';
import '../styles/Nav.scss';
import AddIcon from '@material-ui/icons/Add';
import { animated, useSpring } from 'react-spring';
import { Divider } from '@material-ui/core';

export default function MobileNav(){

    const [open, setOpen] = React.useState(false);
    const [openTrail, setOpenTrail] = React.useState(false);


    const [props, set] = useSpring(() => ({ r: 0, config: { mass: 1, tension: 500, friction: 10 } }))
    const trans : any = (r: number) => `rotate(${r}deg)`;

    const history = useHistory();
    const location = useLocation();

    const setOpenMenu = React.useCallback((open: boolean) => {
        if(open){
            setOpen(true);
            set({r: 45});
            setTimeout(() => {
                setOpenTrail(true)
            }, 150)
        }
        else{
            setOpenTrail(false);
            setTimeout(() => {
                setOpen(false);
                set({r: 0});
            }, 150)
        }
    },[setOpen, setOpenTrail, set]);

    const onClick = React.useCallback((route: string) => {
        if (history){
            history.push(route)
        }
        setOpenMenu(false);
    }, [history, setOpenMenu])

    return (
            <div className="mobile-nav">
                <div className="top-bar">
                    <animated.div className="open-button" onClick={() => setOpenMenu(!open)} style={{ transform: props.r.interpolate(trans)}}>
                        <AddIcon style={{ color: 'white', fontSize: '40px'}}/>
                    </animated.div>
                </div>
                <Trail open={open} elemHeight={250}>
                        <Trail open={openTrail}>
                            <Divider style={{backgroundColor: 'white'}}/>
                            <NavLink linkTo="/" onClick={() => onClick('/')} active={location.pathname === '/'}>Home</NavLink>
                            <NavLink linkTo="/skills" onClick={() => onClick('/skills')} active={location.pathname === '/skills'}>Skills</NavLink>
                            <NavLink linkTo="/references" onClick={() => onClick('/references')} active={location.pathname === '/references'}>References</NavLink>
                        </Trail>
                </Trail>
            </div>
);
}