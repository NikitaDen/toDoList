import * as React from "react";


class TodoListFooter extends React.Component {
    state = {
        isHidden: false,
        filterValue: 'All'
    };

    onHideFiltersClick = () => {
        this.setState({isHidden: true})
    };

    onShowFiltersClick  = () => {
        this.setState({isHidden: false})
    };

    render = () => {
        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";

        return (
            <div className="todoList-footer">

                {this.state.isHidden ? <span onClick={this.onShowFiltersClick}>show</span> :
                    <>
                    <button onClick={() => {this.props.changeFilter("All")}} className={classForAll}>All</button>
                    <button onClick={() => {this.props.changeFilter("Completed")}} className={classForCompleted}>Completed</button>
                    <button onClick={() => {this.props.changeFilter("Active")}} className={classForActive}>Active</button>
                    <span onClick={this.onHideFiltersClick}>hide</span>
                    </>
                }
            </div>
        )
    }
}

export default TodoListFooter;