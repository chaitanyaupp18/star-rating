import React from 'react'

import { Component } from 'react'

class event extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"",
             count:0
        }
    }
    changeHandler()
    {
        this.setState({
            count:this.state.count+1,
            message: this.state.count%2==0?'':''
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={()=>this.changeHandler()}>Click Me</button>
            </div>
        )
    }
}

export default event


