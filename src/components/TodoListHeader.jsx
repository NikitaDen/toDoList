import * as React from "react";


class TodoListHeader extends React.Component {
    state = {
        error: false,
        title: '',
    };

    taskText = React.createRef();

    onAddTaskClick = () => {
        let newTitle = this.taskText.current.value;

        if (!newTitle) {
            this.setState({error: true});
        } else {
            this.taskText.current.value = '';
            this.setState({title: ''});
            this.props.addTask(newTitle);
        }
    };

    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input ref={this.taskText}
                           onKeyPress={(e) => {
                               if (e.key === 'Enter') this.onAddTaskClick();
                           }}
                           value={this.state.title}
                           onChange={(e) => {
                               this.setState({title: e.currentTarget.value});
                               this.setState({error: false})
                           }}
                           className={this.state.error ? 'error' : ''}
                           type="text" placeholder="New task name"/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        )
    }
}

export default TodoListHeader;