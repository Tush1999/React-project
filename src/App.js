import './App.css';
import React,{Component} from 'react';
import {Route,Redirect} from "react-router-dom"
import tabs from './tabs'
import Introduction from './Introduction'
import Learn from './Learn'



export default class App extends Component{
render(){
return(
<>
<Introduction tabs={tabs} />
<Route path='/:name' render={(p)=><Learn name={p} />} />
<Redirect exact from="/" to="/Introduction" />

</>
)
}


}

