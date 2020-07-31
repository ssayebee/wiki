---
layout  : wiki
title   : gdb를 이용한 터미널 c디버깅
summary : 
date    : 2020-07-28 15:37:50 +0900
updated : 2020-07-31 17:58:19 +0900
tags    : [linux, clang, debug]
---

# gdb를 이용한 터미널 c디버깅

gdb를 이용해서 터미널 환경에서 c언어 디버깅하기

## gdb(GNU Debugger)란?

GNU에서 나온 디버거 프로그램이다.
터미널 환경에서 디버깅을 할 수 있게 지원해준다.

## 설치

apt install gdb

## 사용방법

gcc를 이용해서 컴파일 할 때, -g option을 준다.

ex) gcc -g hello.c
```shell    
$ gdb a.out
```

## 간단한 사용법

| command            | explain                                                      |
|--------------------|--------------------------------------------------------------|
| l                  | main함수 기준으로 소스를 출력함.                             |
| l [# line]         | line 번호를 기준으로 소스를 출력함.                          |
| l [func]           | func를 기준으로 소스를 출력함.                               |
| l -                | 출력된 행의 이전 행을 출력함.                                |
| r [args(option)]   | 프로그램을 실행한다. 만약 break point가 있다면, bp 까지 실행 |
| n [#(option)]      | 다음 명령을 실행한다. 횟수를 인자로 주면 해당 인자만큼 실행  |
| b [func or # line] | 특정 함수나, 라인에 정지점을 설정한다.                       |
| s                  | 한줄을 실행한다.                                             |
| p [expr]           | 수식의 값을 출력한다.                                        |
| display [expr]     | 추가한 변수를 매번 출력해서 보여준다.                        |
| h                  | 도움말                                                       |
| q                  | 프로그램을 종료한다.                                         |

