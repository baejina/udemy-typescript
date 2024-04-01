import React, { useState } from 'react';
/*
* 리덕스 쓰려고 설치는 했는데 실제로 타입스크립트 쓰려고 하면 리엑트가 모른다 함.
* 그럴때는 당황하지 말고 @types/설치한 패키지명 치면 되.
* 타입스크립에서 기본적으로 지원되지 않는 타입은 이렇게 ...
* */
// import { Route } from 'react-router-dom';

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo"
import { Todo } from './todo.model';


const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text: string) => {
        // 업데이트가 수행 됐을때 여기에 있는 todos값이 반드시 최신 상태라고 할순없엉.
        // 최신 상태를 보장하려면 상태 업데이트에 함수를 전달해야해.
        // 이전의 Todos를 받아서 최신 상태를 보장하려면 반드시 상태 업데이트 함수를 전달해야해.
        // 리엑 스냅샷 함수 prevTodos
        setTodos(prevTodos => [...prevTodos,
            { id: Math.random().toString(), text: text }
        ] );
        console.log(todos)
    }

    const todoDeleteHandler = ( todoId: string ) => {
        // let findTodo = todos.find(item => item.id === id);
        // if(findTodo) { todos.splice(findTodo, 1);}
        setTodos ( prevTodos => {
            // filter 자바스크립트 기본 메서드, 새 데이터 배열을 반환해.
            // 새 배열은 기존 배열에서 필더로 제거한 아이템을 제외한거.
            return prevTodos.filter(todo => todo.id !== todoId );
        })
    };

    return (
        <div className="App">
            <NewTodo onAddTodo={todoAddHandler} />
            <TodoList items={ todos } onDeleteTodo={todoDeleteHandler} />
        </div>
    );
}

export default App;
