---
layout  : wiki
title   : c언어 부동 소수점
summary : c언어에서 실수형 타입이 차지하는 비트 수
date    : 2020-07-28 16:23:22 +0900
updated : 2020-08-04 16:41:33 +0900
tags    : [clang]
---

## 32 bit Single Precision

용어 설명
sign bit: 부호를 표현하기 위한 비트
exponent bit: 지수를 표현하기 위한 비트
fraction bit: 분수를 표현하기 위한 비트

float a = 1.234f;
sign(1bit) + exponent(8 bits) + fraction(23 bits)

## 64 bit Single Precision

double pi = 3.141592;
sign(1bit) + exponent(11 bits) + fraction(52 bits)
