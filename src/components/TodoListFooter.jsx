import * as React from "react";


class TodoListFooter extends React.Component {
    render = () => {

        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";

        return (
            <div className="todoList-footer">
                <button onChange={() => {}} className={classForAll}>All</button>
                <button onChange={() => {}} className={classForCompleted}>Completed</button>
                <button onChange={() => {}} className={classForActive}>Active</button>
            </div>
        )
    }
}

export default TodoListFooter;