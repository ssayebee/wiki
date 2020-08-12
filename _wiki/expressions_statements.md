---
layout  : wiki
title   : Expressions vs Statements
summary : C언어 Expressions, Statements 용어 정리
date    : 2020-08-10 21:57:29 +0900
updated : 2020-08-12 15:25:11 +0900
tags    : [terms, clang]
comments: true
---

## Expressions vs Statements

### 1. Expressions(표현식)

| 표현식          | 값                       |
|-----------------|--------------------------|
| 4               | 4                        |
| -6              | -6                       |
| 4 + 21          | 25                       |
| q = 5 * 2       | 10                       |
| 3 + (c = 1 + 2) | 6                        |
| 2 > 1           | 1                        |
| 2 < 1           | 0                        |
| a               | a의 값                   |
| x = ++q % 3     | q의 값에 의해서 결정     |
| q > 3           | q의 값에 의해서 결정     |
| a * (b / c + d) | a, b, c, d의 의해서 결정 |

### 2. Statements(문장)
```c
int x, y; // declarations statement
x = 1; // assignment statement
; // null statement
x = 1 + (y + 5); // y + 5, is subexpression

while(x++ < 10) // while statement (structured statements)
  y = x + y;

printf("%d", x); // function statement

return 0; // return statement
```

### 3. Side Effect & Sequence Points

```c
x = 4; // main intent is evaluating expressions
y = 1 ++ x++;

while (x++ < 10) // (x++ < 10) is full expression.
  printf("%d\n", x);
  
y = (4 + x++) + (6 + x++); // Not (4 + x++) nor (6 + x++)  is full expression.
```

* 대부분의 경우 증감연산자는 `;`을 만나면 계산이 이뤄진다고 생각하면 되지만 (`while`, `if`)등의 경우,
`()` full expression, 즉 괄호가 끝나는 시점에 연산이 이뤄진다.
* (4 + x++), (6 + x++)는 계산 시점이 모호한 표현이기 때문에, 컴파일러 마다 상이 할 수 있다.


**되도록 한 Statement에 증감연산자를 두번 이상 사용하지 말자.**
