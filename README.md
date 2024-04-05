# sparta_overflow

## 과제 설명

사용자가 질문을 작성하고, 답변하며, 답변을 채택할 수 있는 Q&A API를 구현하였습니다.
스파르타 내배캠 복습주차 과제입니다.

## 개발 기간

2023.12.20 ~ 2023.12.27

## 기술 스택

Java Script, Node.js, 웹 프레임워크(Express), 패키지 매니저(npm), 모듈 시스템(ES6), 데이터베이스(AWS RDS, MySQL), ORM(Prisma)

# 설계

## 환경변수

- .env 파일에 어떤 환경변수가 추가되어야 하는지 작성합니다.
- key=value 형태에서 key만 나열합니다. value는 비밀!

- SERVER_PORT: 서버 포트 번호
- DATABASE_URL: Prisma 사용을 위한 DB URL
- JWT_ACCESS_TOKEN_SECRET: JWT AccessToken 암호키

## 실행 방법

```
npm install
nodemon src/app.js
```

## API 명세서 URL

https://docs.google.com/spreadsheets/d/1e7bEmcsWuuaoEu5K1YQPIv_rxnzcbANJr9xyNpkLpHw/edit?usp=sharing

## ERD URL

https://drawsql.app/teams/test-2154/diagrams/sparta-overflow

