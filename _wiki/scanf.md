---
layout  : wiki
title   : c언어 scanf
summary : c언어 scanf의 데이터 타입 지정자
date    : 2020-07-31 18:33:55 +0900
updated : 2020-08-04 16:42:58 +0900
tags    : [clang]
---

# c언어 scanf


| 수식어        | 의미                                            |
|---------------|-------------------------------------------------|
| `*`           | 무시                                            |
| `number`      | 입력받을 최대 길이                              |
| `hh`          | 정수를 signed char or unsigned char로 읽음      |
| `ll`          | 정수를 long long or unsigned long long으로 읽음 |
| `h`, `l`, `L` | %hd(%hi) -> short int ...                       |
| `z`           | sizeof 연산자의 반환값의 자료형                 |

**주의! printf는 double과 float 모두 f를 사용해도 되지만, scanf에선 lf, f로 구분해서 받아야함.**
