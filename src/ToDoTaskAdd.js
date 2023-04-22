import React from 'react'


class ToDoTaskAdd extends React.Component {

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
            res.json()
        }).then((data) => {
            console.log('Added')
            console.log(data)
            this.props.onTaskAdd(data)
        })
    }

    render() {
        return (
            <form onSubmit={this.onAddFormSubmit}>
                <input type="text" value={this.state.name} onChange={this.onNameChange} placeholder='name' />
                <input type="text" value={this.state.desriptiion} onChange={this.onDesriptiionChange} placeholder='desriptiion' />
                <input type ="submit" />
            </form>
        )
    }
}

export default ToDoTaskAdd