---
layout  : wiki
title   : c언어 sizeof 연산자 
summary : c언어 sizeof 연산자 사용법
date    : 2020-07-29 16:11:41 +0900
updated : 2020-08-04 16:42:34 +0900
tags    : [clang]
---

자료형이 차지하는 메모리의 크기를 반환

sizeof는 함수와 유사하게 사용될 수 있지만, 연산자이다.

ex) 1. 기본 자료형
```c
int main() 
{
    // 3가지 모두 동일
    int a = 0;
    unsigned int int_size1 = sizeof a;
    unsigned int int_size2 = sizeof(int);
    unsigned int int_size3 = sizeof(a);
    
    // 기본적으로 unsigned int 이지만, 시스템 따라 상이 할 수 있다.
    // 이식성을 높이기 위해서 사용한다.
    size_t int_size4 = sizeof(a);
    size_t float_size1 = sizeof(float);
    
    // size_t는 변환 지정자 zu를 사용
    printf("%zu\n", int_size4);
    
    return 0;
}
```

ey) 2. 정수 배열
```c
int main() 
{
    int int_arr[30];
    // int_ptr의 크기는 동적으로 변경될 수 있기 때문에 주소의 크기만을 가진다.
    int *int_ptr = NULL;
    int_ptr = (int*)malloc(sizeof(int) * 30);

    printf("%zu\n", sizeof(int_arr)); // 120
    printf("%zu\n", sizeof(int_ptr)); // 8
    return 0;
}
```


ez) 2. 문자 배열
```c
int main() 
{
    int int_arr[30];
    // int_ptr의 크기는 동적으로 변경될 수 있기 때문에 주소의 크기만을 가진다.
    int *int_ptr = NULL;
    int_ptr = (int*)malloc(sizeof(int) * 30);

    printf("%zu\n", sizeof(int_arr)); // 120
    printf("%zu\n", sizeof(int_ptr)); // 8
    return 0;
}
```
