---
layout  : wiki
title   : 자바스크립트 객체
summary : 
date    : 2020-07-21 22:29:50 +0900
updated : 2020-07-31 15:36:47 +0900
tags    : [js, es6]
toc     : true
public  : true
parent  : 
latex   : false
---

# 자바스크립트 객체
 
## 4.1 객체 선언하기

```jsx
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};
const captainAmerica = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};
```

## 4.2 비구조화 할당

- 객체 내부의 값을 빼내어 사용

```jsx
function print(hero) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`
  console.log(text);
}

// 굳이 함수 내부에서 사용할 필요는 없음
function print({ alias, name, actor }) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`
  console.log(text);
}
```
