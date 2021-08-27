import React, { Component } from "react";
import "./style.css"


export default class Data extends Component {
  constructor(props){
    super(props)
    this.state={active:false,count:0}
  }
  handleClick=()=>{
    this.setState({count:this.state.count+1})
  }
  render() {
    console.log(this.props.names);
    return (
        <div>
        <li className={this.state.count%2!==0?"select": null}
        onClick={this.handleClick}>{this.props.names}</li>
  
        {this.state.count%2!==0?(<p>tushar bansal is a good boy and what about you</p>):""}
        </div>
    );
  }
}
