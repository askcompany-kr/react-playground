import React from 'react';

// FIXME: Reacdt.useMemo 사용
const TodoItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, done } = todo;

    return (
        <li style={{
            textDecoration: done ? 'line-through': 'none'
        }}>
            <span onClick={() => onToggle(id)}>{text}</span>{' '}
            <button onClick={() => onRemove(id)}>삭제</button>
        </li>
    );
};


// FIXME: Reacdt.useMemo 사용
const TodoItems = ({ todos, onRemove, onToggle }) => (
    todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
    ))
);


const TodoList = ({ todos, input, onRemove, onToggle, onChange, onSubmit }) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={input} onChange={onChange} />
                <button type="submit">추가</button>
            </form>
            <ul>
                <TodoItems todos={todos} onRemove={onRemove} onToggle={onToggle} />
            </ul>
        </div>
    );
};


export default TodoList;
