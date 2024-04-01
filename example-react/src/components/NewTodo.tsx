import React, { useRef } from 'react';

type newTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<newTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        console.log(enteredText);
        props.onAddTodo(enteredText);
    };

    return <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef} />
            <button type="submit">Add todo</button>
        </div>
    </form>
}


export default NewTodo;
