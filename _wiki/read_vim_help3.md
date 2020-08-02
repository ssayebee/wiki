---
layout  : wiki
title   : 하루 20줄 vim help 번역하기 (3편)
summary : 
date    : 2020-08-03 00:56:21 +0900
updated : 2020-08-03 03:46:10 +0900
tags    : [vim]
---

# 하루 20줄 vim help 번역하기 (3편)

## 위 아래 움직임

| 명령 | 횟수 | 예제 | 설명                                                                  |
|------|------|------|-----------------------------------------------------------------------|
| k    | N    | `k`  | N라인 위로 움직이기 (also: CTRL-P and <Up>)                           |
| j    | N    | `j`  | N라인 아래로 움직이기 (also: CTRL-J, CTRL-N, <NL>, and <Down>)        |
| -    | N    | `-`  | N라인 위로, non-blank character에 커서                                |
| +    | N    | `+`  | N라인 아래, non-blank character에 커서                                |
| _    | N    | `_`  | N-1라인 아래, non-blank character에 커서                              |
| G    | N    | `G`  | N번째 줄(default: last line), non-blank character에 커서              |
| gg   | N    | `g`  | N번째 줄(default: first line), non-blank character에 커서             |
| N%   | N    | `%`  | N% 만큼 아래로 이동; N must be given, otherwise it is the  %  command |
| gk   | N    | `g`  | N스크린 위로 이동 (differs from "k" when line wraps)                  |
| gj   | N    | `g`  | N스크린 아래로 이동 (differs from "j" when line wraps)                |

------------------------------------------------------------------------------
Text object 움직임

((((()))))

| 명령  | 횟수 | 예제 | 설명                                            |
|-------|------|------|-------------------------------------------------|
| )     | N    | `)`  | N 문장 앞으로 이동                              |
| (     | N    | `(`  | N 문장 뒤로 이동                                |
| }     | N    | `}`  | N 문단 앞으로 이동                              |
| {     | N    | `{`  | N 문단 뒤로 이동                                |
| ]]    | N    | `]]` | N 섹션 앞으로, 섹션의 맨앞                      |
| $$    | N    | `$$` | N 섹션 뒤로, 섹션의 맨뒤                        |
| ]$    | N    | `]$` | N 섹션 앞으로, 섹션의 끝                        |
| $]    | N    | `$]` | N 섹션 뒤로, 섹션의 끝                          |
| $(    | N    | `$(` | N times back to unclosed '('                    |
| ${    | N    | `${` | N times back to unclosed '{'                    |
| $m    | N    | `$m` | N times back to start of method (for Java)      |
| $M    | N    | `$M` | N times back to end of method (for Java)        |
| ])    | N    | `])` | N times forward to unclosed ')'                 |
| ]}    | N    | `]}` | N times forward to unclosed '}'                 |
| ]m    | N    | `]m` | N times forward to start of method (for Java)   |
| ]M    | N    | `]M` | N times forward to end of method (for Java)     |
| $#    | N    | `$#` | N times back to unclosed "#if" or "#else"       |
| ]#    | N    | `]#` | N times forward to unclosed "#else" or "#endif" |
| $star | N    | `$*` | N times back to start of comment "/*"           |
| ]star | N    | `]*` | N times forward to end of comment "*/"          |

------------------------------------------------------------------------------
