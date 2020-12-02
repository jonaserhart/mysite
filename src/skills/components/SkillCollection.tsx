import * as React from 'react';
import Skill from './Skill';
import '../styles/Skills.scss';
import { animated } from 'react-spring';
import useDevice from '../../global/hooks/useDevice';

export default function SkillCollection({style} :any){

    const [isMobile] = useDevice();

    return (
        <animated.div className='center skill-collection' style={{...style}}>
            <div className="header">
                <h1>Skills</h1>
                { isMobile && (<p>Hover to see more</p>) }
            </div>
            <Skill title="Web Development" backgroundImage="react.png">
                <ul>
                    <li>ASP.net core</li>
                    <li>Javascript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                </ul>
            </Skill>      
            <Skill title="Object-Oriented" backgroundImage="java.png">
                <ul>
                    <li>C#</li>
                    <li>Java</li>
                </ul>    
            </Skill>
            <Skill title="Functional Programming" backgroundImage="haskell.png">
                <ul>
                    <li>Haskell</li>    
                </ul>    
            </Skill>                     
            <Skill title="Database Management" backgroundImage="postgres.png">
                <ul>
                    <li>Postgres</li>
                    <li>MSSQL</li>
                    <li>Oracle</li>
                </ul>
            </Skill>  
            <Skill title="IDEs" backgroundImage="vscode.png">
                <ul>
                    <li>Visual Studio Code</li>
                    <li>Visual Studio</li>
                    <li>Emacs</li>
                    <li>JetBrains Rider</li>
                    <li>JetBrains IntelliJ IDEA</li>
                    <li>JetBrains Webstorm</li>
                    <li>JetBrains DataGrip</li>
                </ul>
            </Skill>
            <Skill title="Tools & Environments" backgroundImage="ubuntu.png">
                <ul>
                    <li>Linux - Environment</li>
                    <li>Windows - Environment</li>
                    <li>Azure DevOps</li>
                    <li>JetBrains Space DevOps</li>
                    <li>Fiddler/Wireshark/Postman</li>
                </ul>
            </Skill>
            <Skill title="Other" backgroundImage="other.png">
                <ul>
                    <li>Azure DevOps</li>
                    <li>JetBrains Space DevOps</li>
                    <li>Git Version Control</li>
                    <li>C Programming Language</li>
                    <li>Unit Testing</li>
                    <li>Ranorex UI Testing</li>
                </ul>
            </Skill>
        </animated.div>
    )
}