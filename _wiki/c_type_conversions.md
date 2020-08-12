---
layout  : wiki
title   : C언어 자료형 변환
summary : C언어 자료형 변환에 대한 정리
date    : 2020-08-12 18:02:44 +0900
updated : 2020-08-12 18:33:44 +0900
tags    : [clang]
comments: true
---

## 1. Promotion

**작은 자료형을 큰 자료형으로 변환**

```c
short s = 64;
int i = s;

float f = 3.14f;
double d = f;
```

해당 경우에는 문제가 발생하지 않는다.

## 2. Demotion

**큰 자료형을 작은 자료형으로 변환**

```c
d = 1.25; // 문제 없음
f = 1.25; // Warning !!!
f = 1.223; // Warning !!!
```

* C언어에서 `1.25`는 double, `1.25f`는 float 이다.
* `f = 1.25` **float** 자료형에 **double** 자료형을 할당하게 되면, 절삭(truncation)이 발생한다.

## 3. 자료형의 Ranking

1. `long double` > `double` > `float`
2. `unsigned long long` , `long long`
3. `unsigned long` , `long`
4. `unsigned` , `int`
5. `short int` , `unsigned short int`
6. `singed char` , `char` , `unsigned char`
7. `_Bool`

ex)
```c
d = d + 1.234; // 문제 없음
f = f + 1.234; /Warning !!!
```

* `f = f + 1.234`의 경우 `(f + 1.234)` Expession 값은 double이기 때문에 데이터 손실이 있을 수 있다.

## 3. Casting 연산자

```c
d = (double)3.14f;
i = 1.6 + 1.7; // 3
i = (int)1.6 + (int)1.7; // 2
```

* `(1.6 + 1.7)`을 계산 하면 3.3이고 해당 값은 i에 대입하면 절삭이 일어나 3이 된다.
* `(int)1.6 + (int)1.7`은 `(int)1.6` 절삭 1, `(int)1.7` 절삭 1이 되기 떄문에 합으로 결과는 2가 된다.
