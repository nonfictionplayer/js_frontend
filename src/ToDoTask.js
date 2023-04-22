import React from 'react'


class ToDoTask extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            done: this.props.task.done
        }

        this.onStatusClick = this.onStatusClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this)
    }
    
    onStatusClick(e) {
        e.preventDefault()

        fetch(`tasks/${this.props.task._id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                done: !this.state.done
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res)  => {
            if(res.status === 200) {
                console.log('Update')
                this.setState({
                    done: !this.state.done
                })
            }
            else {
                console.log('Not delete')
            }
        })
    }

    onDeleteClick(e) {
        e.preventDefault()

        fetch(`tasks/${this.props.task._id}`, {
            method: 'DELETE'
        }).then((res)  => {
            if(res.status === 200) {
                console.log('Delete')
                this.props.onTaskDelete(this.props.task._id)
            }
            else {
                console.log('Not delete')
            }
        })
    }

    render() {
        return ( 
           <li>
                <span>{this.props.task.name} </span>
                <span>{this.props.task.desriptiion} </span>
                <span onClick={this.onStatusClick}>{this.state.done ? 'Done' : 'Todo'} </span>
                <button onClick={this.onDeleteClick}>Delete</button>
           </li>
        )
    }
}

export default ToDoTask