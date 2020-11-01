---
layout  : wiki
title   : Surrogate Key vs Natural Key
summary : Primary Key 지정에 대한 고민에 대한 기록
date    : 2020-10-28 15:41:15 +0900
updated : 2020-10-28 16:36:06 +0900
tags    : [DB]
comments: true
---

## 1. Surrogate Key란?

테이블을 이루는 컴럼들 가운데 유일하게 식별하기에 적합한 단일 후보키가 존재하지 
않을 때, 임의의 식별번호로 이루어진 후보키를 추가할 수 있는데 이를 대체키라고 하다.

### 대체키 사용의 단점

* Business적으로 의미가 없는 key이기 때문에 간단한 query라도 join이 필요해서 복잡성이 
증가한다.

## 2. Natural Key란?
테이블을 이루는 컬럼들 가운데 의미를 담고 있는 후보키

### 자연키 사용의 단점

* 아무리 고정 값의 필드를 자연키로 사용한다고 해도 대부분의 자연키는 언젠가 변할 수 
있다.
* 만약 자연키가 문자열 이라면, 숫자 보다 비교를 하는데에 시간이 더 걸린다.

## 3. 직면한 문제

**JPA**를 이용해서 Spring Boot로 개발을 진행하면서, 대부분의 테이블을 별 생각없이
`@GeneratedValue(strategy = GenerationType.IDENTITY)` 해당 어노테이션을 사용해서 
대체키를 이용해서 테이블을 만들었다.

`M:N`관계의 테이블을 만들어야하는 일이 생겼는데, 음.. 여기선 복합키를 사용해야하나? 
아니면 대체키를 만들어 사용해야하나 하는 부분에 대해서 의문이 생겼다.

추가적으로 다른 테이블에서도 이 테이블에서 굳이 대체키가 필요할까? 라는 고민을 하게 됐다.

### 3.1 GooGling(Stack Overflow)

**단일 대체키 VS 자연 복합 키**

#### Single Surrogate
* 모든 자식 테이블은 기본 키를 참조하기 위해서 단일 열만 필요로 한다.
* 외래 키로 모든 자식 테이블을 업데이트 할 필요 없이 테이블의 자연 키를 쉽게 업데이트 할 수 있다.
* 자연키 보다 더 많은 인덱스를 생성한다.

#### Natural Composite key
* 인덱스를 덜 생성한다.
* 불필요한 열이 없어진다.
* 시퀀스 생성기가 필요 없기 떄문에 레코드 삽입이 빠르다.
* 복합키 중 하나를 업데이트 하면 모든 하위 테이블도 업데이트 해야한다.

### 4. 요약
`복합키 VS 자연키` 사용에 대한 질문은 데이터베이스 설계에 있어서 자주 다뤄지는 고전적인 
주제라고 한다. 

* 상황에 따라 어떤 것을 사용하는게 나을지 고민이 필요하다.
* Stack Overflow 에서는 대체키 사용을 추천했다.




## Link

* <https://rampart81.github.io/post/surrogate_key_vs_natural_key/>
* <https://stackoverflow.com/questions/23850396/composite-vs-surrogate-keys-for-referential-integrity-in-6nf>
