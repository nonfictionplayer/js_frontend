import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { todoAdd } from './actions';

class ToDoTaskAddInner extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            desriptiion: ""
        }
        this.onNameChange = this.onNameChange.bind(this)
        this.onDesriptiionChange =this.onDesriptiionChange.bind(this)
        this.onAddFormSubmit=this.onAddFormSubmit.bind(this)
    }

    onNameChange(e){
        e.preventDefault()

        this.setState({
            name: e.target.value
        })
    }

    onDesriptiionChange(e){
        e.preventDefault()

        this.setState({
            desriptiion: e.target.value
        })
    }

    onAddFormSubmit(e){
        e.preventDefault()
        
        fetch(`tasks`, {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                desriptiion: this.state.desriptiion
            }),
            headers:{
                'Content-Type': 'application/json'
            } 
        }).then((res)  => {
            return res.json()
        }).then((data) => {
            this.props.dispatch(todoAdd(data._id, data.name, data.desriptiion))
            this.props.history("/")
        })
    }

    render() {
        return (
            <div className="Add">
                <div className="list-header-tab list-header">
                    <div className="list-header-title">
                        <i className="fa fa-tasks">
                        </i>
                        &nbsp;Add Task 
                    </div>
                </div>
                
                <form onSubmit={this.onAddFormSubmit} className="add-main">
                    <div className='form-groups'>
                    <input type="text" value={this.state.name} onChange={this.onNameChange} placeholder='name' className='form-group' />
                    <input type="text" value={this.state.desriptiion} onChange={this.onDesriptiionChange} placeholder='description' className='form-group'/>
                    <button className='add-btn'>Add</button>
                    </div>
                </form>
                <div className="d-block text-right card-footer">
                    <button className="btn btn-primary">
                        <NavLink to='/'>Bact to list</NavLink>
                    </button>
                </div>
            </div>
        )
    }
}

const ToDoTaskAdd = (props) => {
    return(
        <ToDoTaskAddInner {...props} history={useNavigate()} />
    )
}
export default connect() (ToDoTaskAdd)