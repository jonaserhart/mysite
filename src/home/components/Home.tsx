import * as React from 'react';
import { animated, useTrail } from 'react-spring';
import '../styles/Home.scss'
import CardLink from './Card';


function Trail({ open, children, ...props }:any) {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 100 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    })
    return (
      <div className="trails-main" {...props}>
        <div>
          {trail.map(({ x, height, ...rest }: any, index: number) => (
            <animated.div
              key={items[index]+""}
              className="trails-text"
              style={{ ...rest, transform: x.interpolate((x: any) => `translate3d(0,${x}px,0)`) }}>
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
          ))}
        </div>
      </div>
    )
}

export default function Home({style}: any){

    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            setOpen(true);
        }, 600)
    },[])

    return (
        <animated.div className="center home" style={{...style}}>
            <Trail open={open}>
                <div className="image-container">
                    <img className="profile-image" alt="me" src={process.env.PUBLIC_URL + 'me.jpg'}/>
                </div>
                <div>
                    <h1>Hello there!</h1>
                    <p>Welcome to my personal Website, feel free to look around.</p>
                </div>
                <div>
                    <p>
                        Check out my skills and references on the top of this page or below:
                    </p>
                    <p>This site is currently under development...</p>
                </div>
                <CardLink backgroundImage='react.png' linkTo='/skills'/>
            </Trail>
        </animated.div>
    )
}