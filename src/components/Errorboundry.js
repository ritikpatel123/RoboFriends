import React, { Component } from "react";

class Errorboundry extends Component{
constructor(props){
super(props);
this.state ={
    haserror:false
}}

componentDidCatch(error, info){
    this.setState({haserror:true})

}


render() {
    if(this.state.haserror) {
        return <h1> Ooops something is going wrong</h1>
    }
    return  this.props.children
   
}
}

export default Errorboundry;