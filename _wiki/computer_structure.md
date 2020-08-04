---
layout  : wiki
title   : 현대적 컴퓨터 구조
summary : 현대적 컴퓨터구조에 대한 간단한 정리
date    : 2020-07-21 16:43:09 +0900
updated : 2020-08-04 16:45:46 +0900
tags    : [cs]
---

폰노이만이 제시한 Stored-Program 방식을 채택하여 사용중이다.
현대적 프로그래머 관점으로는 연산기능과 기억 장치가 분리 되어있고, 통신하면서 일은 해나간다.
모든 프로그램은 실행되기 전에 메모리에 적재되어야 한다는 것이 기본 개념이다.

CPU(Central Processing Unit)는 Control Unit과 Arthimetic/ Logic Unit으로 분리 되어있다.

해당 구조에서 조금 더 발전해서 아래의 구조로 현대 컴퓨터는 구성되어있다.
CPU, Memory, Input And Output가 직접 통신하지 않고 System Bus를 이용하여 통신하게 된다.
System Bus는 (Control Bus, Address Bus, Data Bus)로 구성되어 있다.

