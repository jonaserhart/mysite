import * as React from 'react';
import { animated, useTrail } from 'react-spring';
import '../styles/Home.scss'


function Trail({ open, children, ...props }:any) {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 20 : 0,
      height: open ? 50 : 0,
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
                <h1>Welcome</h1>
                <h2>to my personal website</h2>
            </Trail>
        </animated.div>
    )
}