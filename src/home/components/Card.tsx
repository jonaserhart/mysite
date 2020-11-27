import * as React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Card.scss';

interface Props {
    backgroundImage: string;
    linkTo: string;
}

export default function CardLink({backgroundImage, linkTo}: Props) {

    const history = useHistory();

    return(
        <div className="card-link" onClick={() => history.push(linkTo)}>
            <div className="bgImage-card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})`}}/>
            <div className="card-title">                
                <h2>Skills</h2>  
            </div>
        </div>
    )
}