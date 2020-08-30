---
layout  : wiki
title   : JS 내장 타입 
summary : JavaScript 내장 타입에 대한 정리
date    : 2020-08-10 00:38:28 +0900
updated : 2020-08-12 16:13:59 +0900
tags    : [js, es6]
comments: true
toc     : true
---

## 1. 내장 타입

자바스크립트에는 다음 7가지의 내장 타입이 있다.

* `null`
* `undefined`
* `boolean`
* `number`
* `string`
* `object`
* `symbol`(ES6 부터 추가!)

### 1.1 typeof 연산자

~~~js
typeof undefined === "undefined" // true
typeof true === "boolean" // ture
typeof Symbol() === "symbol" // true

typeof null === "object" // true ???
~~~

JS에서 타입은 **typeof** 연산자를 통해 확인 할 수 있다.

하지만, `null`은 **typeof** 연산자만을 가지고는 확인 할 수 없다.

처음에는 버그였지만, 웹의 역사에 따른 호환성 보장 문제 때문에,
`null` 체킹을 하기 위해서는, ~~괴랄한~~ 코드가 필요하다.

~~~js
var a = null;
(!a && typeof a === "object") // true
~~~

> 1. `null`은 falsy한 값이다.
> 2. `object`는 truthy한 값이다.
> 3. `null`의 **typeof**의 반환값은 `"object"`이다.

**+ 추가**

**typeof**는 위의 7가지 내장 타입 이외의 function 이라는 타입을 반환한다.
~~~js
typeof function a() { /* */ } === "function"
~~~

위의 결과 값을 보면, **function** 또한 내장 타입 처럼 보이지만, 명세에 따르면 실제로는 `object`의 '하위 타입'이다.

### 1.2 값은 타입을 가진다.

값에는 타입이 있지만, 변수엔 따로 타입이 없다. 변수는 언제라도, 다른 타입의 값을 가질 수 있다.

자바스크립트는 타입을 강제하지 않는다.
