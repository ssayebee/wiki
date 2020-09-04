---
layout  : wiki
title   : Tmux를 사용해 보자
summary : Tmux를 이용한 터미널 멀티테스킹
date    : 2020-08-25 06:35:47 +0900
updated : 2020-09-05 02:26:00 +0900
tags    : [terminal, linux]
comments: true
---

## 1. 설치하기

```zsh
$ sudo apt install tmux
```

## 2. tmux의 구조

### 2.1 tmux의 3가지 계층 구조

**Tmux**는 `Session`, `Window`, `Pane`의 세가지 계층으로 구성되었다.

**Session**
* 각각의 세션은 프로젝트 혹은 어떤 워크플로우의 가장 큰 단위이다.
* 여러 윈도우로 구성되어 있다.

**Window**
* 사용자의 한 터미널 화면 전체를 윈도우라고 한다.
* 해당 윈도우를 다시 여러개의 틀로 쪼갤 수 있지만, 하나의 화면을 구성하고 있다는 의미에서 윈도우라는 이름을 사용한다.

**Pane**
* 하나의 윈도우에서 분할 된 화면
* 각 틀은 독립적으로 동작하는 하나의 터미널이다.

## 3. tmux 사용해보기

```zsh
$ tmux
```

### 3.1 Prefix

tmux명령어는 기본적으로 <kbd>Ctrl+b</kbd>와 다른키의 조합으로 사용된다.

### 3.2 Pane 다루기

| 단축키                              | 설명                                                  |
|-------------------------------------|-------------------------------------------------------|
| <kbd>Ctrl+b</kbd> <kbd>%</kbd>      | 수평으로 Pane을 확장한다.                             |
| <kbd>Ctrl+b</kbd> <kbd>"</kbd>      | 수직으로 Pane을 확장한다.                             |
| <kbd>Ctrl+b</kbd> <kbd>↑</kbd>      | 활성화 Pane을 현재 위치에서 방향키 방향으로 이동한다. |
| <kbd>Ctrl+b</kbd> <kbd>x</kbd>      | 현재 Pane을 삭제 한다. (Y/N)                          |
| <kbd>Ctrl+b</kbd> <kbd>z</kbd>      | 현재 Pane을 Zoom 한다. 이미 Zoom인 경우 Toggle        |
| <kbd>Ctrl+b</kbd> <kbd>Ctrl+↑</kbd> | 현재 Pane의 크기를 재조정 한다.                       |

### 3.3 Window 다루기

`*`는 현재 활성화되어 있는 Window를 표시한다.

| 단축키                           | 설명                                |
|----------------------------------|-------------------------------------|
| <kbd>Ctrl+b</kbd> <kbd>c</kbd>   | 새로운 윈도우를 생성한다.           |
| <kbd>Ctrl+b</kbd> <kbd>n</kbd>   | 다음 윈도우로 이동한다.             |
| <kbd>Ctrl+b</kbd> <kbd>p</kbd>   | 이전 윈도우로 이동한다.             |
| <kbd>Ctrl+b</kbd> <kbd>num</kbd> | num 윈도우로 이동한다.              |
| <kbd>Ctrl+b</kbd> <kbd>,</kbd>   | 현재 윈도우의 이름을 변경한다.      |
| `Window 종료하기`               | 해당 Window에 모든 Pane을 삭제한다. |

### 3.4 Session 다루기

| 단축키                         | 설명                                   |
|--------------------------------|----------------------------------------|
| <kbd>Ctrl+b</kbd> <kbd>s</kbd> | 현재 존재하는 Session 목록 보기        |
| <kbd>Ctrl+b</kbd> <kbd>$</kbd> | 현재 Session의 이름을 변경한다.        |
| <kbd>Ctrl+b</kbd> <kbd>d</kbd> | 현재 Session을 분리(Detach)한다.       |
| `Session 종료하기`            | 해당 Session에 모든 Window를 삭제한다. |

```zsh
$ tmux list-sessions                  # Session의 리스트를 출력

$ tmux a                              # Session중 하나를 불러(Attech)온다.
$ tmux a -t `session_name`            # `session_name`을 불러(Attech)온다.

$ tmux new-session -s `session_name`  # `session_name`의 새로운 Session을 생성
$ tmux kill-session -t `session_name` # `session_name`을 삭제한다.
```

## 4. true color 사용하기

### 4.1 문제 상황


**tmux**환경에서 neovim `Plug 'sonph/onehalf', {'rtp': 'vim/'}` **theme**이 재대로 동작하지 않는 문제점이 발생했다.

**아래의 명령어로 terminal이 true color를 지원하는지 유무를 확인 할 수있다.**

```zsh
curl -s https://raw.githubusercontent.com/JohnMorales/dotfiles/master/colors/24-bit-color.sh | bash
```

### 4.2 문제 해결

아래의 내용을 `~/.tmux.conf`파일에 추가하자
```conf
set -g default-terminal "tmux-256color"
set -ga terminal-overrides ",*256col*:Tc"
```

```zsh
source ~/.tmux.conf
```

정상적으로 출력됨을 확인 할 수 있다.

## 5. 마우스 기능 활성화

아래의 내용을 `~/.tmux.conf`파일에 추가하자
```conf
set -g mouse on
```



## Link

* [Youtube 광일공방](https://www.youtube.com/watch?v=FdvjywJBQJg&t=1569s)
* [Github tmux](https://github.com/tmux/tmux)
