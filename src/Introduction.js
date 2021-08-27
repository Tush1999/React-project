import React,{Component} from 'react';
import tabs from './tabs'
import {NavLink} from "react-router-dom"
import './style.css'
export default class Introduction extends Component 
{
render(){
    const display = tabs.map(val=>
        {return (
        <NavLink activeClassName="active-Link" className="Link" to={`/${val.name}`}>{`${val.name}`}</NavLink>
        )
})
return(
    <div className="flex-div">
      
        {display}
      
        
    </div>
)
}
}
