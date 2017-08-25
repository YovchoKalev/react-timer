import React from 'react';


export default class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {val: ''};
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        if(this.props.name==='hours'){
            this.setState({val: e.target.value}, function () {
                this.props.getHours(this.state.val)
            });
        }
        else if(this.props.name==='minutes'){
            this.setState({val: e.target.value}, function () {
                this.props.getMinutes(this.state.val)
            });
        }
        else if(this.props.name==='seconds'){
            this.setState({val: e.target.value}, function () {
                this.props.getSeconds(this.state.val)
            });
        }



    }
    render(){
        let thisVal = this.state.val;
        return (
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.name}</label>
                <input onChange={this.handleChange} value={thisVal} id={this.props.name} type="text"/>
            </div>
        )
    }
}