---
layout  : wiki
title   : 스프링 부트 튜토리얼(1)
summary : 스프링 부트란?
date    : 2020-09-27 01:49:24 +0900
updated : 2020-09-27 02:35:38 +0900
tags    : [spring]
comments: true
---

## 1. 스프링 부트란?

마이크로 서비스를 생성하는데 사용되는 Java 기반 오픈소스 프레임 워크.

마이크로 서비스 개발을 위한 인프라지원이 포함되어 있으며, 단지 실행하는 것 만으로도 
상업용급 애플리케이션을 제작할 수 있다.

### 1.1 스프링 부트의 이점

1. 쉽게 이해할 수 있고, 스프링 앱을 쉽게 개발할 수 있다.
2. 생산성을 증가시킬 수 있다.
3. 개발 시간을 단축 시킬 수 있다.

### 1.2 스프링 부트의 설계 목표

1. Spring에서의 복잡한 xml 설정을 피한다.
2. 간단하게 Spring 애플리케이션을 개발한다.
3. 개발 시간을 줄이고, 애플리케이션을 독립적으로 실행한다.
4. 애플리케이션을 실행시키는 더 쉬운 방법을 제공한다.

## 2. 마이크로 서비스란?

Micro Service는 개발자가 독립적으로 서비스를 개발하고 배포할 수 있는 아키텍쳐이다.

각각의 서비스들은 프로세스를 가지고, 비즈니스 애플리케이션을 지원하기 위한 경량화 
모델을 달성한다.

### 2.1 마이크로 서비스의 이점

1. 배포 간편화
2. 간단한 확장성
3. 컨테이너와의 호환
4. 최소한의 설정
5. 개발 시간 단축

## 3. 스프링의 동작 원리

Spring Boot는 **@EnableAutoConfiguration** 어노테이션을 사용하여서 프로젝트의 추가한 
의존성을 바탕으로 스프링 앱의 설정을 자동으로 구성한다. (예를 들어서, 만약 Mysql이
classpath에 등록되어 있어도 DB 연결을 설정하지 않는다면 Spring Boot는 인메모리 
데이터 베이스를 자동으로 구성한다.)

Spring boot는 **@ComponentScan** 어노테이션을 사용하여 프로젝트에 사용된 모든 Component들을 
자동으로 스캔한다.

Spring boot의 프로젝트 `entry point`는 **@SpringBootApplication** 어노테이션이 포함 된 
class 이다.

**@SpringBootApplication** 어노테이션엔 **@ComponentScan**, **@EnableAutoConfiguration** 
어노테이션이 포함되어 있다.

## Link

* <https://www.tutorialspoint.com/spring_boot/index.htm>
