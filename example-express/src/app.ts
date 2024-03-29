/*
 node에는 있는 코드지만 typescript는 이게 브라우저에서 사용할건지, 
 아닌지 알수 없지 그래서 설치
 $ npm install --save-dev @types/node

 app에 마우스 오버해보면 타입스크립트가 제대로 인식이 안되.
 여기서 추가 타입을 설치 해야 하는데 @types/express 익스프레스 관련 타입 설치 해야해.
    패턴임.
    타입스크립트 효과적으로 지원되도록 타입 패키지 설치법임.
*/ 

// const express = require('express');
// Node.js가 기본적으로 이용하는 commonJs임포트 구문임. 
// 근데 우리는 타입스크립트 환경에 있어서 다른 임포트 구문을 사용해야해.
import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import todoRoutes from './routes/todos';

const app = express();

app.use(json());

app.use('/todos', todoRoutes);

// body-parser
// 수신된 본문을 파싱해. 서드파티패키지에서 제공하는 이 body-parser가 json추출해서 
// body키를 파싱된 JSON데이타로 채우게 되.


// express.js에서 이용하는 일반적 미들웨어 함수임.
// 이 함수 대신 매개변수가 4개인 다른 함수를 사용할 수도 있어.
// 첫 번째 잠재적 오류, 오류 처리 미들웨어 함수임. 이 앞 다른 미들웨어에서 오류 발생시 
// 익스프레스가 자동으로 이 함수 실행해. 타입은 모두 any
app.use(( err:Error, req: Request, res: Response, next:NextFunction ) => {
    res.status(500).json({message: 'in app.ts : ' + err.message });
});

app.listen(3000);

