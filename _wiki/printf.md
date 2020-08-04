---
layout  : wiki
title   : c언어 printf
summary : c언어 printf 함수에 대한 정리
date    : 2020-07-31 15:45:20 +0900
updated : 2020-07-31 18:32:53 +0900
tags    : [clang]
---

## 형식 지정자

**printf의 함수는 다음과 같이 구성된다.

`%[flag][width][.precision][length]specifier`


| flags | 설명                                   |
|-------|----------------------------------------|
| `-`   | 출력 시 왼쪽, (width와 함께 사용)      |
| `+`   | 부호를 항상 출력                       |
| ` `   | 양수 일때, 빈칸을 출력                 |
| `#`   | 8, 16진수 일때, 0, 0x를 같이 출력      |
| `0`   | width가 있을때, 남는 자리를 0으로 채움 |

| width      | 설명                             |
|------------|----------------------------------|
| `(number)` | 해당 크기만큼 자리를 차지        |
| `*`        | width값의 param으로 받을 수 있음 |

| .precision  | 설명                                      |
|-------------|-------------------------------------------|
| `.(number)` | 정밀도 조정, 숫자 자릿수 만큼 정밀도 보장 |
| `.*`        | precision값을 param으로 받을 수 있음      |

length: 데이터 타입의 길이 표기: `(none)`, `hh`, `h`, `l`, `ll`, `j`, `z`, `t`, `L`

specifier: length와 조합하여 사용됨


| specifier       | 설명                    |
|-----------------|-------------------------|
| d i             | 정수 표기               |
| u o x X         | unsigned, 8진수, 18진수 |
| f F e E g G a A | 소수 표기, 지수로 표기  |
| c               | 문자 표기               |
| s               | 문자열 표기             |
| p               | 포인터 값을 16 진수     |

ex) ```c printf("%+10.5hi", 256); ```

* `+`: 부호를 항상 표시
* `10`: 총 10칸의 너비를 차지
* `.5`: 소수 5자리 까지 표기
* `hi`: short int 데이터 타입의 크기

## printf가 인자를 해석하는 과정

```c
float n1 = 3.14; // 4bytes
double n2 = 1.234; // 8bytes
int n3 = 1024; // 4bytes

// err
printf("%d %d %d\n", n1, n2, n3);
// 정상 출력
printf("%f %f %d\n", n1, n2, n3);
```

1. n1이 double(8bytes)로 변환되고(printf에서 float는 출력전 double로 변환됨), n1, n2, n3가 stack 메모리의 바닥에 저장됨
  * 스택에는 n1(8bytes), n2(8bytes), n3(8bytes)가 차례대로 저장되어 있음
2. printf %d %d %d가 해석될때, 4bytes, 4bytes, 4bytes 씩 밑에서 읽어나가기 떄문에 의도치 않게 동작
  * n1의 절반, 나머지 절반, n2의 절반만 출력됨
