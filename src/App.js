import React from 'react';
import './App.css';
import TodoListHeader from "./components/TodoListHeader";
import TodoListTasks from "./components/TodoListTasks/TodoListTasks";
import TodoListFooter from "./components/TodoListFooter";

class App extends React.Component {
    tasks = [
        {title: 'JS', isDone: true, priority: 'medium'},
        {title: 'HTML', isDone: false, priority: 'low'},
        {title: 'CSS', isDone: false, priority: 'low'},
        {title: 'ReactJS', isDone: true, priority: 'high'},
    ];

    filterValue = 'Completed';

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader/>
                    <TodoListTasks tasks={this.tasks}/>
                    <TodoListFooter filterValue={this.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

