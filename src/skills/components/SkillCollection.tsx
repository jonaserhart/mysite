import * as React from 'react';
import Skill from './Skill';
import '../styles/Skills.scss';
import { animated } from 'react-spring';
import useDevice from '../../global/hooks/useDevice';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';

export default function SkillCollection({style} :any){

    const [isMobile] = useDevice();

    return (
        <animated.div className='center skill-collection' style={{...style}}>
            <div className="header">
                <h1>Skills</h1>
                { !isMobile && (<p>Hover to see more</p>) }
            </div>
            <Skill title="Web Development" backgroundImage="react.svg">
                <Divider style={{backgroundColor: 'white'}}/>
                <List component="nav" dense>
                    <ListItem>
                        <ListItemText primary="ASP.net core WebAPI" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="HTML/CSS/SCSS" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="React" />
                    </ListItem>
                </List>
            </Skill>      
            <Skill title="Programming Languages" backgroundImage="java.png">
                <Divider style={{backgroundColor: 'white'}}/>
                <List component="nav">
                    <ListItem>
                        <ListItemText primary="C/C#" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Java" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Haskell" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Java- /TypeScript" />
                    </ListItem>
                </List>    
            </Skill>                   
            <Skill title="Database Management" backgroundImage="postgres.png">
                <Divider style={{backgroundColor: 'white'}}/>
                <List component="nav">
                    <ListItem>
                        <ListItemText primary="PostgreSQL" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Oracle" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="MSSQL" />
                    </ListItem>
                </List>
            </Skill>  
            <Skill title="IDEs" backgroundImage="vscode.png">
                <Divider style={{backgroundColor: 'white'}}/>
                <List component="nav">
                    <ListItem>
                        <ListItemText primary="Visual Studio / Code" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Emacs" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="JetBrains Rider" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="JetBrains IntelliJ IDEA" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="JetBrains DataGrip" />
                    </ListItem>
                </List>
            </Skill>
            <Skill title="Tools & Environments" backgroundImage="ubuntu.png">
                <Divider style={{backgroundColor: 'white'}}/>
                <List component="nav">
                    <ListItem>
                        <ListItemText primary="Linux - Environment" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Windows - Environment" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Azure DevOps" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="JetBrains Space" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Fiddler/Wireshark/Postman" />
                    </ListItem>
                </List>
            </Skill>
            <Skill title="Other" backgroundImage="other.png">
                <Divider style={{backgroundColor: 'white'}}/>
                <List component="nav">
                    <ListItem>
                        <ListItemText primary="Git Version Control" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Unit Testing" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Ranorex UI Testing" />
                    </ListItem>
                </List>
            </Skill>
        </animated.div>
    )
}