---
layout  : wiki
title   : 블로킹(Blocking) vs 논블로킹(Non-Blocking)
summary : 블로킹과 논블로킹의 차이에 대한 정리
date    : 2020-07-22 00:20:10 +0900
updated : 2020-07-31 18:00:10 +0900
tags    : [terms, cs]
comments: true
---

## 1. Blocking VS Non-Blocking

**직접 제어할 수 없는 대상을 처리**하는 방법에 따라 나눈다. 직접 제어할 수 없는 
대상은 대표적으로 **IO, 멀티쓰레드 동기화**가 있다.

## 2. Blocking

Blocking은 직접 제어할 수 없는 대상의 작업이 끝날 때까지 제어권을 넘겨주지 않는 것
이다.

## 3. Non-Blocking

Non-Blocking은 직접 제어할 수 없는 대상의 작업 처리 여부 상관 없이 제어권을 넘겨 받을 
수 있다.
