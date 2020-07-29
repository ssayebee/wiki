---
layout  : wiki
title   : 고정 너비 자료형
summary : 
date    : 2020-07-28 17:27:01 +0900
updated : 2020-07-29 22:52:58 +0900
tags    : 
toc     : true
public  : true
parent  : 
latex   : false
---

# 고정 너비 자료형

c언의 자료형은 시스템 마다 상이 할 수도 있다.
이와 같은 문제점을 해결하기 위해서 고정 너비 자료형을 지원한다.

ex)
```c
#include <stdio.h>
#include <stdint.h>
#include <inttypes.h>

int main()
{
    int i;
    int32_t i32;                // 32 bit int
    int_least8_t i8;            // smallest 8 bit
    int_fast8_t f8;             // fastest minium
    intmax_t imax;              // biggest signed integers
    uintmax_t uimax;            // biggest signed integers
    
    i32 = 1004;
    
    printf("me32 = %d\n", i32);
    printf("me32 = %" "d" "\n", i32);
    printf("me32 = %" PRId32 "\n", i32);
    
    return 0;
}
```
