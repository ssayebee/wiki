---
layout  : wiki
title   : 하루 20줄 vim help 번역하기 (8편)
summary : 삽입모드에서의 키와 특수 키
date    : 2020-08-25 05:31:43 +0900
updated : 2020-08-25 06:01:45 +0900
tags    : 
comments: true
toc     : true
---

## 1. Insert mode keys

### Insert mode를 떠나기

| 키         | 예시     | 설명                                                  |
|------------|----------|-------------------------------------------------------|
| `i_<Esc>`  | `<Esc>`  | insert mode를 종료하고 nomal mode로 돌아간다.         |
| `i_CTRL-C` | `CTRL-C` | `<Esc>`와 같지만 축약을 사용하지 않는다.              |
| `i_CTRL-O` | `CTRL-O` | {명령어}를 실행한다. {명령어} 실행 후 삽입모드로 복귀 |

### Insert mode에서 움직이기

| 키           | 예시               | 설명                                    |
|--------------|--------------------|-----------------------------------------|
| `i_<Up>`     | `cursor keys`      | 커서를 위, 아래, 양옆으로 움직인다.     |
| `i_<S-Left>` | `shift-left/right` | 한 단어만큼 왼쪽/오른쪽으로 움직인다.   |
| `i_<S-Up>`   | `shift-up/down`    | 스크린의 크기만큼 위, 아래로 움직인다.  |
| `i_<End>`    | `<End>`            | 커서를 라인의 마지막 글자로 옮긴다.     |
| `i_<Home>`   | `<Home>`           | 커서를 라인의 첫글자로 옮긴다.          |

------------------------------------------------------------------------------

## 2. Insert mode에서의 특수 키

| 키           | 예시                               | 설명                                                               |
|--------------|------------------------------------|--------------------------------------------------------------------|
| `i_CTRL-V`   | `CTRL-V {char}..`                  | insert character literally, or enter decimal byte value            |
| `i_<NL>`     | `<NL> or <CR> or CTRL-M or CTRL-J` | 새 줄에서 시작한다.                                                |
| `i_CTRL-E`   | `CTRL-E`                           | insert the character from below the cursor                         |
| `i_CTRL-Y`   | `CTRL-Y`                           | insert the character from above the cursor                         |
| `i_CTRL-A`   | `CTRL-A`                           | insert previously inserted text                                    |
| `i_CTRL-@`   | `CTRL-@`                           | insert previously inserted text and stop Insert mode               |
| `i_CTRL-R`   | `CTRL-R {0-9a-z%#:.-="}`           | insert the contents of a register                                  |
| `i_CTRL-N`   | `CTRL-N`                           | insert next match of identifier before the cursor                  |
| `i_CTRL-P`   | `CTRL-P`                           | insert previous match of identifier before the cursor              |
| `i_CTRL-X`   | `CTRL-X ...`                       | complete the word before the cursor in various ways                |
| `i_<BS>`     | `<BS> or CTRL-H`                   | delete the character before the cursor                             |
| `i_<Del>`    | `<Del>`                            | delete the character under the cursor                              |
| `i_CTRL-W`   | `CTRL-W`                           | delete word before the cursor                                      |
| `i_CTRL-U`   | `CTRL-U`                           | delete all entered characters in the current line                  |
| `i_CTRL-T`   | `CTRL-T`                           | insert one shiftwidth of indent in front of the current line       |
| `i_CTRL-D`   | `CTRL-D`                           | delete one shiftwidth of indent in front of the current line       |
| `i_0_CTRL-D` | `0 CTRL-D`                         | delete all indent in the current line                              |
| `i_^_CTRL-D` | `^ CTRL-D`                         | delete all indent in the current line, restore indent in next line |
