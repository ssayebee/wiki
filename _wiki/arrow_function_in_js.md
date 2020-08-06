---
layout  : wiki
title   : JS 화살표 문법
summary : 함수를 표기하는 간단한 방법
date    : 2020-07-21 22:27:53 +0900
updated : 2020-08-04 16:39:55 +0900
tags    : [js, es6]
comments: true
---

- ES6에 도입
- 익명함수를 간단하게 만들 수 있다.

```jsx
const add = (a, b) => {
  return a + b;
  }
  // const add = (a, b) => a + b; 도 같은 의미

  const sum = add(1, 2);
  console.log(sum);
```
