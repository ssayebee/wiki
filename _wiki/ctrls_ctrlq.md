---
layout  : wiki
title   : vim &ltCtrl&gt + s 먹통 문제
summary : vim에서 ^S를 눌렀을때, 먹통되는 문제 해결
date    : 2020-08-08 01:55:33 +0900
updated : 2020-08-10 00:18:36 +0900
tags    : 
comments: true
---

들어가기 앞서서, 

## 1. 문제 상황

vimwiki table 키 매핑 도중, `<C-s>`를 눌렀을때, 터미널이 먹통이 되는 현상이 발생했다.

`wsl`혹은 `windows Terminal`의 키 매핑 문제인지 알았는데, 정확히는 단말기 설정 문제인 것 같다.


## 2. 문제 해결

데이터 링크의 한쪽 끝에서 더 이상 데이터를 수신 할 수 없거나, 더 이상 데이터를 접근 할 수 없으면 
다른 쪽 끝으로 `XOFF`코드를 보내고, 다른 쪽 끝은 `XOFF`코드를 받고 전송을 중단 한다. 데이터를 다시 받을 준비가 되면,
`XON`코드를 보내고, 수신자는 수신을 준비한다. 

(~~네트워크에서 배웠던 서킷 스위칭 방식의 호 요청이 떠올랐다.~~)

<kbd>Ctrl</kbd> + <kbd>s</kbd>는 `XOFF`, <kbd>Ctrl</kbd> + <kbd>q</kbd>는 `XON`을 의미 한다.

따라서, ^Q를 이용하면 다시 입력이 가능하지만, 여전히 문제의 해결책이 아니기 떄문에, 더 알아보는 도중에 `stty`라는 것을 알게 되었다.

위키피디아 [software flow control](https://en.wikipedia.org/wiki/Software_flow_control)에서 더 자세한
정보를 얻을 수 있다.

### stty란?

> 단말기의 세팅을 보여 주거나, 변경 할 수 있게 도와주는 프로그램이다.
> 
> `stty -a`를 사용하면 현재, tty에 설정 내용을 확인 할 수 있다.

```bash
$ stty -ixon
```

해당 명령어를 통해서 `XON`, `XOFF` 기능을 끌 수 있다.

### Link

* https://en.wikipedia.org/wiki/Software_flow_control
