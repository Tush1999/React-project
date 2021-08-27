import React,{Component} from 'react';
import tabs from './tabs';
import Show from './Show'
export default class Learn extends Component{
    render()
    { 
        const name = this.props.name.match.params.name;
        for(let value of tabs)
        {
           if(value.name.toLowerCase()===name.toLowerCase())
           {
                 var subtabs=value.subTabs
           }
    
        }
         return(
             <Show name={name} subtabs={subtabs}/>
         )
    }
}
