import React, {Component } from "react";
import PropTypes from 'prop-types';

export class AddTodo extends Component{
    state = {
        title:""
    }

    onSubmit= (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:""})
    }
    onChange = (e) => this.setState({title:e.target.value});

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input
                    value={this.state.title}
                    onChange={this.onChange}
                    style = {{padding:"10px ", width:"50%"}}
                    type="text"
                    name="title"
                    placeholder="Add Todo item">
                    
                </input>
                <input 
                    type="submit" 
                    value="submit" 
                    className="btn">
                    
               
                    </input>
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo:PropTypes.object.isRequired,
     
} 

export default AddTodo;