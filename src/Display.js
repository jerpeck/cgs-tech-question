import React, { Component } from 'react';
import changeString from './changeString';

class Display extends Component{
    constructor(props){
        super(props);
        this.state = {
            typedText: '',
            displayedText: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(evt){
        this.setState({
            typedText: evt.target.value,
            displayedText: changeString(evt.target.value)
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.displayedText}</h1>
                <form>
                    <input
                        type='text'
                        value={this.state.typedText}
                        onChange={this.handleChange}
                        placeholder='Type Text Here'
                    ></input>
                </form>
            </div>
        )
    }
}

export default Display;