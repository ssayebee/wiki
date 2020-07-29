---
layout  : wiki
title   : floating point
summary : 
date    : 2020-07-28 16:23:22 +0900
updated : 2020-07-28 16:27:28 +0900
tags    : 
toc     : true
public  : true
parent  : 
latex   : false
---

# floating point

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
