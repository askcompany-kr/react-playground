import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { changeInput, insert, toggleCheck, remove } from "../modules/todos";
import TodoList from "../components/TodoList";
import useActions from "../../hooks/useActions";


const TodoListContainer = () => {
    const { input, todos } = useSelector(state => state.todos, []);
    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggleCheck, remove]
    );

    const onChange = useCallback(e => {
        onChangeInput(e.target.value);
    }, [onChangeInput]);

    const onSubmit = useCallback(e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    }, [input, onChangeInput, onInsert]);   // input만 넣어도 되지만, eslint 권장에 따라 나머지 2개 추가

    return (
        <TodoList
            input={input}
            todos={todos}
            onChange={onChange}
            onSubmit={onSubmit}
            onToggle={onToggle}
            onRemove={onRemove}
            />
    );
};


export default TodoListContainer;
