import React from "react";
import {Link} from 'react-router-dom';

import './style.scss';

export default function(props){
    return(
        <Link className={`button ${props.class == undefined ? '' : props.class}`} to={`/${props.link}`}>{props.title}</Link>
    )
}