import React from "react"
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import ToDoTask from "./ToDoTask"

class ToDoList extends React.Component {
  render(){
    return (
      <div className="list">
        <div className="list-header-tab list-header">
          <div className="list-header-title">
            <i className="fa fa-tasks">
            </i>
            &nbsp;Task Lists
          </div>
        </div>
        
        <div className='scroll-area-sm '>
          <ul className="list-group list-group-flush">
          {
            this.props.tasks.map((task) => {
              return(
                <ToDoTask task={task}   key={task._id} />
              )
            })
          }
          </ul>
        </div>
        <div className="d-block text-right card-footer">
          <button className="btn btn-primary">
            <NavLink to='/add'>Add task </NavLink>
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    tasks: [...state.tasks]
  }
}

export default connect(mapStateToProps) (ToDoList);
