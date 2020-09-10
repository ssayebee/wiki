---
layout  : wiki
title   : Vim 교정학원 정리
summary : 유튜브 Vim 교정학원의 기술 정리
date    : 2020-09-07 04:42:53 +0900
updated : 2020-09-07 05:36:39 +0900
tags    : [vim]
comments: true
---

Youtube의 Vim 교정 학원에서 다양한 Vim 사용방법을 정리

# 1. 

**Don't put any lines in your vimrc that you don't understand**

이해하지 못하는 내용을 vimrc에 넣지 말자!

## 1. `args` / `argdo`를 이용한 다중 파일 수정


```
:args **/*.html
:argdo %s#apple#banana#ge | update
```

* `args`는 해당 패턴과 일치하는 파일의 버퍼를 모두 연다.
* `argdo`열려있는 모든 버퍼에 명령을 수행한다.
* `update`를 pipe하면 변경사항이 바로 저장된다.
* vim 문자열 치환 구분자가 `/`, `#`이 동일하게 동작한다.


## 2. `sort` 간단하게 정렬하기

* visual block 지정 후 sort를 사용할 수 있음.
* `:!sort -R` 명령어로 외부 sort(random)을 할 수 있음.
* vim에서 cmd명령어를 반복할 때는, `.`이 아닌 `@:`를 사용함.

## 3. `vimgrep` / `copen (quickfix)`

```
:vimgrep 'vim' **/*.md
```
