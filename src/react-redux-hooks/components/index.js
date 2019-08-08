import React from 'react';
import CounterContainer from "../containers/CounterContainer";
import TodoListContainer from "../containers/TodoListContainer";


const RootComponent = () => {
    return (
        <div>
            <h2>react-redux-hooks</h2>
            <TodoListContainer />
            <hr/>
            <CounterContainer />
        </div>
    );
};


export default RootComponent;
