---
layout  : wiki
title   : 하루 20줄 vim help 번역하기 (2편)
summary : 
date    : 2020-08-02 17:22:48 +0900
updated : 2020-08-03 00:46:42 +0900
tags    : [vim]
---

# 하루 20줄 vim help 번역하기 (2편)

help 검색: `:help word` 입력하고 `<Ctrl>-D`를 누르면 단어에 대한 도움말 항목을 얻을 수 있다.
혹은 `:helpgrep word`를 사용할 수 있다.

Vim은 Vi IMproved의 약자이다. Vim의 대부분은 `Bram Moolenaar`가 만들었지만, 많은 사람들의 도움이 있었다.

BASIC:

| 문서     | 간단 설명                              |
|----------|----------------------------------------|
| quickref | 가장 많이 사용되는 명령어 미리보기     |
| tutor    | 비기너를 위한 30분 트레이닝 코스       |
| copying  | 저작권에 대해서                        |
| iccf     | 우간다의 불쌍한 아이들 돕기            |
| sponsor  | Vim개발 스폰서, 등록된 Vim 사용자 되기 |
| www      | World Wide Web에서의 Vim               |
| bugs     | 버그 신고하기                          |

`quickref 문서 부터 번역 시작!`

*N 명령어가 입력되기 전에 줄 수 있으며, 횟수를 지정하는데 사용된다.*

## 왼쪽, 오른쪽 움직이기

| 명령 | 횟수 지정 | 용법      | 설명                                                                     |
|------|-----------|-----------|--------------------------------------------------------------------------|
| h    | N         | `h`       | 왼쪽 이동 (also: CTRL-H, <BS>, or <Left> key)                            |
| l    | N         | `l`       | 오른쪽 이동 (also: <Space> or <Right> key)                               |
| 0    |           | `0`       | 라인의 첫 글자로 이동 (also: <Home> key)                                 |
| ^    |           | `^`       | 라인의 첫번째 non-block 문자로 이동                                      |
| $    | N         | `$`       | 라인의 마지막 문자로 이동 (N-1 lines lower), (also: <End> key)           |
| g0   |           | `g0`      | 스크린의 맨앞으로 이동 (differs from "0", when lines wrap)               |
| g^   |           | `g^`      | 스크린의 첫번째 non-block 문자로 이동 (differs from "^" when lines wrap) |
| g$   | N         | `g$`      | 스크린의 마지막 문자로 이동 (differs from "$" when lines wrap)           |
| gm   |           | `gm`      | 스크린의 가운데로 이동                                                   |
| bar  | N         | `|`       | N번째 행으로 이동 (default: 1)                                           |
| f    | N         | `f{char}` | N번쨰 {char}로 커서 이동, 오른쪽                                         |
| F    | N         | `F{char}` | N번쨰 {char}로 커서 이동, 왼쪽                                           |
| t    | N         | `t{char}` | N번째 {char}의 직전 문자로 이동, 오른쪽                                  |
| T    | N         | `T{char}` | N번째 {char}의 직전 문자로 이동, 왼쪽                                    |
| ;    | N         | `;`       | 마지막 "f", "F", "t", or "T"  명령을 N번 실행                            |
| ,    | N         | `,`       | 마지막 "f", "F", "t", or "T"  명령을 N번 실행, 반대 방향                 |

------------------------------------------------------------------------------
