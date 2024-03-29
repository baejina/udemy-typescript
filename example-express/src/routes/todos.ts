import { Router } from 'express';
import { createdTodo, deleteTodo, getTodos, updateTodo } from "../controller/todos";

// 원래는 아래 코드처럼 쳐 commonJs 구문임.
// const express = require('express');
// const Router = express.Router;

const router = Router(); // 미들웨어 등록. 엔드포인트 요청 수신, 로직 실행가능

router.post('/', createdTodo);

router.get('/', getTodos);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
