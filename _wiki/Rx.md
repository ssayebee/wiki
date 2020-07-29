---
layout  : wiki
title   : 
summary : 
date    : 2020-07-22 00:28:15 +0900
updated : 2020-07-22 00:30:30 +0900
tags    : 
toc     : true
public  : true
parent  : 
latex   : false
---

# 리액티브 스프링 분산처리 시스템

## Index
1. 왜 반응성이 필요한가?
2. 리액티브 시스템의 기본 원리(중요)
3. 리액티브 시스템 설계에 완벽하게 일치하는 비즈니스 사례
4. 리액티브 시스템에 좀 더 적합한 프로그래밍 기술
5. 스프링 프레임워크가 리액티브로 전환하는 이유

## 1. 왜 리액티브인가?
* 시간당 평균 1,000명의 사용자가 방문한다고 가장
  * 톰캣(Tomcat) 웹 서버 + 500개의 스래드 풀로 구성
  * 평균 응답 시간은 250 ms
* 초당 몇 명의 사용자 요철을 처리할 수 있는가? 그리고 이 A서버의 문제는 무엇인가?
1) 답: 2,000
2) 답: 확장성 제한, 단일 서버 확장성 제한 예) 로스트 아크

해결책
1. 탄력성(elasticity)
  * 작업 부하에서 응답성을 유지하는 능력
  * 시스템 처리량이 자동으로 증가해야 하고 수요가 감소하면 자동으로 감소해야함
2. 문제 해결을 위한 가장 흔한 방법
  * 수평적/ 수직적 확장
3. 암달의 법칙(Amdahl's Law)/ Gunther의 보편적 확장성 모델(Universal Scalability Model)

* 수평적 확장 시 성능이 비약적으로 늘지 않음 > 수직적 확장(메모리 증설) * 서버를 꺼야함, 서버 세팅을 다시해야 함


베어메탈(서버 컴퓨터)


2010 AWS 등장 이후->  수평/ 수직 확장
 

* 그러나 장애 발생과 무관하게 응답성을 유지하는 능력을 갖추지 않고 확장 가능한 분산 시스템을 구축하는 것은 어려움
* 해결방법
  * 시스템의 기능 요소를 격리해 모든 내부 장애를 격리하고 독립성을 확보함으로써 달성할 수 있음
* 탄력성과 복원력이 밀접하게 결합돼 있으며, 이 두 가지를 모두 사용할 때만 시스템의 진정한 응답성을 달성할 수 있다는 것

1.2  메세지 기반 통신
  1. 문제점
    
컴퓨터 구조, 네트워크, 운영체제
블럭킹, 논블럭킹, 동기, 비동기
1) 블럭킹 + 동기 : 파일 입출력
2) 논블럭킹 + 비동기 : stream, NIO2
3) 블럭킹 + 비동기 : ? 가산점
4) 논블럭킹 + 동기 : ??????? 아직 모름

## 리액티브 시스템의 기본 원리
[[https://www.reactivemanifesto.org/ko]]
가치 : 응답성
매개체 : 탄력성(시스템이 얼마 만큰 load에 대해서 응답), 복원력(시스템이 무너졌다가 살아나는 능력)
표현 방식 : 메시지 기반(MPI)
정리 : **메시지 기반을 중심으로 탄력성과 복원력을 높여 응답성을 보장**
아파치 카프카(생산자, 소비자)

카프카(메시지 기반), 스프링, 서버(클라우드 > 탄력성과 복원력), 리액트(응답성)
부산 센텀 -> AWS 강의

자바의 까다로운 부분
1. 파일 입출력
2. 제네릭
3. 콜렉션
4. 쓰레드
5. 날짜

리액티브 시스템 설계에 완벽하게 일치하는 비즈니스 사례
* [[https://microservices.io/patterns/]]
* 모던 마이크로서피스 패턴을 예로 든 웹 스토어를 개선
* 위치 투명성을 위해 API 게이트 패턴을 서용
* 위와 비슷한 사례로 '애널리틱스' 분야를 들 수 있음

모든 객체는 섬이다. (Solid)
어떠한 객체도 섬이 아니다. (상속, 인터페이스) -> 메세지
클린 아키택쳐

스프링 배치 카프카

Redux : 상태 메시지 관리 머신
메세지는 메세지 큐

리액티브 시스템에 좀 더 적합한 프로그래밍 기술
* 복원성 확복
  * 배압 지원을 활성화해야함
*   메시지 기반
  * 메시지 브로커가 필요함 > 큐 프로그램 ex) 카프카 zeroMQ, rabbitmq
* 실제 환경에서는 데이터 스트림이 일괄 처리로 데이터베이스

도서 카프카, 데이터 플랫폼의 최강자 (공용준)

스프링 프레임 워크가 리액티브로 전환하는 이유
* JVM 세계에서 리액티브 시스템을 구축하는데 쓰이는 가장 널리 알려진 프레임워크는 Akka 및 Vert.x
* 스프링 클라우드
  * 스프링 클라우드 프레임워크는 몇 가지 문제점을 해결하고 분산 시스템 구축을 단순화하는 기반 프로젝트


1. 명령 -> 동기 문제(블로킹) -> 콜백 함수로 전달
2. 콜백 ->  가장 큰 문제점 -> hell 가독성 저하 시스템 부하
3. 쓰레드 -> 시스템 부하/ 관리가 힘듦 -> Future
4. Future를 사용해서 결과값 반환을 지연 JDK6 version
5. Promise를 CompletionStage와 CompletableFuture 이용해 구현  `.then`  JDK8 -> 배압 X
6. **RxJava**

메시지 기반은 있다고 가정
리액티브 프로그래밍 핵심
* 비동기
* 메시지

[[https://sigmadream.tistory.com/95]]