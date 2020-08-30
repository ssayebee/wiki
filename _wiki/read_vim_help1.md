---
layout  : wiki
title   : 하루 20줄 vim help 번역하기 (1편)
summary : vim에서 help 명령어 사용하기
date    : 2020-08-01 03:06:06 +0900
updated : 2020-08-03 00:45:32 +0900
tags    : [vim]
comments: true
toc     : true
---

vim에서 :help를 모두 읽어 보기 위해서 시작한다.

help.txt는 Vim 8.0 버전을 위해서 만들어 졌다. 최종 수정은 2018년 10월 28일 이다.

VIM - help 메인 파일

* 움직이기      : `h`, `j`, `k`, `l`을 이용해서 왼쪽, 아래, 위, 오른쪽으로 커서를 움직일 수 있다.
* 현재 창 닫기  : `:q<Enter>`
* Vim 나가기    : `:qa<Enter>` (모든 변경 사항을 잃어버릴 수 있으니 주의!)
* 주제로 점프   : `CTRL-J`를 누르면 tag가 있는 주제 이동한다.
* 마우스 사용   : `:set mouse=a` xterm이나 GUI에서 마우스 사용가능
* 돌아가기      : `CTRL-T` 혹은 `CTRL-O`를 누르면 뒤로 돌아간다.
* 특정 도움 얻기: `:help command`의 조합으로 무엇이든 도움 받을 수 있다. 접두사 붙이기


| WHAT                 | 접두사 | 예제                |
|----------------------|--------|---------------------|
| normal mode  명령어  |        | `:help x`           |
| Visual mode  명령어  | v_     | `:help v_u`         |
| Insert mode 명령어   | i_     | `:help i_<Esc>`     |
| Command-line command | :      | `:help :quit`       |
| Command-line editing | c_     | `:help c_<Del>`     |
| Vim command 인자     | -      | `:help -r`          |
| Option               | '      | `:help 'textwidth'` |
| 정규 표현식          | /      | `:help /[`          |
