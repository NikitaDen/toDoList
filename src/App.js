import React from 'react';
import './App.css';
import TodoListHeader from "./components/TodoListHeader";
import TodoListTasks from "./components/TodoListTasks/TodoListTasks";
import TodoListFooter from "./components/TodoListFooter";

class App extends React.Component {
    state = {
        tasks: [],
        filterValue: 'All',
    };

    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('our-state', stateAsString);
    };

    restoreState = () => {
        let state = {
            tasks: [],
            filterValue: 'All',
        };
        let stateAsString = localStorage.getItem('our-state');

        if (stateAsString !== null) {
            state = JSON.parse(stateAsString);
            this.newTaskId = state.tasks[state.tasks.length - 1].id + 1;
        } else {
            this.newTaskId = 0;
        }
        this.setState(state);
    };

    addTask = (newTitle) => {
        let task = {
            id: this.newTaskId,
            title: newTitle,
            isDone: false,
            priority: 'low',
        };
        this.newTaskId++;
        let newTasks = [...this.state.tasks, task];
        this.setState({tasks: newTasks}, () => this.saveState());
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue,
        })
    };

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(item => {
            if (item.id !== taskId) {
                return item;
            }
            return {...item, ...obj}
        });

        this.setState({
            tasks: newTasks
        }, () => this.saveState())
    };

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone});
    };

    setNewText = (e) => {
        let text = e.currentTarget.value;
        this.setState({text});
    };

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title})
    };

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader setNewText={this.setNewText} text={this.state.text} addTask={this.addTask}/>
                    <TodoListTasks changeTitle={this.changeTitle} changeStatus={this.changeStatus}
                                   tasks={this.state.tasks.filter(task => {
                                       return (this.state.filterValue === "All" && true)
                                           || (this.state.filterValue === "Completed" && task.isDone)
                                           || (this.state.filterValue === "Active" && !task.isDone);
                                   })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

