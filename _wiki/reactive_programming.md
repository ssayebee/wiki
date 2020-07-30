---
layout  : wiki
title   : Reactive Programming 
summary : 
date    : 2020-07-22 00:17:54 +0900
updated : 2020-07-28 15:02:43 +0900
tags    : 
toc     : true
public  : true
parent  : 
latex   : false
---

# Reactive Programming

* Reactive Programming은 기본적으로 모든 것을 스트림(stream)으로 본다.
* 이벤트, ajax call 등 모든 데이터의 흐름을 시간순서에 의해 전달되어지는 스트림으로 처리한다.
* 스트림이란, 시간 순서에의해 전달 되어진 값들의 collection 정도로 이해해 보자.
* 각각의 스트림은 새로 만들어(branch)져서 새로운 스트림이 될 수도 있고, 여러개의 스트림이 합쳐(merge) 질수 도 있다.
* 스트림은 map, filter과 같은 함수형 메소드를 이용하여, immutable하게 처리할 수 있다.
* 스트림을 listening 함으로써 데이터의 결과값을 얻는다. 이를 subscribe라고 표현한다.

## Observable과 Observer

* Observable은 observer의 메소드를 호출하면서 item이나 정보등을 호출(emit)하는 역할을 한다.
* Observer는 onNext, onError, onCompleted 의 메소드가 구현되어 있다.
* Observer는 observable을 subscribe한다. Observer는 Subscriber, watcher, reactor로 불려진다.

## 왜 Reactive Programming인가?

* 함수형으로 만들기 때문에, 하나의 함수는 그 역할 자체에 집중할 수 있다.
* Promise의 장점을 극대화할 수 있다.
* Observable은 A stream에 의해 B stream이 영향을 받는 경우, A만 바꿔도 B가 자동으로 바꿀 수 있도록 구성할 수 있어서, 데이터의 동기화를 간편하게 할 수있다. 이러한 이유는 A와 B stream 사이의 관계를 선언적으로 선언했기 때문에 가능하다.
