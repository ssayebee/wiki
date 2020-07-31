---
layout  : wiki
title   : Arrow Function
summary : 
date    : 2020-07-21 22:27:53 +0900
updated : 2020-07-31 15:36:37 +0900
tags    : [js, es6]
toc     : true
public  : true
parent  : 
latex   : false
---

# Arrow Function

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
