---
layout  : wiki
title   : Blocking vs Non-Blocking
summary : 
date    : 2020-07-22 00:20:10 +0900
updated : 2020-07-22 00:21:07 +0900
tags    : 
toc     : true
public  : true
parent  : 
latex   : false
---

# Blocking vs Non-Blocking
 
1. I/O 작업
  * 두 대 이상의 컴퓨터끼리 서로 네트워크 통해 통신을 한다고 가정할 때, I/O 작업은 User level 에서 직접 수행할 수 없고 Kernel level 에서 이루어짐.
  * 유저 프로세스(또는 스레드)는 커널에게 요청을 하고 작업 완료 후 커널이 반환하는 결과를 기다릴 뿐이다.

2. Blocking Model
  * 가자 기본적인 I/O 모델로, linux에서 모든 소켓 통신은 기본 blocking으로 동작한다.
  * I/O 작업이 진행되는 동안 유저 프로세스는 자신의 작업을 중단한 채 대기하는 방식이다.
  * 해당 어플리케이션은 다른 작업을 수행하지 못하고 대기하게 되므로 자원이 낭비된다.

3. Non-Blocking Model
  * I/O 작업이 진행되는 동안 유저 프로세스의 작업을 중단시키지 않는 방식이다.
  * 어플리케이션이 요청을 보내면 계속적으로 요청이 처리되었는지 확인하지만, 도중 다른 작업을 수행함.
  * 이 또한 요청이 처리되었는지 지속적으로 확인하기 때문에 자원 낭비라고 볼수 있음
