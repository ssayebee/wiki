---
layout  : wiki
title   : c언어 변수와 상수
summary : 
date    : 2020-07-28 14:52:39 +0900
updated : 2020-07-31 15:31:49 +0900
tags    : [clang]
toc     : true
public  : true
parent  : 
latex   : false
---

# Variable Constant

ex)
```c
const int angel = 1004;
```

| const          | int       | angel             | 1004             |
|----------------|-----------|-------------------|------------------|
| 한정자, 제한자 | 자료형    | 기호적 상수       | 리터럴 상수      |
| qualifier      | data type | symbolic constant | literal constant |

literal constant: 문자 그대로의 값을 갖는다는 의미
symbolic constant: 제한자(const)를 붙인 경우, 해당 변수(angel)은 변경될 수 없음
