---
layout  : wiki
title   : c언어 scanf
summary : c언어 scanf 사용법 및 데이터 지정자
date    : 2020-07-31 18:33:55 +0900
updated : 2020-08-14 19:07:42 +0900
tags    : [clang]
comments: true
---


| 수식어        | 의미                                            |
|---------------|-------------------------------------------------|
| `*`           | 무시                                            |
| `number`      | 입력받을 최대 길이                              |
| `hh`          | 정수를 signed char or unsigned char로 읽음      |
| `ll`          | 정수를 long long or unsigned long long으로 읽음 |
| `h`, `l`, `L` | %hd(%hi) -> short int ...                       |
| `z`           | sizeof 연산자의 반환값의 자료형                 |

**주의! printf는 double과 float 모두 f를 사용해도 되지만, scanf에선 lf, f로 구분해서 받아야함.**

## scanf의 반환 값

scanf는 입력받은 인자의 갯수를 반환한다.

이걸 응용하면 아래와 같이 사용할 수 있다.

```c
#include <stdio.h>

int main(int argc, char *argv[])
{
    int num, sum = 0;

    printf("Enter in integer (q to quit) : ");
    
    // 문자열 'q'를 입력 할 경우, 0을 반환한다. 숫자의 경우 1
    while (scanf("%d", &num) == 1) {
    
        sum += num;
        
        printf("Enter in next integer (q to quit) : ");
    }

    printf("Sum : %d\n", sum);

    return 0;
}
```
