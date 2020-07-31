---
layout  : wiki
title   : 동기 vs 비동기
summary : 
date    : 2020-07-22 00:20:13 +0900
updated : 2020-07-31 15:39:31 +0900
tags    : [terms, cs]
toc     : true
public  : true
parent  : 
latex   : false
---

# 동기(Synchronous) vs 비동기(Asynchronous)

1. I/O 이벤트 통지 모델
  * 수신 버퍼나 출력 버퍼의 이벤트를 통지함을 의미
    - 수신 버퍼 이벤트 -> 입력 버퍼에 데이터가 수신되었다는 것을 알림
    - 출력 버퍼 이벤트 -> 출력 버퍼가 비었으니 데이터 전송이 가능한 상황을 알림

  * I/O 이벤트 통지 방식에 따른 동기/ 비동기 모델 분류
    - 유저 프로세스 -> 커널 [I/O 작업 요청]
    - 커널 -> 유저 프로세스 [I/O 작업 상황(결과) 반환]

2. 동기(Synchronous) Model
  * I/O 작업이 진행되는 동안 유저 프로세스는 결과를 기다렸다가 이벤트(결과)를 직접 처리하는 방식
    - 이 때 유저 프로세스는 blocking 방식 처럼 결과를 기다리거나, non-blocking처럼 커널에 계속 요청하는 방식으로 기다릴 수도 있다.

3. 비동기(Asychronous)
  * I/O 작업이 진행되는 동안 유저 프로세스를 신경 쓰지 않음, 이벤트 핸들러에 의해 전달된 알림만 처리하는 방식
  * 결국 notify를 커널이 담당하여 주체적으로 진행하며, 유저 프로세스는 수동적인 입장에서 통지가 오면 그 때 I/O 처리를 함.

4. 블로킹(Blocking), 논블로킹(Non-Blocking), 동기(Synchronous), 비동기(Asynchronous)
  * 블로킹(Blocking): I/O 작업 상황(결과) 기다림 O / 대기 큐 필수 stay O
  * 논블로킹(Non-Blocking): I/O 작업 상황(결과) 기다림 O / 대기 큐 필수 stay X
  * 동기(Synchronous): I/O 작업 상황(결과) 기다림 O / 대기 큐 필수 stay X
  * 비동기(Asynchronous) : I/O 작업 상황(결과) 기다림 X / 대기 큐 필수 stay X
