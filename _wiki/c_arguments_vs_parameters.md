---
layout  : wiki
title   : Arguments VS Paramemters
summary : Arguments ? Paramemters ?
date    : 2020-08-12 18:40:09 +0900
updated : 2020-08-12 19:02:52 +0900
tags    : [terms, c]
comments: true
---

## Arguments vs Paramemters

### Arguments (인수)
* Values를 의미 한다.

### Paramemters (매개변수)
* Variables를 의미 한다.

아래의 C언어 코드를 통해서 살펴보자.

```c
#include <stdio.h>

void draw(int n); // ANSI function prototype declaration

int main() {
  int i = 5;
  
  draw(i); // Argument
  
  return 0;
}

void draw(int n) { // Paramemter
  while(n-- > 0)
    printf("#");
  printf("\n");
}
```

* `void draw(int n)`의 `(int n)`는 변수, 즉 n은 어떠한 값이 들어와도 수행 할 수 있다.
이를 function `draw`가 변수 n에 대해서 `Paramemterzation` 되어 있다고 표현하기도 한다.
* `main` 함수에서 `draw(i);` 호출하는 시점에서 i는 5즉 값을 의미한다.
따라서 함수를 호출하는 측면에서 볼 때는 값(Value) 즉, Argument 라고 한다.
