import * as React from "react";

class TodoListTask extends React.Component {
    state = {
        editMode: false,
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
    };

    onIsDoneChanged = () => {
        this.props.changeStatus(this.props.task.id, !this.props.isDone);
    };

    onTitleChanged = (e) => {
        let title = e.target.value;
        this.props.changeTitle(this.props.task.id, title)
    };

    render = () => {
        return (
            <div className={this.props.isDone ? "todoList-task done" : "todoList-task"}>
                <input type="checkbox" onChange={this.onIsDoneChanged} checked={this.props.isDone}/>
                {
                    this.state.editMode
                        ? <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} value={this.props.title} type="text"/>
                        : <span onClick={this.activateEditMode}>{this.props.task.id} - {this.props.title}</span>
                }, {this.props.priority}
            </div>
        )
    }
}

export default TodoListTask;