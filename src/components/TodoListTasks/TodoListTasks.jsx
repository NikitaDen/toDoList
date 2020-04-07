import * as React from "react";
import TodoListTask from "./TodoListTask/TodoListTask";


class TodoListTasks extends React.Component {
    render = () => {
        return (
            <div className="todoList-tasks">
                {this.props.tasks.map(task => <TodoListTask key={task.id} task={task} changeTitle={this.props.changeTitle} changeStatus={this.props.changeStatus} priority={task.priority} title={task.title} isDone={task.isDone}/>)}
            </div>
        )
    }
}

export default TodoListTasks;