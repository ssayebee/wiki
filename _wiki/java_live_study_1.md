---
layout  : wiki
title   : 자바 라이브 스터디 1주차
summary : 자바 소스 파일(.java)을 JVM으로 실행하는 과정 이해하기
date    : 2020-11-08 23:13:50 +0900
updated : 2020-11-15 19:05:35 +0900
tags    : [java]
comments: true
---

## 목표
자바 소스 파일(.java)을 JVM으로 실행하는 과정 이해하기.

## 학습할 것

### 1. JVM이란 무엇인가

**JVM(Java Virtual Machine)란?**

**자바 바이트코드를 실행할 수 있는 주체이다.**

- JVM은 운영체제에 종속적이다.
- JVM 위에서 돌아가는 Java Class 파일은 운영체제에 독립적이다.

### 2. 컴파일 하는 방법

**컴파일(Compile)이란?**

`Hello.java` 자바로 작성 된 파일을 JVM이 이해할 수 있는 `Hello.class` 파일로 변환
하는 작업을 말한다.

1. JDK(Java Development Kit)을 설치한다.
2. JDK의 bin 디렉토리를 path에 추가한다.
3.  
```zsh
javac Hello.java
```
4. `Hello.class` 파일이 생성된다.

### 3. 실행하는 방법

```zsh
java Hello
```

### 4. 바이트코드란 무엇인가

**바이트코드란?**

- 하나의 명령어가 1byte로 구성되어 있기 때문에 바이트코드라고 부른다.
- JVM이 이해할 수 있는 코드를 말한다.

자바 파일은 Java Compiler를 통해서 바이트코드로 변환되고, 해당 바이트코드를 JVM이 
실행하는 과정으로 자바로 작성된 프로그램이 동작한다. 따라서 다른 언어로 작성되어 있는 
코드도 바이트코드로 변환할 수 있으면, JVM 위에서 동작 할 수 있다. ex) Kotlin, Groovy, Scala

```zsh
javap -c Hello.class
```
위의 명령어로 자바 클래스 파일을 바이트코드로 확인 할 수 있다.


### 5. JIT 컴파일러란 무엇이며 어떻게 동작하는지

**들어가기 전에**

컴파일을 하는 방법은 인터프리트 방식과 정적 컴파일 방식이 있다.

인터프리트 방식은 실행 시 한줄씩 코드를 기계어로 변경해 실행하는 방법을 말하고, 정적 컴파일 
방식은 실행하기 이전에 미리 프로그램 코드를 기계어로 변경하는 것을 의미한다.

**JIT 컴파일러란?**

JIT 컴파일(just-in-time compilation)또는 동적 번역은 프로그램을 실제 실행하는 시점에 
기계어로 번역하는 컴파일 기법이다.


JIT 컴파일러는 정적 컴파일 방식과 인터프리터 방식을 혼합한 방식으로 볼 수 있다. 
인터프리터 처럼 한줄씩 실행하지만, 자주 사용되는 명령어를 캐싱하여, 다음 해당 코드가 
재사용이 되면, 캐싱된 기계어를 실행하는 방식으로 보다 효율을 높인다.


### 6. JVM 구성 요소

**JVM은 크게 아래 3개로 분류할 수 있다.**

- Class Loader
- Runtime Data Area
- Execution Engine (JIT, GC)

**1. Class Loader란?**

Runtime 시점에 Class를 로딩할 수 있게 해주는 기술을 말한다. 각각의 클래스가 한번에 
메모리에 올라가는 것이 아니라, 필요할 때 동적으로 메모리에 올라갈 수 있게 해준다.

**2. Runtime Data Area란?**

JVM이 프로그램을 수행하기 위해서, OS로 부터 할당받는 메모리 영역을 말한다.

**3. Execution Engine이란?**

로드된 Class의 바이트코드를 실행하는 모듈을 말한다.

### 7. JDK와 JRE의 차이

**JDK(Java Development Kit) 자바 개발도구**

자바 개발을 위해 필요한 도구

**JRE(Java Runtime Environment) 자바 실행환경**

자바 프로그램을 실행할 수 있는 환경

### 8. 추가 학습 내용

JDK 14버전으로 컴파일한 class 파일을 JDK8로 실행 할 수 있을까?

-> UnSupportedClassVersion Error 발생

반대로 JDK8 버전으로 컴파일된 파일을 JDK 14로 실행 할 수 있을까?

-> YES

14버전으로 컴파일한 class 파일을 JDK8로 실행하려면?

컴파일시 `-source`, `-target` 옵션을 이용한다.


## Reference
- <https://github.com/whiteship/live-study/issues/1>
