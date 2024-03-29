// 이렇게 쓸수도 있지만 RequestHandler 사용하면 자동으로 타입스크립트에서 인식해
// import { Request, response, NextFunction } from "express";

import { RequestHandler } from "express"; 
import { Todo } from "../models/todo";

// 메모리에서만 todos를 관리해. 서버 내리면 사라지지만... 필요하면 DB연결하셈
const TODOS: Todo[] = [];

// 아래 2개는 같은건데, 간편하게 쓰려고 RequestHandler를 export에서 가져옴.
// export const createTodo = (req:Request, res:Response, next:NextFunction) => {}; 
export const createdTodo: RequestHandler = (req, res, next) => {
    // 객체를 하나 맨들고, 블루 프린트 모델을 만들어보자! //model/todos.ts
    // const text = req.body.text; // 이렇게 하면 any로 들어와서 타입스크립트가 string인지 알수가 없어(정의한 값은 string임)
    const text = (req.body as {text: string}).text; // 이렇게 변환해줘.
    const newTodo = new Todo(Math.random().toString(), text);
    
    TODOS.push(newTodo);

    // controller 응답받아야징
    res.status(201).json({ message: 'Created the todo.', createdTodo: newTodo});
};


export const getTodos: RequestHandler = (req, res, next) => {
    res.json({todos: TODOS});
}

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
    const todoId = req.params.id;
  
    const updatedText = (req.body as { text: string }).text;
  
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
  
    if (todoIndex < 0) {
      throw new Error('Could not find todo!');
    }
  
    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
  
    res.json({ message: 'Updated!', updatedTodo: TODOS[todoIndex] });
  };
  
  export const deleteTodo: RequestHandler = (req, res, next) => {
    const todoId = req.params.id;
  
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
  
    if (todoIndex < 0) {
      throw new Error('Could not find todo!');
    }
  
    TODOS.splice(todoIndex, 1);
  
    res.json({ message: 'Todo deleted!' });
  };
  
