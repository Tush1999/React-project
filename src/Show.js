import React,{Component} from 'react';
import { NavLink,Route } from 'react-router-dom';
import './style.css'
import tabs from './tabs';
import Data from './Data'


export default class Show extends Component{
render(){
let a= this.props.subtabs.map(val=>{
  return (
  <Data names={val.name} />
  )
})

return(
    <div>
     <h1>{this.props.name}</h1>
     <ul>{a}</ul>
     </div>
)
}
}